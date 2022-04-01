import { HTMLAttributes, ReactNode } from 'react'

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (key: string) => void
  tabs: Tab[]
  defaultActive?: string
}

export type Tab = {
  content: ReactNode
  title: string
  key: string
}
