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
  Duration,
} from "aws-cdk-lib";
import { Construct } from "constructs";

const domainName = "dumbell.dev";
const wwwDomainName = `www.${domainName}`;

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "website-bucket", {
      bucketName: "jdumbell-portfolio-website-bucket",
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
      "www.google-analytics.com",
    ];
    const cspPolicy = `default-src 'self'; script-src 'self' ‘unsafe-inline’ https://code.iconify.design www.googletagmanager.com/gtag/js; style-src 'self' 'unsafe-inline'; img-src 'self' https://cdn.iconify.design; connect-src 'self' ${connectSrc.join(
      " ",
    )}; font-src 'self'; object-src 'none';`;

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
        defaultRootObject: "index.html",
        defaultBehavior: {
          origin: new origins.S3Origin(websiteBucket, {
            originAccessIdentity: cloudfrontOriginAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          responseHeadersPolicy: responseHeaderPolicy,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
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
  }
}
