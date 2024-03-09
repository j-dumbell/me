import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ComponentProps, FC, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckIcon } from '@radix-ui/react-icons'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name must be at least 1 character.'
  }),
  email: z.string().email({ message: 'Email must be a valid email address' }),
  message: z.string().min(1, {
    message: 'Message must be at least 1 character'
  })
})

type Fields = z.infer<typeof formSchema>

const fieldIds = {
  name: 'entry.1150457580',
  email: 'entry.1852886990',
  message: 'entry.1500626128'
} as const satisfies Record<keyof Fields, string>

const mkFormUrl = (fields: Fields): string => {
  const inputsKeyedById = {
    [fieldIds.name]: fields.name,
    [fieldIds.email]: fields.email,
    [fieldIds.message]: fields.message
  }

  const queryParams = new URLSearchParams(inputsKeyedById).toString()
  return `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvadbRcLHcZg-McLXur5TytNocoixdxN4QkffNHI2meTA-Dg/formResponse?${queryParams}`
}

export const ContactForm: FC<ComponentProps<'form'>> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    window.open(mkFormUrl(values), '_blank', 'noreferrer')
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Alert className="m-auto max-w-sm">
        <CheckIcon className="size-6" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>I'll review and respond shortly.</AlertDescription>
      </Alert>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto max-w-lg">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-[100%]">
          Submit
        </Button>
      </form>
    </Form>
  )
}
