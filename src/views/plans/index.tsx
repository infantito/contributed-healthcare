import { Redirect } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { SiteContent } from 'components'
import { Step3 } from 'containers'
import { useInsured } from 'hooks'
import { Routes } from 'utils/constants'

import './styles.scss'

const Plans: React.FC = () => {
  const insured = useInsured()

  if (!insured) {
    return <Redirect to={Routes.HOME} />
  }

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
            <Step3 insured={insured} />
          </div>
        </SiteContent>
      </div>
    </Grid>
  )
}

export default Plans
