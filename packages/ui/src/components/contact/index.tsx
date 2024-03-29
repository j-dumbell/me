import { ContactForm } from '@/components/contact/form'
import { FC } from 'react'
import { Heading } from '@/components/section'

export const Contact: FC = () => {
  return (
    <div className="bg-slate-100 pb-28 pt-20">
      <Heading text="Contact" />
      <ContactForm className="m-auto max-w-lg" />
    </div>
  )
}
