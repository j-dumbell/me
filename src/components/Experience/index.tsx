import React, { useState } from 'react'
import { format } from 'date-fns'
import { Hyperlink } from '../Hyperlink'

const companies = ['Grafana', 'Infinity Works', 'Wonderbly'] as const
type Company = (typeof companies)[number]

type JobDetails = {
  companyHref: string
  title: string
  fromDate: Date
  toDate?: Date
  location: string
  descriptons: string[]
}

const allJobs: Record<Company, JobDetails> = {
  Grafana: {
    companyHref: 'https://grafana.com/',
    title: 'Senior Software Engineer',
    fromDate: new Date('2023-06-01'),
    location: 'Remote',
    descriptons: ['PLACEHOLDER1', 'PLACEHOLDER2']
  },
  'Infinity Works': {
    companyHref: 'https://www.infinityworks.com/',
    title: 'Senior Software Engineer',
    fromDate: new Date('2019-07-01'),
    toDate: new Date('2023-06-01'),
    location: 'London, UK',
    descriptons: ['PLACEHOLDER']
  },
  Wonderbly: {
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
  const [company, setCompany] = useState<Company>('Grafana')

  const { title, fromDate, toDate, companyHref, location, descriptons } =
    allJobs[company]

  return (
    <section className="mx-auto  max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-slate-200 my-7">Experience</h2>
      <div>
        <div>
          {companies.map((company) => (
            <button key={company} onClick={() => setCompany(company)}>
              <span>{company}</span>
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-slate-200">
            {`${title} @`}&nbsp;
            <Hyperlink title={company} href={companyHref} />
          </h3>
          <p>{locDurationDetails(fromDate, toDate, location)}</p>
          <div>
            <ul>
              {descriptons.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
