import React from 'react'

import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from 'pages/routes'

import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

interface Props {}

export const Layout: React.FC<Props> = props => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      {renderRoutes(routes)}
    </div>
  )
}
