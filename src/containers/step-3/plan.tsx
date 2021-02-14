import {
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Field } from 'react-final-form'
import { PlanProps, PlanRadioProps } from './utils'

const PlanRadio: React.FC<PlanRadioProps> = props => {
  const { fieldProps, plan } = props

  const { name, value, onChange, checked, ...restInput } = fieldProps.input

  return (
    <Card className={`mui-card${checked ? ' mui-card--checked' : ''}`}>
      <CardContent className="p-0">
        <Radio
          className="mui-radio"
          name={name}
          id={value}
          value={value}
          onChange={onChange}
          checked={checked}
          checkedIcon={<CheckCircleIcon />}
          required={true}
          inputProps={{ required: true, ...restInput }}
        />
        <Typography className="card-type mt-2" color="textSecondary">
          {plan.type}
        </Typography>
        <Typography className="card-amount" component="h2">
          <Typography color="textSecondary" component="sup">
            S/
          </Typography>{' '}
          <Typography component="span">{plan.amount}</Typography>
        </Typography>
        <Typography className="card-monthly" color="textSecondary">
          mensual
        </Typography>
      </CardContent>
    </Card>
  )
}

const Plan: React.FC<PlanProps> = props => {
  return (
    <FormControlLabel
      className="mui-plan-label mb-2 mx-auto"
      htmlFor={props.type}
      name="plan"
      value={props.type}
      control={
        <Field
          name="plan"
          value={props.type}
          type="radio"
          render={fieldProps => (
            <PlanRadio fieldProps={fieldProps} plan={props} />
          )}
        />
      }
      label=""
    />
  )
}

export default Plan
