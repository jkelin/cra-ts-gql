import ApolloClient from 'apollo-boost'

export const generateApolloClient = () =>
  new ApolloClient({
    uri: '/api/graphql',
  })
