import * as React from 'react'
import { Insured, storage } from 'utils'

const useInsured = (): Insured => {
  const insured: Insured = React.useMemo(() => {
    const value = JSON.parse(storage.get('current'))

    return value
  }, [])

  return insured
}

export default useInsured
