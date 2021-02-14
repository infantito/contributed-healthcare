import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
  Radio,
} from '@material-ui/core'
import CalendarIcon from '@material-ui/icons/Event'
import { GENDERS, Props } from './utils'

const OldPersonal: React.FC<Props> = ({ insured }) => {
  return (
    <>
      <FormControl className="mb-2">
        <Grid container={true} wrap="nowrap">
          <Grid item={true} className="mui-document">
            <Select
              name="documentType"
              variant="outlined"
              value={insured.id.name}
              onChange={null}
              readOnly={true}
            >
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
              value={insured.id.value}
              onChange={null}
              InputProps={{
                readOnly: true,
              }}
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
          value={insured.name.first}
          onChange={null}
          InputProps={{
            readOnly: true,
          }}
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
          value={insured.name.last}
          onChange={null}
          InputProps={{
            readOnly: true,
          }}
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
          value={insured.name.last}
          onChange={null}
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>
      <FormControl className="mb-2">
        <TextField
          name="birthDate"
          label="Fecha de nacimiento"
          placeholder="Fecha de nacimiento"
          type="text"
          variant="outlined"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <CalendarIcon />
              </InputAdornment>
            ),
          }}
          value={insured.dob.date.split('T')[0]}
          onChange={null}
        />
      </FormControl>
      <FormControl className="mb-2">
        <FormLabel component="legend">Género</FormLabel>
        <RadioGroup
          className="mui-radios"
          name="gender"
          value={insured.gender}
          onChange={null}
        >
          {GENDERS.map(gender => (
            <FormControlLabel
              key={gender.value}
              label={gender.label}
              value={gender.value}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default OldPersonal
