import { Topic } from '@/types/topics'
import { HTMLAttributes } from 'react'
import { NapProfileProps } from '../../nap-profile/lib/types'

export interface SuggestionBoxProps extends HTMLAttributes<HTMLDivElement> {
  topic: Topic
  title: string
  suggestionsItems?: SuggestionItem[]
  suggestionsFlairs?: SuggestionFlair[]
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
export interface SuggestionFlair extends NapProfileProps {}

export interface SuggestionItemExtraProps extends Pick<SuggestionBoxProps, 'topic'> {
  index: number
}