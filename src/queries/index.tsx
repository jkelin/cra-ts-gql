import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  id: Scalars['String']
  count: Scalars['Float']
  user: Scalars['String']
}

export type QueryIdArgs = {
  id?: Maybe<Scalars['String']>
}

export type GetIdQueryVariables = {}

export type GetIdQuery = { __typename?: 'Query' } & Pick<Query, 'id'>

export const GetIdDocument = gql`
  query GetId {
    id
  }
`
export type GetIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetIdQuery, GetIdQueryVariables>,
  'query'
>

export const GetIdComponent = (props: GetIdComponentProps) => (
  <ApolloReactComponents.Query<GetIdQuery, GetIdQueryVariables>
    query={GetIdDocument}
    {...props}
  />
)

export type GetIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetIdQuery,
  GetIdQueryVariables
> &
  TChildProps
export function withGetId<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetIdQuery,
    GetIdQueryVariables,
    GetIdProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetIdQuery,
    GetIdQueryVariables,
    GetIdProps<TChildProps>
  >(GetIdDocument, {
    alias: 'getId',
    ...operationOptions,
  })
}

/**
 * __useGetIdQuery__
 *
 * To run a query within a React component, call `useGetIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetIdQuery,
    GetIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetIdQuery, GetIdQueryVariables>(
    GetIdDocument,
    baseOptions
  )
}
export function useGetIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetIdQuery,
    GetIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetIdQuery, GetIdQueryVariables>(
    GetIdDocument,
    baseOptions
  )
}
export type GetIdQueryHookResult = ReturnType<typeof useGetIdQuery>
export type GetIdLazyQueryHookResult = ReturnType<typeof useGetIdLazyQuery>
export type GetIdQueryResult = ApolloReactCommon.QueryResult<
  GetIdQuery,
  GetIdQueryVariables
>
