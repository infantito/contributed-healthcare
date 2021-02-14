import * as React from 'react'
import { Form } from 'react-final-form'
import { Button, FormControl, Grid, RadioGroup } from '@material-ui/core'
import { initialValues, PLANS, Values } from './utils'
import Plan from './plan'
import Relatives from './relatives'
import { validate } from 'utils'

const Step3: React.FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values)
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
              <Relatives relatives={[]} />
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
