import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import React, { FC } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import { Hyperlink } from '@/components/hyperlink'

export type HoverCardProps = {
  className?: string
  iconClassName?: string
  title: string
  icon?: string
  description: string
  link: string
}

export const TechHoverCard: FC<HoverCardProps> = (props) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className={props.className}>
        <Button variant="outline" className="h-6 border-slate-300 px-2">
          {props.title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          {props.icon && (
            <Icon
              icon={props.icon}
              className={cn('size-20', props.iconClassName)}
            />
          )}
          <div className="space-y-1">
            <div className={'flex'}>
              <Hyperlink
                title={props.title}
                href={props.link}
                className={'mr-2 text-sm font-semibold text-black'}
                withIcon
              />
            </div>

            <p className="text-left text-sm">{props.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export type TechHoverCardProps = {
  className?: string
}

export const GolangCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Golang'}
    icon={'logos:go'}
    link={'https://go.dev/'}
    description={`Build simple, secure, scalable systems with Go.`}
  />
)

export const PythonCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Python'}
    icon={'logos:python'}
    link={'https://www.python.org/'}
    description={`Python is powerful... and fast;
      plays well with others;
      runs everywhere;
      is friendly & easy to learn;
      is Open.`}
  />
)

export const ScalaCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Scala'}
    icon={'logos:scala'}
    link={'https://www.scala-lang.org/'}
    description={`A programming language that scales with you: from small scripts to large multiplatform applications.`}
  />
)

export const TypescriptCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Typescript'}
    icon={'skill-icons:typescript'}
    iconClassName={'size-28'}
    link={'https://www.typescriptlang.org/'}
    description={`TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`}
  />
)

export const KafkaCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Kafka'}
    icon={'devicon:apachekafka'}
    iconClassName={'size-52'}
    link={'https://kafka.apache.org/'}
    description={`Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.`}
  />
)

export const ProtobufCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Protobuf'}
    icon={'vscode-icons:file-type-protobuf'}
    iconClassName={'size-32'}
    link={'https://protobuf.dev/'}
    description={`Protocol Buffers are language-neutral, platform-neutral extensible mechanisms for serializing structured data.`}
  />
)

export const GraphQLCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'GraphQL'}
    icon={'logos:graphql'}
    link={'https://graphql.org/'}
    description={`GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.`}
  />
)

export const PostgresCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'PostgreSQL'}
    icon={'logos:postgresql'}
    link={'https://www.postgresql.org/'}
    description={`PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development.`}
  />
)

export const MongoDBCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'MongoDB'}
    icon={'skill-icons:mongodb'}
    link={'https://www.mongodb.com/'}
    description={`MongoDB is a source-available, cross-platform, document-oriented database program.`}
  />
)

export const DynamoDBCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'DynamoDB'}
    icon={'devicon:dynamodb'}
    link={'https://aws.amazon.com/dynamodb/'}
    description={`Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.`}
  />
)

export const ReactCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'React'}
    icon={'logos:react'}
    link={'https://react.dev/'}
    description={`React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.`}
  />
)

export const SnowflakeCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Snowflake'}
    icon={'logos:snowflake-icon'}
    link={'https://www.snowflake.com/en/'}
    description={`Snowflake enables organizations to learn, build, and connect with their data-driven peers. Collaborate, build data apps & power diverse workloads.`}
  />
)

export const DBTCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'DBT'}
    icon={'logos:dbt-icon'}
    link={'https://www.getdbt.com/'}
    description={`dbt is a data transformation tool that enables data analysts and engineers to transform data in a cloud analytics warehouse.`}
  />
)

export const ApacheSparkCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Apache Spark'}
    icon={'devicon:apachespark'}
    link={'https://spark.apache.org/'}
    description={`Apache Spark™ is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters.`}
  />
)

