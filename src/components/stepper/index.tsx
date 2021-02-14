import * as React from 'react'
import { Stepper as MuiStepper, Step, StepLabel } from '@material-ui/core'
import { STEPS } from './constants'
import { Props } from './utils'

import './styles.scss'

const Stepper: React.FC<Props> = props => {
  return (
    <MuiStepper activeStep={props.step} className="mui-stepper">
      {STEPS.map((item, index) => {
        return (
          <Step key={item} completed={index < props.step}>
            <StepLabel>{item}</StepLabel>
          </Step>
        )
      })}
    </MuiStepper>
  )
}

export default Stepper
