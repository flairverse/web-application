import { Topic } from '@/types/topics'
import { PopoverProps } from 'antd'
import { HTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface InformationProps extends HTMLAttributes<HTMLDivElement> {
  icon?: JSX.Element
  colorTheme?: Topic | 'gray'
  popover?: PopoverProps
}
