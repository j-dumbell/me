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
  title: string
  icon?: string
  colour?: string
  description: string
  link: string
}

type RGB = {
  r: number
  g: number
  b: number
}

const hexToRGB = (hex: string): RGB => {
  const colourCode = hex.replace('#', '')
  return {
    r: parseInt(colourCode.substring(0, 2), 16),
    g: parseInt(colourCode.substring(2, 4), 16),
    b: parseInt(colourCode.substring(4, 6), 16)
  }
}

const mixRGB = (a: RGB, b: RGB, amount: number): RGB => {
  return {
    r: Math.round(a.r + (b.r - a.r) * amount),
    g: Math.round(a.g + (b.g - a.g) * amount),
    b: Math.round(a.b + (b.b - a.b) * amount)
  }
}

const gray950Hex = '#030512'

const rgbToCSS = (rgb: RGB) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

export const TechHoverCard: FC<HoverCardProps> = (props) => {
  const bgColor = props.colour
    ? rgbToCSS(mixRGB(hexToRGB(props.colour), hexToRGB(gray950Hex), 0.7))
    : 'white'

  const style = {
    backgroundColor: bgColor,
    color: props.colour || 'black'
  } as React.CSSProperties

  return (
    <HoverCard>
      <HoverCardTrigger asChild className={props.className}>
        <Button
          style={style}
          variant="outline"
          className={cn('h-6 px-1 border-transparent')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = bgColor
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = bgColor
          }}
        >
          {props.icon && (
            <Icon icon={props.icon} className={cn('size-4 mr-2')} />
          )}
          {props.title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-gray-950">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <div className={'flex'}>
              <Hyperlink
                title={props.title}
                href={props.link}
                className={'mr-2 text-sm font-semibold text-white'}
                linkIconSide={'right'}
              />
            </div>

            <p className="text-left text-sm text-gray-500">
              {props.description}
            </p>
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
    colour={'#00ADD8'}
    link={'https://go.dev/'}
    description={`Build simple, secure, scalable systems with Go.`}
  />
)

export const PythonCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Python'}
    colour={'#3776AB'}
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
    colour={'#DC322F'}
    icon={'logos:scala'}
    link={'https://www.scala-lang.org/'}
    description={`A programming language that scales with you: from small scripts to large multiplatform applications.`}
  />
)

export const TypescriptCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Typescript'}
    colour={'#3178C6'}
    icon={'skill-icons:typescript'}
    link={'https://www.typescriptlang.org/'}
    description={`TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`}
  />
)

export const KafkaCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Apache Kafka'}
    icon={'devicon:apachekafka'}
    link={'https://kafka.apache.org/'}
    description={`Apache Kafka is an open-source distributed event streaming platform used for high-performance data pipelines, streaming analytics and mission-critical applications.`}
  />
)

export const ProtobufCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Protobuf'}
    icon={'vscode-icons:file-type-protobuf'}
    link={'https://protobuf.dev/'}
    description={`Protocol Buffers are language-neutral, platform-neutral extensible mechanisms for serializing structured data.`}
  />
)

export const GraphQLCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'GraphQL'}
    colour={'#E10098'}
    icon={'logos:graphql'}
    link={'https://graphql.org/'}
    description={`GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.`}
  />
)

export const PostgresCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'PostgreSQL'}
    colour={'#336791'}
    icon={'logos:postgresql'}
    link={'https://www.postgresql.org/'}
    description={`PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development.`}
  />
)

export const MongoDBCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'MongoDB'}
    colour={'#47A248'}
    icon={'skill-icons:mongodb'}
    link={'https://www.mongodb.com/'}
    description={`MongoDB is a source-available, cross-platform, document-oriented database program.`}
  />
)

export const DynamoDBCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'DynamoDB'}
    colour={'#4053D6'}
    icon={'devicon:dynamodb'}
    link={'https://aws.amazon.com/dynamodb/'}
    description={`Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.`}
  />
)

export const ReactCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'React'}
    colour={'#61DAFB'}
    icon={'logos:react'}
    link={'https://react.dev/'}
    description={`React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.`}
  />
)

export const SnowflakeCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Snowflake'}
    colour={'#29B5E8'}
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
    colour={'#FF694B'}
    link={'https://www.getdbt.com/'}
    description={`dbt is a data transformation tool that enables data analysts and engineers to transform data in a cloud analytics warehouse.`}
  />
)

export const ApacheSparkCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Apache Spark'}
    colour={'#E25A1C'}
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
    colour={'#FF9900'}
    icon={'logos:aws'}
    link={'https://aws.amazon.com/'}
    description={`Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.`}
  />
)

export const TerraformCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Terraform'}
    colour={'#7B42BC'}
    icon={'logos:terraform-icon'}
    link={'https://www.terraform.io/'}
    description={`Terraform is an infrastructure as code tool that enables you to safely and predictably provision and manage infrastructure in any cloud.`}
  />
)

export const DockerCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Docker'}
    colour={'#2496ED'}
    icon={'skill-icons:docker'}
    link={'https://www.docker.com/'}
    description={`Docker is a platform designed to help developers build, share, and run container applications.`}
  />
)

export const KubernetesCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Kubernetes'}
    colour={'#326CE5'}
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
    colour={'#C925D1'}
    icon={'logos:aws-cloudformation'}
    link={'https://aws.amazon.com/cdk/'}
    description={`Define your cloud application resources using familiar programming languages.`}
  />
)

export const PrometheusCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Prometheus'}
    colour={'#E6522C'}
    icon={'logos:prometheus'}
    link={'https://prometheus.io/'}
    description={`An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.`}
  />
)

export const GrafanaCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Grafana'}
    colour={'#F46800'}
    icon={'logos:grafana'}
    link={'https://grafana.com/'}
    description={`Grafana is the open source analytics & monitoring solution for every database.`}
  />
)

export const KEDACard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'KEDA'}
    colour={'#4B8BBE'}
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
    colour={'#8C4FFF'}
    icon={'logos:aws-redshift'}
    link={'https://aws.amazon.com/redshift/'}
    description={`Amazon Redshift is a fast, fully managed cloud data warehouse that makes it simple and cost-effective to analyze all your data.`}
  />
)

export const LookerCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Looker'}
    colour={'#4285F4'}
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
    colour={'#339933'}
    icon={'skill-icons:nodejs-dark'}
    link={'https://nodejs.org/en'}
    description={`Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`}
  />
)

export const TailwindCSSCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Tailwind CSS'}
    colour={'#38BDF8'}
    icon={'skill-icons:tailwindcss-dark'}
    link={'https://tailwindcss.com/'}
    description={`A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`}
  />
)

export const GoogleAnalyticsCard: FC<TechHoverCardProps> = (props) => (
  <TechHoverCard
    className={props.className}
    title={'Google Analytics'}
    colour={'#E37400'}
    icon={'logos:google-analytics'}
    link={'https://marketingplatform.google.com/intl/en_uk/about/analytics/'}
    description={`Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI.`}
  />
)
