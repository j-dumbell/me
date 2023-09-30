import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Section } from '../Section'
import { Button } from '../Button'

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
    <Section num={5} title={'Get in touch'}>
      <p>PLACEHOLDER</p>

      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="James Dumbell"
            required
            {...register('name', { required: true })}
          />
        </div>
        {errors.name && <span>This field is required</span>}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="abc@email.com"
            required
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            {...register('message', { required: true })}
          ></textarea>
        </div>
        {errors.message && <span>This field is required</span>}

        <Button type="submit" title="Send message" />
      </form>
    </Section>
  )
}
