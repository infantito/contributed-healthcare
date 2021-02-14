import * as React from 'react'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import man from 'assets/happy-man.png'

import './styles.scss'

const Thanks: React.FC = () => {
  return (
    <div className="thanks mx-auto py-5">
      <Box textAlign="right">
        <img src={man} alt="🙏" />
      </Box>
      <Divider className="mb-3" />
      <Typography className="mb-1" variant="h4">
        ¡Gracias por <span>confiar en nosotros!</span>
      </Typography>
      <Typography className="mb-6" variant="subtitle1" component="p">
        Queremos conocer mejor la salud de los asegurados. Un asesor{' '}
        <strong>se pondrá en contacto</strong> contigo en las siguientes{' '}
        <strong>48 horas</strong>.
      </Typography>
      <Box className="mt-3" width="100%" textAlign="right">
        <Button
          variant="contained"
          color="primary"
          className="mui-submit"
          href="https://www.rimac.com/comprar/seguro-salud"
          target="_blank"
        >
          Ir a salud rimac
        </Button>
      </Box>
    </div>
  )
}

export default Thanks
