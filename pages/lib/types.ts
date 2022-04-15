import { Topic } from '@/types/topics'
import { FC, HTMLAttributes } from 'react'

export interface HomePageProps {}

export interface TopicProps extends HTMLAttributes<Omit<HTMLAnchorElement, 'href'>> {
  TopicIcon: FC
  title: string
  counter: number
  topic: Topic
  href: string
}

export interface TopicsProps extends HTMLAttributes<HTMLDivElement> {}

export interface CategoriesProps {
  onChange: (key: string) => void
}
