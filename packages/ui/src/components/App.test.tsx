import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'
import App from '@/components/App'

describe('<App />', () => {
  it('renders with the correct label', () => {
    render(<App />)
    const buttonElement = screen.getByText('James Dumbell.')
    expect(buttonElement).toBeInTheDocument()
  })
})
