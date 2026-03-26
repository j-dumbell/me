import {
  StackProps,
  Stack,
  aws_cloudfront as cloudfront,
  aws_s3 as s3,
  RemovalPolicy,
  aws_iam as iam,
  aws_route53 as route53,
  aws_certificatemanager as acm,
  aws_cloudfront_origins as origins,
  aws_route53_targets as route53Targets,
  aws_sns as sns,
  aws_sns_subscriptions as snsSubscriptions,
  aws_lambda as lambda,
  aws_budgets as budgets,
  Duration,
} from "aws-cdk-lib";
import { Construct } from "constructs";

const domainName = "dumbell.dev";
const wwwDomainName = `www.${domainName}`;

interface WebsiteStackProps extends StackProps {
  bucketName: string;
  alertEmail: string;
}

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props: WebsiteStackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "website-bucket", {
      bucketName: props.bucketName,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.RETAIN,
      accessControl: s3.BucketAccessControl.PRIVATE,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      encryption: s3.BucketEncryption.S3_MANAGED,
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET],
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
        },
      ],
    });

    const cloudfrontOriginAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "cloudfront-origin-access-identity",
    );

    websiteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [websiteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            cloudfrontOriginAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    const zone = route53.HostedZone.fromLookup(this, "hosted-zone", {
      domainName: domainName,
    });

    const certificate = new acm.DnsValidatedCertificate(
      this,
      "site-certificate",
      {
        domainName: domainName,
        subjectAlternativeNames: [wwwDomainName],
        hostedZone: zone,
        region: "us-east-1",
      },
    );

    const connectSrc: string[] = [
      "https://api.iconify.design",
      "https://api.unisvg.com",
      "https://api.simplesvg.com",
      "https://www.google-analytics.com",
      "https://region1.analytics.google.com",
      "https://www.google.co.uk",
      "https://www.google.com",
      "https://www.googletagmanager.com",
    ];

    const cspPolicy = `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.iconify.design https://www.googletagmanager.com/gtag/js; style-src 'self' 'unsafe-inline'; img-src 'self' https://cdn.iconify.design https://www.google.co.uk https://www.google.com https://www.googletagmanager.com; connect-src 'self' ${connectSrc.join(
      " ",
    )}; font-src 'self'; object-src 'none'; media-src 'self';`;

    const responseHeaderPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      "security-headers-response-header-policy",
      {
        comment: "Security headers response header policy",
        securityHeadersBehavior: {
          contentSecurityPolicy: {
            override: true,
            contentSecurityPolicy: cspPolicy,
          },
          strictTransportSecurity: {
            override: true,
            accessControlMaxAge: Duration.days(2 * 365),
            includeSubdomains: true,
            preload: true,
          },
          contentTypeOptions: {
            override: true,
          },
          referrerPolicy: {
            override: true,
            referrerPolicy:
              cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
          },
          xssProtection: {
            override: true,
            protection: true,
            modeBlock: true,
          },
          frameOptions: {
            override: true,
            frameOption: cloudfront.HeadersFrameOption.DENY,
          },
        },
      },
    );

    const cloudfrontDistribution = new cloudfront.Distribution(
      this,
      "cloudfront-distribution",
      {
        certificate: certificate,
        domainNames: [domainName, wwwDomainName],
        priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
        defaultRootObject: "index.html",
        defaultBehavior: {
          origin: new origins.S3Origin(websiteBucket, {
            originAccessIdentity: cloudfrontOriginAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          responseHeadersPolicy: responseHeaderPolicy,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
          originRequestPolicy: new cloudfront.OriginRequestPolicy(
            this,
            "CORSOriginRequestPolicy",
            {
              headerBehavior: cloudfront.OriginRequestHeaderBehavior.allowList(
                "Origin",
                "Access-Control-Request-Headers",
                "Access-Control-Request-Method",
              ),
            },
          ),
        },
      },
    );

    [domainName, wwwDomainName].forEach((recordName) => {
      new route53.ARecord(this, `a-record-${recordName}`, {
        recordName,
        target: route53.RecordTarget.fromAlias(
          new route53Targets.CloudFrontTarget(cloudfrontDistribution),
        ),
        zone,
      });
    });

    // Budget killswitch: disables CloudFront when monthly spend exceeds the limit
    const budgetAlertTopic = new sns.Topic(this, "budget-alert-topic");

    budgetAlertTopic.addToResourcePolicy(
      new iam.PolicyStatement({
        principals: [new iam.ServicePrincipal("budgets.amazonaws.com")],
        actions: ["sns:Publish"],
        resources: [budgetAlertTopic.topicArn],
      }),
    );

    const killswitchFn = new lambda.Function(this, "killswitch-fn", {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
const { CloudFrontClient, GetDistributionConfigCommand, UpdateDistributionCommand } = require("@aws-sdk/client-cloudfront");
const client = new CloudFrontClient({});
exports.handler = async () => {
  const id = process.env.DIST_ID;
  const { DistributionConfig, ETag } = await client.send(new GetDistributionConfigCommand({ Id: id }));
  if (!DistributionConfig.Enabled) { console.log("Already disabled"); return; }
  DistributionConfig.Enabled = false;
  await client.send(new UpdateDistributionCommand({ Id: id, IfMatch: ETag, DistributionConfig }));
  console.log("CloudFront distribution disabled - budget exceeded");
};`),
      environment: {
        DIST_ID: cloudfrontDistribution.distributionId,
      },
    });

    killswitchFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          "cloudfront:GetDistributionConfig",
          "cloudfront:UpdateDistribution",
        ],
        resources: [
          `arn:aws:cloudfront::${this.account}:distribution/${cloudfrontDistribution.distributionId}`,
        ],
      }),
    );

    budgetAlertTopic.addSubscription(
      new snsSubscriptions.LambdaSubscription(killswitchFn),
    );

    new budgets.CfnBudget(this, "monthly-budget", {
      budget: {
        budgetType: "COST",
        timeUnit: "MONTHLY",
        budgetLimit: { amount: 10, unit: "USD" },
      },
      notificationsWithSubscribers: [
        {
          // Warn at 80% — email only
          notification: {
            notificationType: "ACTUAL",
            comparisonOperator: "GREATER_THAN",
            threshold: 80,
            thresholdType: "PERCENTAGE",
          },
          subscribers: [
            { subscriptionType: "EMAIL", address: props.alertEmail },
          ],
        },
        {
          // Kill at 100% — disable CloudFront + email
          notification: {
            notificationType: "ACTUAL",
            comparisonOperator: "GREATER_THAN",
            threshold: 100,
            thresholdType: "PERCENTAGE",
          },
          subscribers: [
            { subscriptionType: "SNS", address: budgetAlertTopic.topicArn },
            { subscriptionType: "EMAIL", address: props.alertEmail },
          ],
        },
      ],
    });
  }
}
