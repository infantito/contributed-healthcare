import { Button, ListItem, ListItemText } from '@material-ui/core'
import { RelativeProps } from './utils'

const Relative: React.FC<RelativeProps> = props => {
  return (
    <ListItem>
      <ListItemText primary={props.type} />
      <ListItemText primary={props.birthDate} />
      <Button size="small" onClick={props.handleRemove(props.id)}>
        Eliminar
      </Button>
    </ListItem>
  )
}

export default Relative
