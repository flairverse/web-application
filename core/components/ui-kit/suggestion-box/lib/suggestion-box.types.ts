import { Topic } from '@/types/topics'
import { HTMLAttributes } from 'react'
import { NapProfileProps } from '../../nap/profile/lib/nap-profile.types'

export interface SuggestionBoxProps extends HTMLAttributes<HTMLDivElement> {
  topic: Topic
  title: string
  suggestionsItems?: SuggestionItem[]
  suggestionsFlairs?: SuggestionFlair[]
  suggestionContent?: SuggestionContent
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

export type SuggestionContent = {
  href: string
  buttonText: string
}

export interface SuggestionItemExtraProps extends Pick<SuggestionBoxProps, 'topic'> {
  index: number
}
