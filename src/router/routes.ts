import { RouteConfig } from 'react-router-config'
import { Routes } from 'utils/constants'
import { Home } from 'views'

const routes: RouteConfig[] = [
  {
    path: Routes.HOME,
    exact: true,
    component: Home,
  },
]

export default routes
