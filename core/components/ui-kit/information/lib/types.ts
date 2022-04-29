import { Topic } from '@/types/topics'
import { PopoverProps } from 'antd'
import { HTMLAttributes } from 'react'

export interface InformationProps extends HTMLAttributes<HTMLDivElement> {
  icon?: JSX.Element
  colorTheme?: Topic | 'gray'
  popover?: PopoverProps
  loading?: boolean
}
