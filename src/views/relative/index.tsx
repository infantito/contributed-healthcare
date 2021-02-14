import { Redirect } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { SiteContent } from 'components'
import { Step2 } from 'containers'
import { useInsured } from 'hooks'
import { Routes } from 'utils/constants'

import './styles.scss'

const Relative: React.FC = () => {
  const insured = useInsured()

  if (!insured) {
    return <Redirect to={Routes.HOME} />
  }

  return (
    <Grid item={true} sm={8}>
      <div className="step-2 mx-auto py-5">
        <SiteContent>
          <Typography className="mb-1" variant="h4">
            Hola, <span>Luisa</span>
          </Typography>
          <Typography className="mb-6" variant="subtitle1" component="p">
            Valida que los datos sean correctos.
          </Typography>
          <Typography variant="h6">Datos personales del titular</Typography>
          <div className="mt-3">
            <Step2 />
          </div>
        </SiteContent>
      </div>
    </Grid>
  )
}

export default Relative
