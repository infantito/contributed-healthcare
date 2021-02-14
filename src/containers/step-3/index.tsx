import * as React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { Button, FormControl, Grid, RadioGroup } from '@material-ui/core'
import { validate, constants, storage } from 'utils'
import { initialValues, PLANS, Props, Values } from './utils'
import Plan from './plan'
import Relatives from './relatives'

const Step3: React.FC<Props> = props => {
  const history = useHistory()

  const handleSubmit = (values: Values) => {
    storage.remove('current')

    history.push(constants.Routes.THANKS)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate(initialValues)}
    >
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            <FormControl className="mb-2">
              <RadioGroup name="plan" className="MuiGrid-root mui-radios">
                {PLANS.map(plan => (
                  <Grid item={true} key={plan.type} className="mui-plan">
                    <Plan {...plan} />
                  </Grid>
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl className="mb-2">
              <Relatives relatives={props.insured.family} />
            </FormControl>
            <FormControl className="mt-3">
              <Button
                variant="contained"
                color="primary"
                className="mui-submit"
                type="submit"
                disabled={formProps.invalid || formProps.submitting}
              >
                Comprar plan
              </Button>
            </FormControl>
          </form>
        )
      }}
    </Form>
  )
}

export default Step3
