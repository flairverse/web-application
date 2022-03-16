import { Topic } from '@/types/topics'
import { LinkProps } from 'next/link'

export interface SearchSuggestProps extends LinkProps {
  text: string
  actionType: SearchSuggestActionTypes
}

export type SearchSuggestActionTypes = Topic | 'query'

export interface SuggestionActionsProps extends Pick<SearchSuggestProps, 'actionType'> {}
