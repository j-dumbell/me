import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from '@/components/ui/accordion'
import React, { FC } from 'react'
import { Heading, Paragraph } from 'src/components/typography'
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
import { Section } from '@/components/section'
import { Hyperlink } from '@/components/hyperlink'

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
        <Paragraph className="text-base">
          Senior software engineer at a global technology company that develops
          open-source and SAS observability software.
        </Paragraph>
        <ul className="ml-6 list-disc text-left text-base [&>li]:mt-2">
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
    Details: ({ className }) => (
      <div className={className}>
        <Paragraph className={'mb-2 text-base'}>
          Senior software engineer at a London-based consultancy, working across
          data engineering and full stack development projects for various
          clients.
        </Paragraph>
        <Hyperlink
          className={'mt-10'}
          href="https://www.sainsburys.co.uk/"
          title={"Sainsbury's"}
        />
        <ul className="mb-4 ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Built a{' '}
            <Hyperlink
              className={'mt-10'}
              href="https://www.nectar360.co.uk/what-we-do/digital/digital-advertising/"
              title={'web app'}
            />{' '}
            to allow digital marketers to create campaigns, build audiences and
            measure results, powered by terrabytes of Sainsbury's customer data.
          </li>
          <li>
            Built a{' '}
            <Hyperlink
              className={'mt-10'}
              href="https://aws.amazon.com/partners/success/sainsburys-microstrategy/"
              title={'data platform'}
            />{' '}
            to ingest hundreds of millions of supply chain records into a data
            lake and data warehouse each day.
          </li>
        </ul>
        <Hyperlink
          className={'mt-10'}
          href="https://convexin.com/"
          title={'Convex'}
        />
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Designed and implemented a number of core business applications to
            enable underwriters to capture data and automate their workflows.
          </li>
          <li>
            Wrote Scala Apache Spark jobs provisioned via AWS EMR to ingest
            business data into an AWS S3 data lake. Implemented a Scala service
            to orchestrate these jobs.
          </li>
        </ul>
      </div>
    ),
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
        <Paragraph className={'text-base'}>
          Lead analyst at a personalized book ecommerce website, working across
          all business domains.
        </Paragraph>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Ingested and modelled business data in a AWS Redshift data
            warehouse.
          </li>
          <li>
            Analyzed the data with SQL and Python and produced predictive
            models.
          </li>
          <li>Built and maintained Looker dashboards.</li>
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
        <Paragraph className="text-base">
          Data engineer at digital marketing agency, working on the Jaguar Land
          Rover account.
        </Paragraph>
        <ul className="ml-6 list-disc text-left text-base [&>li]:mt-2">
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
    <Section className="bg-slate-100">
      <Heading>Experience</Heading>
      <div className="flex justify-center space-y-12">
        <Accordion
          type="single"
          collapsible
          defaultValue={'Grafana Labs'}
          className="mx-4 w-full max-w-4xl rounded-xl border border-slate-200 bg-white px-8 py-4 text-slate-950 shadow"
        >
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
                      <h2 className="scroll-m-20 text-left text-2xl font-medium tracking-tight text-slate-900">
                        {company}
                      </h2>
                      <p className="text-left text-base text-slate-600">
                        {title}
                      </p>
                      <p className="text-left text-base text-slate-600">
                        {formatRange(from, to)}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-[67px]">
                    <div className="mb-2 flex">
                      <Icon icon="mdi:location" className="mr-1 size-6" />
                      <p className="text-base text-slate-600">{location}</p>
                    </div>
                    <a href={`https://www.${url}`} className="mb-4 flex">
                      <Icon
                        icon="lucide:external-link"
                        className="mr-1 size-5"
                      />
                      <p className="text-base text-slate-600">{url}</p>
                    </a>
                    <Details className="text-base text-slate-600" />
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
    </Section>
  )
}
