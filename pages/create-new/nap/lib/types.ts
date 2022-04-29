import { HTMLAttributes, RefObject } from 'react'
import { DetailedReactHTMLElement, ReactNode } from 'react'

export interface ItemsProps {
  // items: Item[]
  onOptionsClick: (key: Options) => void
  boardRef: RefObject<HTMLDivElement>
}

export interface ItemsShadowingProps {
  active: boolean
}

export interface ToolsProps {
  selectedOption: Options | 'none'
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

export interface ToolProps {
  disabled?: boolean
  active?: boolean
  title: string
  type: Tool
  onClick: (type: Tool) => void
  icon: ReactNode
}

export type Tool = 'none' | 'add-text'

export namespace Elements {
  interface BaseElement {
    type: Options
    id: string
    position: {
      top: string
      left: string
    }
  }

  export interface Text extends BaseElement {
    type: 'text'
    text: string
    color: string
    fontSize: number
  }

  export interface Image extends BaseElement {}

  export interface Gif extends BaseElement {}

  export interface Question extends BaseElement {}

  export interface Reminder extends BaseElement {}

  export interface Quiz extends BaseElement {}

  export interface Post extends BaseElement {}

  export interface Mention extends BaseElement {}

  export interface Video extends BaseElement {}

  // prettier-ignore
  export type All = 
    & Partial<Text> 
    & Partial<Image> 
    & Partial<Gif> 
    & Partial<Question> 
    & Partial<Reminder> 
    & Partial<Quiz> 
    & Partial<Post> 
    & Partial<Mention> 
    & Partial<Video>
}
