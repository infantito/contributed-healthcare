export interface Values {
  documentType: string
  documentNumber: string
  birthDate: string
  phone: string
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
  documentType: '',
  documentNumber: '',
  birthDate: '',
  phone: '',
  tyc1: false,
  tyc2: false,
}
