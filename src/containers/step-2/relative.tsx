import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import { RelativeProps } from './utils'

const Relative: React.FC<RelativeProps> = props => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.type} />
        <ListItemText primary={props.birthDate} />
        <Button size="small" onClick={props.handleRemove}>
          Eliminar
        </Button>
      </ListItem>
    </List>
  )
}

export default Relative
