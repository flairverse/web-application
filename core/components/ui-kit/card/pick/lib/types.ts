import { HTMLAttributes } from 'react'

export interface CardPickProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  onSelect?: (postId: number) => void
  post: {
    cover?: string
    id: number
    title: string
    slug: string
  }
  author: {
    id: number
    username: string
    profile?: string
    fullName: string
  }
}
