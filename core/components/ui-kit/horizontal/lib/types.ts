import { HTMLAttributes } from 'react'

export interface HorizontalProps extends HTMLAttributes<HTMLDivElement> {
  speed?: number
  scale?: boolean
  central?: boolean
  items: HorizontalItemProps[]
  onItemsClick?: (id: number) => void
  itemProps?: HorizontalItemProps
}

export interface HorizontalItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  spaceX?: string
  spaceY?: string
  rest?: object
  id?: number
}
