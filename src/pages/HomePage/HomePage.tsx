import React from 'react'
import { ReactComponent as Logo } from 'svg/logo.svg'
import { Page } from 'containers'
import { RouteComponentProps } from 'react-router'

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export const HomePage: React.FC<Props> = props => {
  return (
    <Page title="Home">
      <Logo width={64} height={64} />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Page>
  )
}
