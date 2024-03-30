import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from '@/components/ui/accordion'
import React, { FC } from 'react'
import { Heading } from '@/components/section'
import { format } from 'date-fns/format'
import GrafanaLabsLogo from '../../assets/grafana-labs.png'
import InfinityWorksLogo from '../../assets/infinity-works.png'
import Spark44Logo from '../../assets/spark44.jpg'
import WonderblyLogo from '../../assets/wonderbly.png'
import { Icon } from '@iconify/react'
import {
  ApacheAirflowCard,
  ApacheSparkCard,
  AWSCard,
  BigQueryCard,
  DockerCard,
  DynamoDBCard,
  GolangCard,
  GrafanaCard,
  GraphQLCard,
  KafkaCard,
  KEDACard,
  KubernetesCard,
  LookerCard,
  MongoDBCard,
  MySQLCard,
  NextJSCard,
  PostgresCard,
  PrometheusCard,
  ProtobufCard,
  PythonCard,
  ReactCard,
  RedshiftCard,
  ScalaCard,
  SnowflakeCard,
  TechHoverCardProps,
  TypescriptCard
} from '@/components/hovercard'

type Employment = {
  company: string
  url: string
  title: string
  logo: string
  from: Date
  to?: Date
  Details: FC<DetailsProps>
  technologies: FC<TechHoverCardProps>[]
  location: string
}

type DetailsProps = {
  className?: string
}

const employments: Employment[] = [
  {
    company: 'Grafana Labs',
    url: 'grafana.com',
    title: 'Senior Software Engineer',
    logo: GrafanaLabsLogo,
    from: new Date('2023-06-01'),
    Details: ({ className }) => (
      <div className={className}>
        <p>
          Senior software engineer at a global technology company that develops
          open-source and SAS observability software.
        </p>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Wrote microservices in Go to manage SAS customer usage and billing
            including REST APIs and Kafka event consumers.
          </li>
          <li>Provisioned GCP infrastructure and Kubernetes resources.</li>
          <li>
            Monitored the services via Prometheus metrics & traces, visualized
            in Grafana dashboards.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      GolangCard,
      KafkaCard,
      KubernetesCard,
      KEDACard,
      DockerCard,
      MySQLCard,
      ProtobufCard,
      PrometheusCard,
      GrafanaCard
    ],
    location: 'Remote (London, UK)'
  },
  {
    company: 'Infinity Works',
    url: 'accenture.com',
    title: 'Senior Software Engineer',
    logo: InfinityWorksLogo,
    from: new Date('2019-07-01'),
    to: new Date('2023-06-01'),
    Details: ({ className }) => (
      <div className={className}>
        <p>
          Senior software engineer at a London-based consultancy, working across
          data engineering and full stack development projects for various
          clients.
        </p>
        <h4>Sainsbury's</h4>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Built a web app to allow digital marketers to run campaigns that
            target specific audiences using the terrabytes of customer data.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      ScalaCard,
      ApacheSparkCard,
      PythonCard,
      ApacheAirflowCard,
      SnowflakeCard,
      TypescriptCard,
      GraphQLCard,
      ReactCard,
      NextJSCard,
      AWSCard,
      DynamoDBCard,
      MongoDBCard,
      PostgresCard
    ],
    location: 'London, UK'
  },
  {
    company: 'Wonderbly',
    url: 'wonderbly.com',
    title: 'Senior Growth Analyst',
    logo: WonderblyLogo,
    from: new Date('2018-09-01'),
    to: new Date('2019-06-01'),
    Details: ({ className }) => (
      <div className={className}>
        <p>
          Lead analyst at a personalized book ecommerce website, working across
          all business domains.
        </p>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Ingest and model business data in data warehouse (AWS Redshift).
          </li>
          <li>
            Analyze the data with SQL and Python, producing predictive models.
          </li>
          <li>Build and maintain Looker dashboards.</li>
        </ul>
      </div>
    ),
    technologies: [PythonCard, RedshiftCard, LookerCard],
    location: 'London, UK'
  },
  {
    company: 'Spark44',
    url: 'linkedin.com/company/spark44',
    title: 'Data Engineer',
    logo: Spark44Logo,
    from: new Date('2016-10-01'),
    to: new Date('2018-09-01'),
    Details: ({ className }) => (
      <div className={className}>
        <p>
          Data engineer at digital marketing agency, working on the Jaguar Land
          Rover account.
        </p>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Ingested Google Analytics website data into a data warehouse (Big
            Query) via Python applications deployed in GCP.
          </li>
          <li>
            Transformed and modelled the data within Big Query to produce a
            layer ready for business consumption.
          </li>
        </ul>
      </div>
    ),
    technologies: [PythonCard, BigQueryCard],
    location: 'Birmingham, UK'
  }
]

const formatDate = (date: Date): string => format(date, 'MMM yyyy')

const formatRange = (from: Date, to: Date | undefined): string => {
  if (!to) {
    return `${formatDate(from)} - present`
  }

  return `${formatDate(from)} - ${formatDate(to)}`
}

export const Experience: FC = () => {
  return (
    <section className="w-full bg-slate-100 py-20">
      <Heading text="Experience" />
      <div className="flex justify-center space-y-12">
        <Accordion type="single" collapsible className="mx-4 w-full max-w-4xl">
          {employments.map(
            ({
              company,
              title,
              from,
              to,
              Details,
              logo,
              technologies,
              location,
              url
            }) => (
              <AccordionItem key={company} value={company}>
                <AccordionTrigger>
                  <div className="flex">
                    <img className="mr-5 size-12" src={logo} alt={company} />
                    <div className="space-y-1">
                      <h2 className="scroll-m-20 text-left text-2xl font-medium tracking-tight">
                        {company}
                      </h2>
                      <p className="text-left text-base text-gray-500">
                        {title}
                      </p>
                      <p className="text-left text-base text-gray-500">
                        {formatRange(from, to)}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-[67px]">
                    <div className="mb-2 flex">
                      <Icon icon="mdi:location" className="mr-1 size-6" />
                      <p className="text-base text-gray-500">{location}</p>
                    </div>
                    <a href={`https://www.${url}`} className="mb-4 flex">
                      <Icon
                        icon="lucide:external-link"
                        className="mr-1 size-5"
                      />
                      <p className="text-base text-gray-500">{url}</p>
                    </a>
                    <Details className="text-base text-gray-500" />
                    <div className="mt-4 flex flex-wrap">
                      {technologies.map((Card, index) => (
                        <Card key={index} className="mr-1 mt-1" />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </section>
  )
}
