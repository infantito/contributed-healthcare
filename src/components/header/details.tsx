import { Typography } from '@material-ui/core'
import * as React from 'react'
import { list } from './constants'

import './styles.scss'

const Details: React.FC = props => {
  return (
    <div className="header__details pl-4 py-4">
      <Typography variant="h3" className="mb-3">
        Seguro de <strong>Salud</strong>
      </Typography>
      <ul className="m-0 p-0">
        {list.map(item => (
          <Typography
            className="mb-2"
            variant="subtitle1"
            component="p"
            key={item.alt}
          >
            <i className="mr-1">
              <img src={item.img} alt={item.alt} />
            </i>
            {item.text}
          </Typography>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(Details)
