import { Button, Grid, ListItem, ListItemText } from '@material-ui/core'
import { RelativeProps } from './utils'

const Relative: React.FC<RelativeProps> = props => {
  return (
    <ListItem>
      <Grid container={true} spacing={0} wrap="nowrap">
        <Grid item={true} sm={3}>
          <ListItemText primary={props.type} />
        </Grid>
        <Grid item={true} sm={6}>
          <ListItemText primary={props.birthDate} />
        </Grid>
        <Grid item={true} sm={3}>
          <Button
            className="mui-add"
            size="small"
            onClick={props.handleRemove(props.id)}
          >
            Eliminar
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default Relative
