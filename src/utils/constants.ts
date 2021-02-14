export type RelativeType = 'spouse' | 'child'

export enum Routes {
  HOME = '/',
  RELATIVE = '/relative',
  PLANS = '/plans',
}

export const RELATIVE_AMOUNT = {
  spouse: 40,
  child: 60,
} as const
