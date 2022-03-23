import { SuggestionItem } from '@/components/ui-kit/suggestion-box/lib/types'

export const suggestionInBox1: SuggestionItem[] = [
  {
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nam officia',
    href: '/',
    id: 0
  },
  {
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nam officia',
    href: '/',
    id: 1
  }
]

export const suggestionInBox2: SuggestionItem[] = [
  {
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nam officia',
    href: '/auth/sign-in',
    id: 0,
    button: {
      onClick: id => alert(id),
      text: 'Follow'
    }
  },
  {
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nam officia',
    href: '/auth/sign-in',
    id: 1,
    button: {
      onClick: id => alert(id),
      text: 'Follow'
    }
  }
]
