import * as React from 'react'
import { Router as Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import { Header } from 'components'
import routes from './routes'
import { Container, Grid } from '@material-ui/core'

const history = createBrowserHistory()

const Router: React.FC = () => {
  return (
    <Container className="px-0">
      <Switch history={history}>
        <Grid container={true} className="no-gutters">
          <Grid item={true} sm={6}>
            <Header />
          </Grid>
          <Grid item={true} sm={6}>
            {renderRoutes(routes)}
          </Grid>
        </Grid>
        <div>BACK-BOTTOM</div>
      </Switch>
    </Container>
  )
}

export default Router
