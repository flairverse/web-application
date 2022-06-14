import { HTMLAttributes } from 'react'

export interface LongPressProps extends HTMLAttributes<HTMLDivElement> {
  timeout?: number
  callback: () => void
  disabled?: boolean
}

export interface UseLongPressArgs
  extends Pick<LongPressProps, 'timeout' | 'callback' | 'disabled'> {}
