import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export type BottomNavBarItem = {
  href: string
  outlinedIcon: ReactNode
  filledIcon: ReactNode
  active?: boolean
}
