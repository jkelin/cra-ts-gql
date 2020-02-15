import React from 'react'

import { generateApolloClient } from 'utils'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

interface Props {
  apolloClient?: ReturnType<typeof generateApolloClient>
  history?: ReturnType<typeof createBrowserHistory>
}

export const Providers: React.FC<Props> = props => {
  return (
    <ApolloProvider client={props.apolloClient!}>
      <ApolloHooksProvider client={props.apolloClient!}>
        <Router history={props.history! as any}>{props.children}</Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

Providers.defaultProps = {
  apolloClient: generateApolloClient(),
  history: createBrowserHistory(),
}
