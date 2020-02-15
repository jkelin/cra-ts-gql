import React from 'react'
import { render } from '@testing-library/react'
import { generateTestProviders } from 'utils'
import { Layout } from 'containers'

test('Renders layout without crashing', () => {
  const { Providers } = generateTestProviders()

  const app = render(
    <Providers>
      <Layout />
    </Providers>
  )

  expect(app.baseElement).toBeVisible()
})

test('Routing works for homepage', () => {
  const { Providers, history } = generateTestProviders()

  history.push('/')

  const app = render(
    <Providers>
      <Layout />
    </Providers>
  )

  expect(app.getByText('Learn React')).toBeInTheDocument()
})

test('Routing works for about page', () => {
  const { Providers, history } = generateTestProviders()

  history.push('/about')

  const app = render(
    <Providers>
      <Layout />
    </Providers>
  )

  expect(app.getByText('About!')).toBeInTheDocument()
})