export const ApacheAirflowCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Apache Airflow'}
    icon={'devicon:apacheairflow'}
    link={'https://airflow.apache.org/'}
    description={`Airflow™ is a platform created by the community to programmatically author, schedule and monitor workflows.`}
  />
)

export const AWSCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'AWS'}
    icon={'logos:aws'}
    link={'https://aws.amazon.com/'}
    description={`Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.`}
  />
)

export const TerraformCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Terraform'}
    icon={'logos:terraform-icon'}
    link={'https://www.terraform.io/'}
    description={`Terraform is an infrastructure as code tool that enables you to safely and predictably provision and manage infrastructure in any cloud.`}
  />
)

export const DockerCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Docker'}
    icon={'skill-icons:docker'}
    link={'https://www.docker.com/'}
    description={`Docker is a platform designed to help developers build, share, and run container applications.`}
  />
)

export const KubernetesCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Kubernetes'}
    icon={'devicon:kubernetes'}
    link={'https://kubernetes.io/'}
    description={`Kubernetes, is an open-source system for automating deployment, scaling, and management of containerized applications.`}
  />
)

export const GithubActionsCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Github Actions'}
    icon={'skill-icons:githubactions-dark'}
    link={'https://github.com/features/actions'}
    description={`GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD.`}
  />
)

export const AWSCDKCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'AWS CDK'}
    icon={'logos:aws-cloudformation'}
    link={'https://aws.amazon.com/cdk/'}
    description={`Define your cloud application resources using familiar programming languages.`}
  />
)

export const PrometheusCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Prometheus'}
    icon={'logos:prometheus'}
    link={'https://prometheus.io/'}
    description={`An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.`}
  />
)

export const GrafanaCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Grafana'}
    icon={'logos:grafana'}
    link={'https://grafana.com/'}
    description={`Grafana is the open source analytics & monitoring solution for every database.`}
  />
)

export const KEDACard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'KEDA'}
    icon={'devicon:kubernetes'}
    link={'https://keda.sh/'}
    description={`With KEDA, you can drive the scaling of any container in Kubernetes based on the number of events needing to be processed.`}
  />
)

export const MySQLCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'MySQL'}
    icon={'devicon:mysql'}
    link={'https://www.mysql.com/'}
    description={`MySQL is an open-source relational database management system.`}
  />
)

export const NextJSCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'NextJS'}
    icon={'devicon:nextjs'}
    link={'https://nextjs.org/'}
    description={`Next.js is built on the latest React features, including Server Components and Actions.`}
  />
)

export const RedshiftCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Redshift'}
    icon={'logos:aws-redshift'}
    link={'https://aws.amazon.com/redshift/'}
    description={`Amazon Redshift is a fast, fully managed cloud data warehouse that makes it simple and cost-effective to analyze all your data.`}
  />
)

export const LookerCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Looker'}
    icon={'logos:looker-icon'}
    link={'https://cloud.google.com/looker'}
    description={`Looker is an enterprise platform for BI, data applications, and embedded analytics that helps you explore and share insights in real time.`}
  />
)

export const BigQueryCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'BigQuery'}
    icon={'simple-icons:googlebigquery'}
    iconClassName={'text-[#679df8]'}
    link={'https://cloud.google.com/bigquery'}
    description={`BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data.`}
  />
)

export const WebsocketsCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Websockets'}
    link={'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'}
    description={`The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server.`}
  />
)

export const NodeJSCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'NodeJS'}
    icon={'skill-icons:nodejs-dark'}
    link={'https://nodejs.org/en'}
    description={`Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`}
  />
)

export const TailwindCSSCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Tailwind CSS'}
    icon={'skill-icons:tailwindcss-dark'}
    link={'https://tailwindcss.com/'}
    description={`A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`}
  />
)

export const GoogleAnalyticsCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Google Analytics'}
    icon={'logos:google-analytics'}
    link={'https://marketingplatform.google.com/intl/en_uk/about/analytics/'}
    description={`Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI.`}
  />
)
