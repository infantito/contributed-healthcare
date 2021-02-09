import * as React from 'react'
import { Router as RouteContainer } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import routes from './routes'

const history = createBrowserHistory()

const Router: React.FC = () => {
  return (
    <RouteContainer history={history}>{renderRoutes(routes)}</RouteContainer>
  )
}

export default Router
