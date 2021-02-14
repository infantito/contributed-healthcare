import { Grid, Typography } from '@material-ui/core'
import { SiteContent } from 'components'
import { Step3 } from 'containers'
import React from 'react'

import './styles.scss'

const Plans: React.FC = () => {
  return (
    <Grid item={true} sm={8}>
      <div className="step-3 mx-auto py-5">
        <SiteContent>
          <Typography className="mb-1" variant="h4">
            Elige, <span>tu protección</span>
          </Typography>
          <Typography className="mb-6" variant="subtitle1" component="p">
            Selecciona tu plan de salud ideal.
          </Typography>
          <div className="mt-3">
            <Step3 />
          </div>
        </SiteContent>
      </div>
    </Grid>
  )
}

export default Plans
