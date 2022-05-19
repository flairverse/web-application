import { HTMLAttributes, ReactNode } from 'react'

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean
  onClose: () => void
  closable?: boolean
  header?: ReactNode
}
