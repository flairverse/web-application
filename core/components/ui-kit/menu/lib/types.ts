import { HTMLAttributes, ReactNode } from 'react'

export interface MenuProps<Keys = ItemKey, ClickReturn = void> extends HTMLAttributes<HTMLUListElement> {
  items: MenuItem<Keys, ClickReturn>[]
  position?: [string, string, string, string]
  openMenuEffect?: OpenMenuEffects
  minWidth?: string
  compact?: boolean
}

export type OpenMenuEffects = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'scale-out'

export interface MenuItem<Keys = ItemKey, ClickReturn = void> {
  title?: string
  key: Keys
  icon?: ReactNode
  onClick?: (key: Keys) => ClickReturn
  href?: string
  breaker?: boolean
}

export type ItemKey = string | number
