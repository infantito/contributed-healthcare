import { Button, FormControl, Grid, MenuItem } from '@material-ui/core'
import { Select, TextField } from 'mui-rff'

const AddRelative: React.FC = () => {
  const handleRelative = () => {}

  return (
    <FormControl className="mb-2">
      <Grid container={true} wrap="nowrap">
        <Grid item={true} className="mui-select">
          <Select name="relative.type" variant="outlined">
            <MenuItem value="" selected>
              Vínculo
            </MenuItem>
            <MenuItem value="spouse">Cónyuge</MenuItem>
            <MenuItem value="child">Hijo</MenuItem>
          </Select>
        </Grid>
        <Grid>
          <TextField
            name="relative.birthDate"
            label="Fecha de nacimiento"
            placeholder="Fecha de nacimiento"
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid>
          <Button size="small" onClick={handleRelative}>
            Agregar
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default AddRelative
