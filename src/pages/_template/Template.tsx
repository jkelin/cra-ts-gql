import React from 'react'
import { Page } from 'containers'
import { RouteComponentProps } from 'react-router'

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export const Template: React.FC<Props> = props => {
  return <Page title="Template">Template</Page>
}
