import { HTMLAttributes, ReactNode } from 'react'

export interface ItemsProps {
  items: Item[]
}

export type Item = {
  icon: ReactNode
  title: string
  active: boolean
}
