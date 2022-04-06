import { HTMLAttributes, ReactNode } from 'react'

export interface MenuProps<Keys = ItemKey, ClickReturn = void> extends HTMLAttributes<HTMLUListElement> {
  items: MenuItem<Keys, ClickReturn>[]
}

export type MenuItem<Keys = ItemKey, ClickReturn = void> = {
  title: string
  key: Keys
  icon?: ReactNode
  onClick?: (key: Keys) => ClickReturn
}

export type ItemKey = string | number
