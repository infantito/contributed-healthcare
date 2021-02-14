import { useHistory, useLocation } from 'react-router-dom'
import { Button, Grid, GridSize, Typography } from '@material-ui/core'
import { Routes } from 'utils/constants'
import Family from './family'

import './styles.scss'
import logo from 'assets/logo.png'
import { storage } from 'utils'

const Header: React.FC = () => {
  const location = useLocation()

  const history = useHistory()

  let sm: GridSize = 6

  const justImg = location.pathname !== Routes.HOME

  if (justImg) {
    sm = 4
  }

  const handleRedirect = (event: React.MouseEvent) => {
    storage.remove('current')

    return history.push(Routes.HOME)
  }

  return (
    <Grid item={true} sm={sm}>
      <header className="header">
        <div className="header__logo p-4">
          <Button type="button" className="p-0" onClick={handleRedirect}>
            <span>
              <img src={logo} alt="Rimac logo" />
            </span>
          </Button>
        </div>
        <Family justImg={justImg} />
        <Typography className="p-4 copyright" variant="overline" component="p">
          © 2021 RIMAC Seguros y Reaseguros.
        </Typography>
      </header>
    </Grid>
  )
}

export default Header
