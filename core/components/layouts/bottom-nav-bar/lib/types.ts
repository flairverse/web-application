import { ReactNode } from 'react'

export type BottomNavBarItem = {
  href: string
  outlinedIcon: ReactNode
  filledIcon: ReactNode
  active?: boolean
}
