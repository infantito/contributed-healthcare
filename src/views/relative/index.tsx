import { Redirect } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { SiteContent } from 'components'
import { Step2 } from 'containers'
import { useInsured } from 'hooks'
import { Routes } from 'utils/constants'
import Title from './title'

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
          <Title insured={insured} />
          <Typography variant="h6">Datos personales del titular</Typography>
          <div className="mt-3">
            <Step2 insured={insured} />
          </div>
        </SiteContent>
      </div>
    </Grid>
  )
}

export default Relative
