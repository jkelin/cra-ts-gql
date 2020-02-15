import React from 'react'
import { Page } from 'containers'
import { RouteComponentProps } from 'react-router'

interface FormData {
  example: string
  exampleRequired: string
}

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export const AboutPage: React.FC<Props> = props => {
  return <Page title="About">About!</Page>
}
