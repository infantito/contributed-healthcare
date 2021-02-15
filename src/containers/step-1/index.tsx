import * as React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import CalendarIcon from '@material-ui/icons/Event'
import debounce from 'lodash.debounce'
import { validate, constants, Results, storage, Insured } from 'utils'
import { fields, isDebouncedValue, Values } from './utils'

const Step1: React.FC = () => {
  const [query, setQuery] = React.useState<Values>(fields)

  const [isLoading, setIsLoading] = React.useState(false)

  const onSearch = async (values: Values) => {
    setIsLoading(true)

    const keyName = `${values.documentType}-${values.documentNumber}`

    const insured: Insured = JSON.parse(storage.get(keyName))

    if (insured) {
      setIsLoading(false)

      return setInsured(insured)
    }

    const response = await fetch(constants.DOMAIN)

    const data: Results = await response.json()

    setInsured(data.results[0])

    setIsLoading(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncer = React.useCallback(
    debounce((query: Values) => onSearch(query), 500),
    [],
  )

  const [insured, setInsured] = React.useState<Insured>(null)

  const history = useHistory()

  const handleChangeQuery = (event: any) => {
    event.persist()

    const { name, value, checked } = event.target

    const isValid = isDebouncedValue(event)

    if (isValid && !value.trim()) {
      setInsured(null)

      return setQuery(fields)
    }

    setQuery(prevState => ({
      ...prevState,
      [name]: isValid ? value : checked,
    }))

    if (isValid) {
      debouncer({ ...query, documentNumber: value })
    }
  }

  const handleSubmit = (event: React.MouseEvent): void => {
    const keyName = `${query.documentType}-${query.documentNumber}`

    if (!insured.hasHealthCare) {
      insured.hasHealthCare = false

      insured.id.name = query.documentType

      insured.id.value = query.documentNumber

      insured.family = []

      storage.set(keyName, insured)
    }

    storage.set('current', insured)

    history.push(constants.Routes.RELATIVE)
  }

  const isButtonDisabled =
    !insured || Boolean(Object.values(validate(query)(query)).length)

  return (
    <form>
      <FormControl className="mb-2">
        <Grid container={true} wrap="nowrap">
          <Grid item={true} className="mui-select">
            <Select
              name="documentType"
              variant="outlined"
              onChange={handleChangeQuery}
              value={query.documentType}
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
              variant="outlined"
              required={true}
              value={query.documentNumber}
              onChange={handleChangeQuery}
              InputProps={{
                readOnly: isLoading,
                endAdornment: isLoading ? <CircularProgress size={20} /> : null,
              }}
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
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <CalendarIcon />
              </InputAdornment>
            ),
          }}
          value={insured?.dob.date.split('T')[0] || ''}
          onChange={null}
        />
      </FormControl>
      <FormControl className="mb-2">
        <TextField
          name="phone"
          label="Celular"
          placeholder="Celular"
          type="tel"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          value={insured?.cell || ''}
          onChange={null}
        />
      </FormControl>
      <FormControl className="mb-2">
        <FormControlLabel
          control={
            <Checkbox
              name="tyc1"
              color="primary"
              className="mui-checkbox"
              required={true}
              value={query.tyc1}
              onChange={handleChangeQuery}
            />
          }
          label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones."
        />
      </FormControl>
      <FormControl className="mb-2">
        <FormControlLabel
          control={
            <Checkbox
              name="tyc2"
              color="primary"
              className="mui-checkbox"
              required={true}
              value={query.tyc2}
              onChange={handleChangeQuery}
            />
          }
          label="Acepto la Política de Envío de Comunicaciones Comerciales."
        />
      </FormControl>
      <FormControl className="mt-3">
        <Button
          variant="contained"
          color="primary"
          className="mui-submit"
          type="button"
          disabled={isButtonDisabled}
          onClick={handleSubmit}
        >
          Comencemos
        </Button>
      </FormControl>
    </form>
  )
}

export default Step1
