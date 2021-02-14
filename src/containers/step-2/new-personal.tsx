import { FormControl, TextField } from '@material-ui/core'
import { Props } from './utils'

const NewPersonal: React.FC<Props> = ({ insured }) => {
  const fullName = `${insured.name.first} ${insured.name.last}`

  return (
    <FormControl className="mb-2">
      <TextField
        name="fullName"
        label="Nombres y Apellidos"
        placeholder="Nombres y Apellidos"
        type="text"
        required={true}
        variant="outlined"
        value={fullName}
        onChange={null}
        InputProps={{
          readOnly: true,
        }}
      />
    </FormControl>
  )
}

export default NewPersonal
