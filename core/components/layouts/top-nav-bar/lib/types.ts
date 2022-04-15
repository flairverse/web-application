import { Topic } from '@/types/topics'
import { LinkProps } from 'next/link'

export interface SearchSuggestProps extends LinkProps {
  text: string
  actionType: SearchSuggestActionTypes
}

export type SearchSuggestActionTypes = Topic | 'query'

export interface SuggestionActionsProps extends Pick<SearchSuggestProps, 'actionType'> {}

export type ProfileMenuKeys =
  | 'profile'
  | 'create-new-post'
  | 'make-new-nap'
  | 'bookmarks'
  | 'messaging'
  | 'new-group'
  | 'people-nearby'
  | 'reactions'
  | 'preferences'
  | 'faq'
  | 'breaker'
  | 'comments'
  | 'likes'

export interface ProfileProps {
  username: string
}
