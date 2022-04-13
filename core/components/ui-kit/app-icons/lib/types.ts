import { Topic } from '@/types/topics'

export interface TransparentProps {
  fillColor?: string
}

export interface AppIconByTopicProps extends TransparentProps {
  topic: Topic
  transparent?: boolean
}
