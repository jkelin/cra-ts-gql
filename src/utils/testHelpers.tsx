import React from 'react'
import { generateApolloClient } from './apollo'
import { Providers } from 'containers'
import { createMemoryHistory } from 'history'

export const generateTestProviders = () => {
  const providers: Required<Omit<
    React.ComponentProps<typeof Providers>,
    'children'
  >> = {
    apolloClient: generateApolloClient(),
    history: createMemoryHistory(),
  }

  const ProvidersWrapper: typeof Providers = props => {
    const innerProviders = { ...providers, ...props }

    return <Providers {...innerProviders}>{props.children}</Providers>
  }

  return { ...providers, Providers: ProvidersWrapper }
}
