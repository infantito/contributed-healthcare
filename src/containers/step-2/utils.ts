import { RelativeType } from 'utils/constants'

export interface Relative {
  id: string
  type: RelativeType
  birthDate: string
}

export interface HealthCareValues {
  documentType: string
  documentNumber: string
  name: string
  firstName: string
  lastName: string
  birthDate: string
  gender: string
  relatives: Relative[]
}

export interface FamilyCareValues extends Pick<HealthCareValues, 'relatives'> {
  fullName: string
}

export const initialValues = {
  documentType: 'DNI',
  relative: {
    type: '-',
    birthDate: '',
  },
}

export interface RelativeProps extends Relative {
  id: string
  handleRemove: (id: string) => (event: React.MouseEvent) => void
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

export const initialRelative: Relative = {
  id: '',
  type: '-',
  birthDate: '',
}

export const getFields = (
  hasHealthCare: boolean,
): HealthCareValues | FamilyCareValues => {
  if (hasHealthCare) {
    return {
      documentType: '',
      documentNumber: '',
      name: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      relatives: [],
    }
  }

  return {
    fullName: '',
    relatives: [],
  }
}
