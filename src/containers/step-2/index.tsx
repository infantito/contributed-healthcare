import * as React from 'react'
import { Form } from 'react-final-form'
import { TextField, Select, Radios } from 'mui-rff'
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Typography,
} from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import AddRelative from './add-relative'
import { Values, initialValues, genders, people } from './utils'

const Step2: React.FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values)
  }

  return (
    <Form onSubmit={handleSubmit} initialValues={initialValues}>
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
                    required={true}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="name"
                label="Nombres"
                placeholder="Nombres"
                type="text"
                required={true}
                variant="outlined"
              />
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="firstName"
                label="Apellido Paterno"
                placeholder="Apellido Paterno"
                type="text"
                required={true}
                variant="outlined"
              />
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="lastName"
                label="Apellido Materno"
                placeholder="Apellido Materno"
                type="text"
                required={true}
                variant="outlined"
              />
            </FormControl>
            <FormControl className="mb-2">
              <TextField
                name="birthDate"
                label="Fecha de nacimiento"
                placeholder="Fecha de nacimiento"
                type="text"
                variant="outlined"
              />
            </FormControl>
            <FormControl className="mb-2">
              <Radios
                className="mui-radios"
                label="Género"
                name="gender"
                required={true}
                data={genders}
              />
            </FormControl>
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
