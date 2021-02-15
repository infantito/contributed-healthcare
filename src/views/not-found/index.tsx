import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import { Routes } from 'utils/constants'
import man from 'assets/happy-man.png'

import './styles.scss'

const NotFound: React.FC = () => {
  return (
    <div className="not-found mx-auto py-5">
      <Box textAlign="right">
        <img src={man} alt="🙏" />
      </Box>
      <Divider className="mb-3" />
      <Typography className="mb-1" variant="h2" align="center">
        404
      </Typography>
      <Box className="mt-3" width="100%" textAlign="right">
        <Button
          color="primary"
          className="mui-submit"
          component={RouterLink}
          to={Routes.HOME}
          variant="outlined"
        >
          Ir a salud rimac
        </Button>
      </Box>
    </div>
  )
}

export default NotFound
