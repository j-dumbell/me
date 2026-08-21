import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

// @iconify/react's <Icon> fetches icon data from api.iconify.design over the
// network. Left unmocked, those requests are still in flight when a test
// finishes and unmounts, so happy-dom's teardown aborts them and each one
// surfaces as an unhandled `DOMException [AbortError]`. Stub it out so tests
// never depend on a real, external, unbounded network call.
vi.mock('@iconify/react', () => ({
  Icon: (props: Record<string, unknown>) =>
    React.createElement('svg', { ...props, 'data-icon': props.icon })
}))

export class IntersectionObserver {
  root = null
  rootMargin = ''
  thresholds = []

  disconnect() {
    return null
  }

  observe() {
    return null
  }

  takeRecords() {
    return []
  }

  unobserve() {
    return null
  }
}
window.IntersectionObserver = IntersectionObserver
global.IntersectionObserver = IntersectionObserver
