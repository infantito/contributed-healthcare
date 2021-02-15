import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Container, Grid } from '@material-ui/core'
import { createHashHistory } from 'history'
import { Header } from 'components'
import routes from './routes'

const history = createHashHistory()

const Router: React.FC = () => {
  return (
    <Container className="px-0">
      {/* 
  // @ts-ignore */}
      <HashRouter basename="/" history={history}>
        <Grid container={true} className="no-gutters">
          <Header />
          {renderRoutes(routes)}
        </Grid>
      </HashRouter>
    </Container>
  )
}

export default Router
