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
    right: number
  }
}

export interface CentralDivSizeCalculator extends Pick<SidesProps, 'sizes' | 'left' | 'right'> {
  defaultSize: number
}
