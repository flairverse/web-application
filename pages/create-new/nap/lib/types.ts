import { HTMLAttributes, ReactNode } from 'react'

export interface ItemsProps {
  // items: Item[]
  onOptionsClick: (key: Options) => void
}

export interface ItemsShadowingProps {
  active: boolean
}

export type Options = 'text' | 'image' | 'gif' | 'question' | 'reminder' | 'quiz' | 'post' | 'mention' | 'video' | 'more|less'

export type Item = {
  icon: ReactNode
  title: string
  key: Options
}

export interface ToolboxProps {
  active?: boolean
}
