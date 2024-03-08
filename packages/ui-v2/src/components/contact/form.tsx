import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'

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

export const ContactForm: React.FC<React.ComponentProps<'form'>> = (props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    window.open(mkFormUrl(values), '_blank', 'noreferrer')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={props.className}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="James Dumbell" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="abc@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Let's chat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
