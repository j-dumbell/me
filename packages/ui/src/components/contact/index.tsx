import { ContactForm } from '@/components/contact/form'
import { FC } from 'react'
import { Heading } from 'src/components/typography'
import { Section } from '@/components/section'

export const Contact: FC = () => {
  return (
    <Section className="bg-slate-100">
      <Heading>Contact</Heading>
      <ContactForm className="m-auto max-w-lg" />
    </Section>
  )
}
