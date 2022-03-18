import { Topic } from '@/types/topics'
import { FC, HTMLAttributes } from 'react'

export interface HomePageProps {}

export interface TopicProps extends HTMLAttributes<HTMLDivElement> {
  TopicIcon: FC
  title: string
  counter: number
  topic: Topic
  href: string
}
