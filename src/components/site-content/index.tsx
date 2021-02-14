import Stepper from 'components/stepper'
import { useLocation } from 'react-router-dom'
import { STEPPER } from './constants'

const SiteContent: React.FC = props => {
  const location = useLocation()

  const step = STEPPER.findIndex(stepper => location.pathname === stepper.path)

  return (
    <>
      <Stepper step={step} />
      {props.children}
    </>
  )
}

export default SiteContent
