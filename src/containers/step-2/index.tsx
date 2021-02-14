import * as React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { Radios } from 'mui-rff'
import { Button, FormControl, Grid, Typography } from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import { constants } from 'utils'
import AddRelative from './add-relative'
import NewPersonal from './new-personal'
import { Values, initialValues, people } from './utils'

const Step2: React.FC = () => {
  const history = useHistory()

  const handleSubmit = (values: Values) => {
    console.log(values)

    history.push(constants.Routes.PLANS)
  }

  return (
    <Form onSubmit={handleSubmit} initialValues={initialValues}>
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            <NewPersonal />
            <FormControl className="mb-2">
              <Radios
                className="mui-radios"
                label="¿A quién vamos a asegurar?"
                name="people"
                required={true}
                data={people}
              />
            </FormControl>
            <FormControl>
              <Grid>
                <Typography variant="h6">Datos de los familiares</Typography>
              </Grid>
              <AddRelative />
            </FormControl>
            <FormControl className="mt-3">
              <Button
                variant="contained"
                color="primary"
                className="mui-submit"
                type="submit"
                disabled={formProps.invalid || formProps.submitting}
                endIcon={<ArrowIcon />}
              >
                Continuar
              </Button>
            </FormControl>
          </form>
        )
      }}
    </Form>
  )
}

export default Step2
