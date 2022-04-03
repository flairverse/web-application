export const TOPICS = ['podcast', 'article', 'job', 'blog'] as const

export type Topic = typeof TOPICS[number]
