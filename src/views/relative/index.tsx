import { Grid } from '@material-ui/core'
import { Step2 } from 'containers'
import React from 'react'

const Relative: React.FC = () => {
  return (
    <Grid item={true} sm={8}>
      <Step2 />
    </Grid>
  )
}

export default Relative
