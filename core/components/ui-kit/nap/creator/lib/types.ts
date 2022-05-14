import { Topic } from '@/types/topics'
import { RefObject } from 'react'
import { IconType } from 'react-icons/lib'
import * as Lib from '.'

export interface ItemsProps {
  onOptionsClick: (key: Options) => void
  boardRef: RefObject<HTMLDivElement>
}

export interface ItemsShadowingProps {
  active: boolean
}

export interface ToolsProps extends Pick<ItemsProps, 'boardRef'> {
  selectedOption: Options | 'none'
}

export interface ToolsForInserters extends Pick<ItemsProps, 'boardRef'> {}

export type Options = 'text' | 'image' | 'gif' | 'question' | 'reminder' | 'quiz' | 'post' | 'mention' | 'video' | 'more|less'

export type Item = {
  Icon: IconType
  title: string
  key: Options
}

export interface ToolboxProps extends Pick<ItemsProps, 'boardRef'> {
  active?: boolean
}

export interface ToolProps {
  disabled?: boolean
  title: string
  type: Tool
  onClick: (type: Tool) => void
  Icon: IconType
  index: number
}

export type TextTools = 'add-text' | 'text-font-size' | 'text-effect' | 'text-rotation'
export type PostTools = 'add-post' | 'post-style' | 'post-rotation'
export type Tool = 'none' | TextTools | PostTools

export type TextEffects = typeof Lib.CO.EFFECTS.TEXT[number]
export type PostEffects = typeof Lib.CO.EFFECTS.POST[number]
export type AllEffects = TextEffects | PostEffects

export namespace Elements {
  interface BaseElement {
    type: Options
    id: string
    position: {
      top: string
      left: string
    }
    rotate: ElementRotation
  }
  export type ElementRotation = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315

  export interface Text extends BaseElement {
    type: 'text'
    text: string
    fontSize: string
    effect: TextEffects
  }

  export interface Post extends BaseElement {
    type: 'post'
    style: PostEffects
    user: {
      fullName: string
      job: string
      profile: string | null
    }
    post: {
      cover: string | null
      title: string
      month: string
      day: string
      year: string
      summary: string
      paymentRequired: boolean
      topic: Topic
      timeToRead: number
      comments: number
      likes: number
      id: number
    }
  }

  export interface Image extends BaseElement {}

  export interface Gif extends BaseElement {}

  export interface Question extends BaseElement {}

  export interface Reminder extends BaseElement {}

  export interface Quiz extends BaseElement {}

  export interface Mention extends BaseElement {}

  export interface Video extends BaseElement {}

  // prettier-ignore
  export type All = 
    & { type: Options }
    & Partial<Omit<Text, 'type'>> 
    & Partial<Omit<Image, 'type'>> 
    & Partial<Omit<Gif, 'type'>> 
    & Partial<Omit<Question, 'type'>> 
    & Partial<Omit<Reminder, 'type'>> 
    & Partial<Omit<Quiz, 'type'>> 
    & Partial<Omit<Post, 'type'>> 
    & Partial<Omit<Mention, 'type'>> 
    & Partial<Omit<Video, 'type'>>
}

export type ElementFrameActionTypes = 'delete' | 'editInnerText'

export type ElementFrameActions = {
  type: ElementFrameActionTypes
  icon: string
}

export type IconsObject = {
  [name in ElementFrameActionTypes]: string
}

export interface PostCardProps {
  author: {
    profile: string
    fullName: string
    username: string
  }
  post: {
    cover?: string
    title: string
    id: number
  }
}

export interface PostsPickUpProps {
  boardRef: RefObject<HTMLDivElement>
}

export type ItemsDOMStringGenerators = {
  text: (innerText: string) => string
  post: ({}: Pick<Elements.Post, 'post' | 'user'>) => string
}
