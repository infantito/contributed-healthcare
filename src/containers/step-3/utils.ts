import { FieldRenderProps } from 'react-final-form'
import { Relative } from 'containers/step-2/utils'
import { Insured } from 'utils'

export interface Props {
  insured: Insured
}

export enum PlanType {
  BASIC = 'básico',
  ADVANCED = 'avanzado',
  PREMIUM = 'premium',
  FULL = 'full',
}

export interface PlanProps {
  type: PlanType
  amount: number
}

export interface PlanRadioProps {
  fieldProps: FieldRenderProps<PlanType, HTMLElement>
  plan: PlanProps
}

export interface RelativesProps {
  relatives: Relative[]
}

export const PLANS: PlanProps[] = [
  {
    type: PlanType.BASIC,
    amount: 160,
  },
  {
    type: PlanType.ADVANCED,
    amount: 200,
  },
  {
    type: PlanType.PREMIUM,
    amount: 250,
  },
  {
    type: PlanType.FULL,
    amount: 500,
  },
]

export interface Values {
  plan: PlanType
}
