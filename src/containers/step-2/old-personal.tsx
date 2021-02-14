import { FormControl, Grid, MenuItem } from '@material-ui/core'
import { TextField, Select, Radios } from 'mui-rff'
import { genders } from './utils'

const OldPersonal: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default OldPersonal
