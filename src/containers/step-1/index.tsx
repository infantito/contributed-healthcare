import * as React from 'react'
import { Form as AuthForm } from 'react-final-form'
import { TextField, Select, Checkboxes } from 'mui-rff'
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Typography,
} from '@material-ui/core'

import './styles.scss'

interface Values {
  documentType: string
  documentNumber: string
  birthDate: string
  phone: string
}

const initialValues = {
  documentType: 'DNI',
}

const Step1: React.FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values)
  }

  return (
    <div className="auth mx-auto py-5">
      <Typography className="mb-1" variant="h5">
        Obtén tu <span>seguro ahora</span>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Ingresa los datos para comenzar.
      </Typography>
      <div className="mt-3">
        <AuthForm onSubmit={handleSubmit} initialValues={initialValues}>
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
                  />
                </FormControl>
                <FormControl className="mb-2">
                  <TextField
                    name="phone"
                    label="Celular"
                    placeholder="Celular"
                    type="tel"
                    variant="outlined"
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
                  />
                </FormControl>
                <FormControl className="mt-3">
                  <Button
                    variant="contained"
                    color="primary"
                    className="mui-submit"
                    type="submit"
                  >
                    Comencemos
                  </Button>
                </FormControl>
              </form>
            )
          }}
        </AuthForm>
      </div>
    </div>
  )
}

export default Step1
