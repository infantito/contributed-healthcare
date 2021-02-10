import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { Routes } from 'utils/constants'
import Details from './details'

import './styles.scss'
import logo from 'assets/logo.png'
import family from 'assets/family.png'

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to={Routes.HOME} className="header__logo p-4">
        <span>
          <img src={logo} alt="Rimac logo" />
        </span>
      </Link>
      <Grid container={true}>
        <Grid item={true} sm={7}>
          <Details />
        </Grid>
        <Grid item={true} sm={5}>
          <div className="header__family">
            <img src={family} alt="Rimac family" />
          </div>
        </Grid>
      </Grid>
      <Typography className="p-4 copyright" variant="overline" component="p">
        © 2021 RIMAC Seguros y Reaseguros.
      </Typography>
    </header>
  )
}

export default Header
