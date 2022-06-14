import { Topic } from '@/types/topics'
import { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  post: {
    title: string
    summary: string
    slug: string
    topic: Topic
    likes: number
    comments: number
    cover?: string
  }
  user: {
    fullName: string
    job: string
    profile: string
    id: number
    slug: string
  }
  loading?: boolean
}

export type MenuItemKeys =
  | 'copy-link'
  | 'report-abuse'
  | 'not-interested'
  | 'send-to-friends'
  | 'share-in-another-way'
