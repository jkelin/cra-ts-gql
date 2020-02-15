import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
}

export const Page: React.FC<Props> = props => {
  return (
    <main>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </main>
  )
}
