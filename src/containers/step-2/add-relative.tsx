import * as React from 'react'
import { useField, useForm } from 'react-final-form'
import {
  Button,
  FormControl,
  Grid,
  List,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { RelativeType } from 'utils/constants'
import Relative from './relative'
import { initialRelative, Props, Relative as RelativeState } from './utils'

const AddRelative: React.FC<Props> = ({ insured }) => {
  const [relatives, setRelatives] = React.useState<Map<string, RelativeState>>(
    () => {
      const values: [string, RelativeState][] = insured.family.map(family => [
        family.id,
        family,
      ])

      return new Map(values)
    },
  )

  const [relative, setRelative] = React.useState<RelativeState>(initialRelative)

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

      map.set(id, { ...relative, id })

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

  const isButtonDisabled =
    relative.type === RelativeType.NONE || !relative.birthDate

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
              <MenuItem value={RelativeType.NONE} disabled={true}>
                Vínculo
              </MenuItem>
              <MenuItem value={RelativeType.SPOUSE}>Cónyuge</MenuItem>
              <MenuItem value={RelativeType.CHILD}>Hijo</MenuItem>
            </Select>
          </Grid>
          <Grid item={true} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="mui-date"
                margin="normal"
                id="birthDate"
                name="birthDate"
                format="MM/dd/yyyy"
                value={relative.birthDate}
                onChange={(date: MaterialUiPickersDate, value: string) =>
                  handleChangeRelativeType({
                    target: {
                      value,
                      name: 'birthDate',
                    },
                    persist: () => {},
                  })
                }
                inputVariant="outlined"
                KeyboardButtonProps={{
                  'aria-label': 'seleccionar fecha',
                }}
              />
            </MuiPickersUtilsProvider>
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
