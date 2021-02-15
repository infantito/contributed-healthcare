import { Insured } from 'utils'
import { RelativeType } from 'utils/constants'

export interface Props {
  insured: Insured
}

export interface Relative {
  id: string
  type: RelativeType
  birthDate: string
}

export interface RelativeProps extends Relative {
  id: string
  handleRemove: (id: string) => (event: React.MouseEvent) => void
}

export const GENDERS = [
  {
    label: 'Masculino',
    value: 'male',
  },
  {
    label: 'Femenino',
    value: 'female',
  },
]

export enum RelativeKind {
  ME = 'me',
  FAMILY = 'family',
}

export interface HealthCareValues {
  people: RelativeKind
  relatives: Relative[]
}

export interface RelativeField {
  label: string
  value: RelativeKind
}

export const PEOPLE: RelativeField[] = [
  {
    label: 'Solo a mí',
    value: RelativeKind.ME,
  },
  {
    label: 'A mí y a mi familia',
    value: RelativeKind.FAMILY,
  },
]

export const initialRelative: Relative = {
  id: '',
  type: RelativeType.NONE,
  birthDate: '2021-01-01',
}

export const validate = (values: HealthCareValues) => {
  if (values.people === RelativeKind.FAMILY && !values.relatives?.length) {
    return {
      people: 'Agregar familiar',
    }
  }

  if (!values.people) {
    return {
      people: 'Campo requerido',
    }
  }

  return {}
}
