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
import { cn } from '@/lib/utils'

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

type FormSchema = z.infer<typeof formSchema>

export const ContactForm: FC<ComponentProps<'form'>> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const onSubmit = (values: FormSchema) => {
    window.open(mkFormUrl(values), '_blank', 'noreferrer')
    setIsSubmitted(true)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative m-auto max-w-lg px-4"
        >
          {isSubmitted && (
            <div
              className={
                'absolute z-10 m-0 size-full max-w-lg bg-slate-100 p-0'
              }
            >
              <Alert variant="success">
                <CheckIcon className="size-6" />
                <AlertTitle>Thanks for your message!</AlertTitle>
                <AlertDescription>{`I'll review and respond as soon as possible.`}</AlertDescription>
              </Alert>
            </div>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Input
                    className="bg-white"
                    type="text"
                    placeholder="Name"
                    disabled={isSubmitted}
                    {...field}
                  />
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
                  <Input
                    className="bg-white"
                    type="text"
                    placeholder="Email"
                    disabled={isSubmitted}
                    {...field}
                  />
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
                  <Textarea
                    className="bg-white"
                    placeholder="Message"
                    disabled={isSubmitted}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={'jd'}
            data-testid="submit-button"
            className={cn('w-full', isSubmitted && 'shadow-none')}
            disabled={
              !form.formState.isDirty || !form.formState.isValid || isSubmitted
            }
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
