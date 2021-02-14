export type RelativeType = 'spouse' | 'child'

export enum Routes {
  HOME = '/',
  RELATIVE = '/relative',
  PLANS = '/plans',
  THANKS = '/thanks',
}

export const RELATIVE_AMOUNT = {
  spouse: 40,
  child: 60,
} as const

export const DOMAIN = process.env.REACT_APP_API_URL
