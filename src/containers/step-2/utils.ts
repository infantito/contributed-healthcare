export type RelativeType = 'spouse' | 'child'

export interface Relative {
  type: string
  birthDate: string
}

export interface Values {
  documentType: string
  documentNumber: string
  name: string
  firstName: string
  lastName: string
  birthDate: string
  gender: string
  relativeType: string
  relatives: string[]
}

export const initialValues = {
  documentType: 'DNI',
  relative: {
    type: '',
    birthDate: '',
  },
}

export interface RelativeProps extends Relative {
  handleRemove: (event: React.MouseEvent) => void
}

export const genders = [
  {
    label: 'Masculino',
    value: 'masculino',
  },
  {
    label: 'Femenino',
    value: 'femenino',
  },
]

export const people = [
  {
    label: 'Solo a mí',
    value: 'me',
  },
  {
    label: 'A mí y a mi familia',
    value: 'family',
  },
]