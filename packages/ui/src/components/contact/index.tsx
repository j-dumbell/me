import { ContactForm } from '@/components/contact/form'
import { FC } from 'react'
import { Heading } from 'src/components/typography'

export const Contact: FC = () => {
  return (
    <section className={'pt-48'}>
      <Heading>✉️ Contact</Heading>
      <ContactForm className="m-auto max-w-lg" />
    </section>
  )
}
