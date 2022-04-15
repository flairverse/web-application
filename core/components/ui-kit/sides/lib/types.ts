import { HTMLAttributes, ReactNode } from 'react'

export interface SidesProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode
  right?: ReactNode
  offset?: {
    top?: number
    bottom?: number
  }
  sizes?: {
    left?: number
    right?: number

    left_1200?: number
    right_1200?: number
  }
}

export interface CentralDivSizeCalculator extends Pick<SidesProps, 'left' | 'right'> {
  defaultSize: number
  leftSize: number
  rightSize: number
}
