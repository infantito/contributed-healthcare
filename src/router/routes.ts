import { RouteConfig } from 'react-router-config'
import { Routes } from 'utils/constants'
import { Home, Relative, Plans, Thanks, NotFound } from 'views'

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
  {
    path: Routes.PLANS,
    exact: true,
    component: Plans,
  },
  {
    path: Routes.THANKS,
    exact: true,
    component: Thanks,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
