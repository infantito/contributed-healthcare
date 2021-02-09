import { RouteConfig } from 'react-router-config'
import { Home } from 'views'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

export default routes
