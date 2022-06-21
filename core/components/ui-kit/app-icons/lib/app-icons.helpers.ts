import { Topic } from '@/types/topics'

export const getFillColor = (fillColor: string | undefined, topic: Topic): string => {
  if (fillColor) {
    return fillColor
  }

  return `var(--c-${topic})`
}
