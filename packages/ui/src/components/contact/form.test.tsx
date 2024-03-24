import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ContactForm } from '@/components/contact/form'

describe('<ContactForm />', () => {
  let originalWindowOpen: (typeof window)['open']

  beforeEach(() => {
    originalWindowOpen = window.open
    window.open = vi.fn()
  })

  afterEach(() => {
    window.open = originalWindowOpen
  })

  it('should have submit intially disabled', () => {
    render(<ContactForm />)
    const buttonElement = screen.getByText('Submit')
    expect(buttonElement).toBeDisabled()
  })

  it('should display validation errors', async () => {
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText(/Email/i)
    await userEvent.type(emailInput, 'invalid')

    const errorMsg = screen.getByText('Email must be a valid email address')
    expect(errorMsg).toBeInTheDocument()
  })

  it('should open the submitted google form', async () => {
    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText(/Name/i)
    await userEvent.type(nameInput, 'James Dumbell')

    const emailInput = screen.getByPlaceholderText(/Email/i)
    await userEvent.type(emailInput, 'jamesdumbell@gmail.com')

    const messageInput = screen.getByPlaceholderText(/Message/i)
    await userEvent.type(messageInput, 'hi there!')

    const submitButton = await screen.findByTestId('submit-button')
    expect(submitButton).toBeEnabled()
    await userEvent.click(submitButton)

    expect(window.open).toHaveBeenCalledWith(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvadbRcLHcZg-McLXur5TytNocoixdxN4QkffNHI2meTA-Dg/formResponse?entry.1150457580=James+Dumbell&entry.1852886990=jamesdumbell%40gmail.com&entry.1500626128=hi+there%21',
      '_blank',
      'noreferrer'
    )
  })
})
