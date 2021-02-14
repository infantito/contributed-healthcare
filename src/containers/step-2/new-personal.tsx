import { FormControl } from '@material-ui/core'
import { TextField } from 'mui-rff'

const NewPersonal: React.FC = () => {
  return (
    <FormControl className="mb-2">
      <TextField
        name="fullName"
        label="Nombres y Apellidos"
        placeholder="Nombres y Apellidos"
        type="text"
        required={true}
        variant="outlined"
      />
    </FormControl>
  )
}

export default NewPersonal
