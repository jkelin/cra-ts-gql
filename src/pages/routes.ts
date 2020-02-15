import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'

export const routes = [
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
]
