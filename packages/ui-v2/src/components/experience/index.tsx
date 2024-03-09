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
import { Badge } from '@/components/ui/badge'

type Employment = {
  company: string
  title: string
  logo: string
  from: Date
  to?: Date
  Details: FC
  technologies: string[]
}

const employments: Employment[] = [
  {
    company: 'Grafana Labs',
    title: 'Senior Software Engineer',
    logo: GrafanaLabsLogo,
    from: new Date('2023-06-01'),
    Details: () => (
      <>
        <p>
          Senior software engineer at a global technology company that develops
          open-source and SAS observability software.
        </p>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Wrote microservices in Go to manage SAS customer usage and billing
            including REST APIs and Kafka event consumers.
          </li>
          <li>
            Provisioned GCP infrastructure including Kubernetes deployments.
          </li>
          <li>
            Monitored the services via Prometheus metrics & traces, visualized
            in Grafana dashboards.
          </li>
        </ul>
      </>
    ),
    technologies: [
      'Golang',
      'Kafka',
      'Kubernetes',
      'KEDA',
      'Docker',
      'MySQL',
      'Protobuf',
      'Prometheus',
      'Grafana'
    ]
  },
  {
    company: 'Infinity Works',
    title: 'Senior Software Engineer',
    logo: InfinityWorksLogo,
    from: new Date('2019-07-01'),
    to: new Date('2023-06-01'),
    Details: () => (
      <>
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
      </>
    ),
    technologies: [
      'Scala',
      'Apache Spark',
      'Python',
      'Airflow',
      'Snowflake',
      'Typescript',
      'GraphQL',
      'React',
      'NextJS',
      'AWS',
      'DynamoDB',
      'MongoDB',
      'PostgreSQL'
    ]
  },
  {
    company: 'Wonderbly',
    title: 'Senior Growth Analyst',
    logo: WonderblyLogo,
    from: new Date('2018-09-01'),
    to: new Date('2019-06-01'),
    Details: () => (
      <>
        <p>
          Lead analyst at a personalized book ecommerce website, working across
          all business domains. perform analysis using Python and SQL, and
          produce Looker dashboards.
        </p>
        <ul className="ml-6 list-disc text-left [&>li]:mt-2">
          <li>
            Ingest and model business data in data warehouse (AWS Redshift).
          </li>
          <li>
            Analyze the data with SQL and Python, producing predictive models.
          </li>
          <li>Build and maintain Looker dasbhoards.</li>
        </ul>
      </>
    ),
    technologies: ['Python', 'Redshift', 'SQL', 'Looker']
  },
  {
    company: 'Spark44',
    title: 'Data Engineer',
    logo: Spark44Logo,
    from: new Date('2016-10-01'),
    to: new Date('2018-09-01'),
    Details: () => (
      <>
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
      </>
    ),
    technologies: ['Python', 'BigQuery', 'SQL']
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
    <section className="w-full pb-40">
      <Heading text="Experience" />
      <div className="flex justify-center space-y-12">
        <Accordion type="single" collapsible className="mx-10 w-full max-w-3xl">
          {employments.map(
            ({ company, title, from, to, Details, logo, technologies }) => (
              <AccordionItem key={company} value={company}>
                <AccordionTrigger>
                  <div className="flex">
                    <img className="size-12" src={logo} alt={company} />
                    <div className="ml-8 space-y-1">
                      <h2 className="scroll-m-20 text-left text-xl font-semibold tracking-tight">
                        {company}
                      </h2>
                      <p className="text-left text-sm text-gray-500 dark:text-gray-400">
                        {title}
                      </p>
                      <p className="text-left text-sm text-gray-500 dark:text-gray-400">
                        {formatRange(from, to)}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-20">
                    <Details />
                    <div className="mt-4 flex flex-wrap">
                      {technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="mr-1 mt-1"
                        >
                          {tech}
                        </Badge>
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
