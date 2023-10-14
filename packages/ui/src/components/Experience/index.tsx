import React, { useState } from 'react'
import { format } from 'date-fns'
import { Hyperlink } from '../Hyperlink'
import { Section } from '../Section'

const companies = ['Grafana', 'Infinity Works', 'Wonderbly'] as const
type Company = (typeof companies)[number]

type JobDetails = {
  companyDesc: string
  companyHref: string
  title: string
  fromDate: Date
  toDate?: Date
  location: string
  descriptons: string[]
}

const allJobs: Record<Company, JobDetails> = {
  Grafana: {
    companyDesc:
      'Open source and SAS observability software with metrics, logging, tracing and dashboards.',
    companyHref: 'https://grafana.com/',
    title: 'Senior Software Engineer',
    fromDate: new Date('2023-06-01'),
    location: 'Remote',
    descriptons: [
      'Built new microservices in Golang to handle customer billing and power internal admin functions.',
      'PLACEHOLDER2'
    ]
  },
  'Infinity Works': {
    companyDesc: 'Software engineering consultancy.',
    companyHref: 'https://www.infinityworks.com/',
    title: 'Senior Software Engineer',
    fromDate: new Date('2019-07-01'),
    toDate: new Date('2023-06-01'),
    location: 'London, UK',
    descriptons: ['PLACEHOLDER']
  },
  Wonderbly: {
    companyDesc: 'E-commerce personalised book publisher.',
    companyHref: 'https://www.wonderbly.com/',
    title: 'Data Engineer',
    fromDate: new Date('2018-09-01'),
    toDate: new Date('2019-06-01'),
    location: 'London, UK',
    descriptons: ['PLACEHOLDER']
  }
}

const formatDate = (date: Date): string => format(date, 'MMMM yyyy')

const locDurationDetails = (
  fromDate: Date,
  toDate: Date | undefined,
  location: string
): string => {
  const formattedToDate = toDate ? formatDate(toDate) : 'Present'

  return `${formatDate(fromDate)} - ${formattedToDate}, ${location}`
}

export const Experience: React.FC = () => {
  const [selectedCompany, setSelectedSelectedCompany] =
    useState<Company>('Grafana')

  const {
    title,
    fromDate,
    toDate,
    companyHref,
    location,
    descriptons,
    companyDesc
  } = allJobs[selectedCompany]

  return (
    <Section id="experience" title="Experience" verticallyCenter={false}>
      <div className="flex">
        <div>
          {companies.map((company) => {
            const buttonTextColour =
              company === selectedCompany ? 'text-cyan-500' : ''
            return (
              <button
                className={`block w-40 py-3 pl-4 text-left hover:bg-slate-800 hover:text-cyan-500 ${buttonTextColour}`}
                key={company}
                onClick={() => setSelectedSelectedCompany(company)}
              >
                <span>{company}</span>
              </button>
            )
          })}
        </div>
        <div className="ml-5">
          <h3 className="text-slate-200">
            {`${title} @`}&nbsp;
            <Hyperlink title={selectedCompany} href={companyHref} />
          </h3>
          <p>{locDurationDetails(fromDate, toDate, location)}</p>
          <div>
            <ul>
              <li>{companyDesc}</li>
              {descriptons.map((description, index) => (
                <li
                  key={index}
                  className="before:mr-4 before:text-cyan-500 before:content-['▹']"
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
