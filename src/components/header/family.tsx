import * as React from 'react'
import { Grid } from '@material-ui/core'
import Details from './details'

import family from 'assets/family.png'

const Image = React.memo((props: { left: number }) => (
  <div className="header__family" style={{ left: `${props.left}%` }}>
    <img src={family} alt="Rimac family" />
  </div>
))

const Family: React.FC<{ justImg: boolean }> = props => {
  if (props.justImg) {
    return <Image left={50} />
  }

  return (
    <Grid container={true}>
      <Grid item={true} sm={7}>
        <Details />
      </Grid>
      <Grid item={true} sm={5}>
        <Image left={20} />
      </Grid>
    </Grid>
  )
}

export default Family
