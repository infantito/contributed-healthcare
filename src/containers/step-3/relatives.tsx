import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { RelativesProps } from './utils'
import { RelativeType, RELATIVE_AMOUNT } from 'utils/constants'

const Relatives: React.FC<RelativesProps> = props => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography>
              Tienes ({props.relatives.length}) asegurados
            </Typography>
            <Typography>Resumen del plan</Typography>
          </Box>
        </AccordionSummary>
        {props.relatives.map(relative => (
          <AccordionDetails key={relative.id}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Typography>{relative.type}</Typography>
              <Typography>
                S/{' '}
                {relative.type === RelativeType.CHILD
                  ? RELATIVE_AMOUNT.CHILD
                  : RELATIVE_AMOUNT.SPOUSE}
              </Typography>
            </Box>
          </AccordionDetails>
        ))}
      </Accordion>
    </Box>
  )
}

export default Relatives
