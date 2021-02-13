import { RouteConfig } from 'react-router-config'
import { Routes } from 'utils/constants'
import { Home, Relative } from 'views'

const routes: RouteConfig[] = [
  {
    path: Routes.HOME,
    exact: true,
    component: Home,
  },
  {
    path: Routes.RELATIVE,
    exact: true,
    component: Relative,
  },
]

export default routes
