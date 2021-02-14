import * as React from 'react'
import {
  Button,
  FormControl,
  Grid,
  List,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import Relative from './relative'
import { initialRelative, Relative as RelativeType } from './utils'
import { useField, useForm } from 'react-final-form'

const AddRelative: React.FC = () => {
  const [relatives, setRelatives] = React.useState<Map<string, RelativeType>>(
    new Map(),
  )

  const [relative, setRelative] = React.useState<RelativeType>(initialRelative)

  const handleChangeRelativeType = (event: any) => {
    event.persist()

    setRelative(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const form = useForm()

  const handleRelative = (event: React.MouseEvent) => {
    setRelatives(prevState => {
      const values = prevState.entries()

      const map = new Map([...values])

      const now = Date.now()

      const id: string = now.toString(36)

      map.set(id, relative)

      return map
    })

    setRelative(initialRelative)
  }

  const handleRemove = (id: string) => (event: React.MouseEvent) => {
    setRelatives(prevState => {
      const values = prevState.entries()

      const map = new Map([...values])

      map.delete(id)

      return map
    })
  }

  const fieldPeople = useField('people')

  const isFamily = fieldPeople.input.value === 'family'

  React.useEffect(() => {
    form.change('relatives', isFamily ? [...relatives.values()] : [])
  }, [relatives, form, isFamily])

  if (!isFamily) {
    return null
  }

  const isButtonDisabled = relative.type === '-' || !relative.birthDate

  return (
    <FormControl>
      <Grid>
        <Typography variant="h6">Datos de los familiares</Typography>
      </Grid>
      <FormControl className="mb-2">
        <Grid container={true} wrap="nowrap" alignItems="center">
          <Grid item={true} className="mui-select" sm={3}>
            <Select
              name="type"
              variant="outlined"
              value={relative.type}
              onChange={handleChangeRelativeType}
            >
              <MenuItem value="-" disabled={true}>
                Vínculo
              </MenuItem>
              <MenuItem value="spouse">Cónyuge</MenuItem>
              <MenuItem value="child">Hijo</MenuItem>
            </Select>
          </Grid>
          <Grid item={true} sm={6}>
            <TextField
              name="birthDate"
              label="Fecha de nacimiento"
              placeholder="Fecha de nacimiento"
              type="text"
              variant="outlined"
              value={relative.birthDate}
              onChange={handleChangeRelativeType}
            />
          </Grid>
          <Grid item={true} sm={3}>
            <Button
              className="mui-add"
              size="large"
              onClick={handleRelative}
              disabled={isButtonDisabled}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
        <List>
          {[...relatives.values()].map((relative, index) => (
            <Relative key={index} {...relative} handleRemove={handleRemove} />
          ))}
        </List>
      </FormControl>
    </FormControl>
  )
}

export default AddRelative
