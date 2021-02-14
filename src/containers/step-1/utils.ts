import { DocumentType } from 'utils'

export interface Query {
  documentType: DocumentType
  documentNumber: string
}

export interface Values {
  documentType: DocumentType
  documentNumber: string
  tyc1: boolean
  tyc2: boolean
}

export interface Errors {
  documentType: string
  documentNumber: string
  birthDate: string
  phone: string
  tyc1: string
  tyc2: string
}

export const fields: Values = {
  documentType: DocumentType.DNI,
  documentNumber: '',
  tyc1: false,
  tyc2: false,
}

export const allowedTargets = ['documentType', 'documentNumber']

export const isDebouncedValue = (
  event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
) => {
  const target = event.target.name

  return allowedTargets.includes(target)
}
