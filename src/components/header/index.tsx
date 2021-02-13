import { Link, useLocation } from 'react-router-dom'
import { Grid, GridSize, Typography } from '@material-ui/core'
import { Routes } from 'utils/constants'
import Family from './family'

import './styles.scss'
import logo from 'assets/logo.png'

const Header: React.FC = () => {
  const location = useLocation()

  let sm: GridSize = 6

  const justImg = location.pathname !== Routes.HOME

  if (justImg) {
    sm = 4
  }

  return (
    <Grid item={true} sm={sm}>
      <header className="header">
        <Link to={Routes.HOME} className="header__logo p-4">
          <span>
            <img src={logo} alt="Rimac logo" />
          </span>
        </Link>
        <Family justImg={justImg} />
        <Typography className="p-4 copyright" variant="overline" component="p">
          © 2021 RIMAC Seguros y Reaseguros.
        </Typography>
      </header>
    </Grid>
  )
}

export default Header
