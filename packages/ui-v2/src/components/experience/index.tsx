import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from '@/components/ui/accordion'
import React, { FC } from 'react'
import { Description, Heading } from '@/components/section'
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
      <ul className="my-6 ml-6 list-disc text-left [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    ),
    technologies: ['Golang', 'Kafka', 'Kubernetes', 'KEDA', 'Docker', 'MySQL']
  },
  {
    company: 'Infinity Works',
    title: 'Senior Software Engineer',
    logo: InfinityWorksLogo,
    from: new Date('2019-07-01'),
    to: new Date('2023-06-01'),
    Details: () => (
      <ul className="my-6 ml-6 list-disc text-left [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
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
    title: 'Senior Data Engineer / Analyst',
    logo: WonderblyLogo,
    from: new Date('2018-09-01'),
    to: new Date('2019-06-01'),
    Details: () => (
      <ul className="my-6 ml-6 list-disc text-left [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    ),
    technologies: ['Python', 'Redshift', 'Looker']
  },
  {
    company: 'Spark44',
    title: 'Metrics Analyst',
    logo: Spark44Logo,
    from: new Date('2016-10-01'),
    to: new Date('2018-09-01'),
    Details: () => (
      <ul className="my-6 ml-6 list-disc text-left [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    ),
    technologies: ['Python', 'BigQuery']
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
                  <Details />
                  <div className="mx-10 flex flex-wrap">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="mr-1 mt-1">
                        {tech}
                      </Badge>
                    ))}
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
