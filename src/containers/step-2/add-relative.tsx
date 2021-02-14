import { Button, FormControl, Grid, MenuItem } from '@material-ui/core'
import { Select, TextField } from 'mui-rff'

const AddRelative: React.FC = () => {
  const handleRelative = () => {}

  return (
    <FormControl className="mb-2">
      <Grid container={true} wrap="nowrap" alignItems="center">
        <Grid item={true} className="mui-select" sm={3}>
          <Select name="relative.type" variant="outlined">
            <MenuItem value="-" disabled={true}>
              Vínculo
            </MenuItem>
            <MenuItem value="spouse">Cónyuge</MenuItem>
            <MenuItem value="child">Hijo</MenuItem>
          </Select>
        </Grid>
        <Grid item={true} sm={6}>
          <TextField
            name="relative.birthDate"
            label="Fecha de nacimiento"
            placeholder="Fecha de nacimiento"
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item={true} sm={3}>
          <Button className="mui-add" size="large" onClick={handleRelative}>
            Agregar
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default AddRelative
