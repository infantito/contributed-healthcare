import { Typography } from '@material-ui/core'
import { Insured } from 'utils'

const Title: React.FC<{ insured: Insured }> = ({ insured }) => {
  return (
    <>
      <Typography className="mb-1" variant="h4">
        Hola,{' '}
        <span>
          {insured.hasHealthCare ? insured.name.first : '¡empecemos!'}
        </span>
      </Typography>
      <Typography className="mb-6" variant="subtitle1" component="p">
        {insured.hasHealthCare
          ? 'Valida que los datos sean correctos.'
          : 'Cuéntanos un poco sobre ti'}
      </Typography>
    </>
  )
}

export default Title
