export enum RelativeType {
  NONE = '-',
  SPOUSE = 'Cónyuge',
  CHILD = 'Hijo',
}

export enum Routes {
  HOME = '/',
  RELATIVE = '/relative',
  PLANS = '/plans',
  THANKS = '/thanks',
}

export enum RELATIVE_AMOUNT {
  NONE = 0,
  SPOUSE = 40,
  CHILD = 60,
}

export const DOMAIN = process.env.REACT_APP_API_URL
