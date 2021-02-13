import { Grid } from '@material-ui/core'
import { Step1 } from 'containers'
import React from 'react'

const Home: React.FC = () => {
  return (
    <Grid item={true} sm={6}>
      <Step1 />
    </Grid>
  )
}

export default Home
