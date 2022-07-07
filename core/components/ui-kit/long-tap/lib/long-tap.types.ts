import { PopoverProps } from 'antd'
import { HTMLAttributes, RefObject } from 'react'

export interface LongTapProps extends HTMLAttributes<HTMLDivElement> {
  timeout?: number
  callback?: () => void
  popup?: PopoverProps & {
    mobileOnly?: boolean
  }
}

export interface UseLongTapArgs extends Pick<LongTapProps, 'timeout' | 'callback' | 'popup'> {
  popupRef: RefObject<HTMLSpanElement>
}
