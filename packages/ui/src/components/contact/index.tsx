import { ContactForm } from '@/components/contact/form'
import { FC } from 'react'
import { Heading } from '@/components/section'

export const Contact: FC = () => {
  return (
    <div className="mb-40">
      <Heading text="Contact" />
      <ContactForm className="m-auto max-w-lg" />
    </div>
  )
}
