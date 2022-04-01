import { Topic } from '@/types/topics'
import { HTMLAttributes } from 'react'

export interface ColumnarDateProps extends HTMLAttributes<HTMLTimeElement> {
  dateTime: string
  topic: Topic
  size?: ColumnarDateSize
}

export type ColumnarDateSize = 'small' | 'medium' | 'large'

export type SizesOutput = {
  year: string
  month: string
  day: string
}

export type SeparatedDateTime = {
  year: string
  month: string
  day: string
}
