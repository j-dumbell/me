import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Section } from '../Section'
import { Footer } from '../Footer'

type FormInputs = {
  name: string
  email: string
  message: string
}

const fieldIds = {
  name: 'entry.1150457580',
  email: 'entry.1852886990',
  message: 'entry.1500626128'
} as const satisfies Record<keyof FormInputs, unknown>

const mkFormUrl = (inputs: FormInputs): string => {
  const inputsKeyedById = {
    [fieldIds.name]: inputs.name,
    [fieldIds.email]: inputs.email,
    [fieldIds.message]: inputs.message
  }

  const queryParams = new URLSearchParams(inputsKeyedById).toString()
  return `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvadbRcLHcZg-McLXur5TytNocoixdxN4QkffNHI2meTA-Dg/formResponse?${queryParams}`
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (inputs) => {
    window.open(mkFormUrl(inputs), '_blank', 'noreferrer')
  }

  return (
    <Section
      id="contact"
      title={'Get in touch'}
      verticallyCenter={false}
      backgroundColour="slate-700"
      titleColour="white"
    >
      <p className="py-6 text-center">Interested in working together?</p>

      <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            id="name"
            className="block w-full border border-gray-600 bg-gray-700 p-2.5 text-sm text-white shadow-sm placeholder:text-gray-400"
            placeholder="Name"
            required
            {...register('name', { required: true })}
          />
        </div>
        {errors.name && <span>This field is required</span>}

        <div>
          <input
            type="email"
            id="email"
            className="block w-full border border-gray-600 bg-gray-700 p-3 text-sm text-white shadow-sm placeholder:text-gray-400"
            placeholder="Email"
            required
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        <div className="sm:col-span-2">
          <textarea
            id="message"
            rows={6}
            className="mb-2 block w-full border border-gray-600 bg-gray-700 p-2.5 text-sm text-white shadow-sm placeholder:text-gray-400"
            placeholder="Message"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        {errors.message && <span>This field is required</span>}

        <button
          type="submit"
          className="w-full rounded border border-cyan-500 px-8 py-2 text-center text-cyan-500 transition-colors duration-300 ease-in-out hover:bg-cyan-500 hover:text-white"
        >
          Submit
        </button>
      </form>

      <Footer />
    </Section>
  )
}
