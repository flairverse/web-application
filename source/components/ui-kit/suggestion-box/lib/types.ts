import { Topic } from '@/types/topics'
import { HTMLAttributes } from 'react'

export interface SuggestionBoxProps extends HTMLAttributes<HTMLDivElement> {
  count: number
  topic: Topic
  title: string
  suggestions: SuggestionItem[]
}

export type SuggestionItem = {
  title: string
  href: string
  id: number
  button?: {
    onClick: (id: number) => void
    text: string
  }
}

export interface SuggestionItemExtraProps extends Pick<SuggestionBoxProps, 'topic'> {
  index: number
}
