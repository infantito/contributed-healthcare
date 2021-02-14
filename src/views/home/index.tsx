import { Grid, Typography } from '@material-ui/core'
import { SiteContent } from 'components'
import { Step1 } from 'containers'
import React from 'react'

import './styles.scss'

const Home: React.FC = () => {
  return (
    <Grid item={true} sm={6}>
      <div className="step-1 mx-auto py-5">
        <SiteContent>
          <Typography className="mb-1" variant="h5">
            Obtén tu <span>seguro ahora</span>
          </Typography>
          <Typography variant="subtitle1" component="p">
            Ingresa los datos para comenzar.
          </Typography>
          <div className="mt-3">
            <Step1 />
          </div>
        </SiteContent>
      </div>
    </Grid>
  )
}

export default Home
