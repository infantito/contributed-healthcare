import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-final-form'
import { TextField, Select, Checkboxes } from 'mui-rff'
import { Button, FormControl, Grid, MenuItem } from '@material-ui/core'
import { validate, constants } from 'utils'
import { fields, Values } from './utils'
import { initialValues } from './constants'

const Step1: React.FC = () => {
  const history = useHistory()

  const handleSubmit = (values: Values) => {
    console.log(values)

    history.push(constants.Routes.RELATIVE)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate(fields)}
    >
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            <FormControl className="mb-2">
              <Grid container={true} wrap="nowrap">
                <Grid item={true} className="mui-select">
                  <Select name="documentType" variant="outlined">
                    <MenuItem value="DNI">DNI</MenuItem>
                    <MenuItem value="RUC">RUC</MenuItem>
                    <MenuItem value="CE">CE</MenuItem>
                  </Select>
                </Grid>
                <Grid className="w-100">
                  <TextField
                    name="documentNumber"
                    label="Nro. de Documento"
                    placeholder="Nro. de Documento"
                    type="number"
                    variant="outlined"
                    required={true}
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="birthDate"
                label="Fecha de nacimiento"
                placeholder="Fecha de nacimiento"
                type="text"
                variant="outlined"
                required={true}
              />
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="phone"
                label="Celular"
                placeholder="Celular"
                type="tel"
                variant="outlined"
                required={true}
              />
            </FormControl>
            <FormControl className="mb-2">
              <Checkboxes
                name="tyc1"
                color="primary"
                className="mui-checkbox"
                data={{
                  label:
                    'Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.',
                  value: true,
                }}
                required={true}
              />
            </FormControl>
            <FormControl className="mb-2">
              <Checkboxes
                name="tyc2"
                color="primary"
                className="mui-checkbox"
                data={{
                  label:
                    'Acepto la Política de Envío de Comunicaciones Comerciales.',
                  value: true,
                }}
                required={true}
              />
            </FormControl>
            <FormControl className="mt-3">
              <Button
                variant="contained"
                color="primary"
                className="mui-submit"
                type="submit"
                disabled={formProps.invalid || formProps.submitting}
              >
                Comencemos
              </Button>
            </FormControl>
          </form>
        )
      }}
    </Form>
  )
}

export default Step1
