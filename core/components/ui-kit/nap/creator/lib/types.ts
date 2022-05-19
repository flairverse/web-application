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

export interface ToolBoxNextBtnProps extends Pick<ItemsProps, 'boardRef'> {}

export interface ToolProps {
  disabled?: boolean
  title: string
  type: Tool
  onClick: (type: Tool) => void
  Icon: IconType
  index: number
}

export type TextTools = 'add-text' | 'text-font-size' | 'text-effect' | 'text-rotation'
export type PostTools = 'add-post' | 'post-effect' | 'post-rotation'
export type Tool = 'none' | TextTools | PostTools

export type TextEffects = typeof Lib.CO.EFFECTS.TEXT[number]
export type PostEffects = typeof Lib.CO.EFFECTS.POST[number]
export type MentionEffects = typeof Lib.CO.EFFECTS.MENTION[number]
export type AllEffects = TextEffects | PostEffects | MentionEffects

export namespace Elements {
  export interface BaseElement<Effect extends AllEffects = AllEffects, Type extends Options = Options> {
    type: Type
    id: string
    effect: Effect
    rotate: ElementRotation
    position: {
      top: string
      left: string
    }
  }
  export type ElementRotation = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315

  export interface Text extends BaseElement<TextEffects, 'text'> {
    text: string
    fontSize: string
  }

  export interface Post extends BaseElement<PostEffects, 'post'> {
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

  export interface Mention extends BaseElement<MentionEffects, 'mention'> {
    fullName: string
    username: string
    userID: number
    profile?: string
    job?: string
  }

  export interface Image extends BaseElement {}

  export interface Gif extends BaseElement {}

  export interface Question extends BaseElement {}

  export interface Reminder extends BaseElement {}

  export interface Quiz extends BaseElement {}

  export interface Video extends BaseElement {}

  // prettier-ignore
  export type All = 
    & { type: Options, effect: AllEffects }
    & Partial<Omit<Text, 'type' | 'effect'>> 
    & Partial<Omit<Image, 'type' | 'effect'>> 
    & Partial<Omit<Gif, 'type' | 'effect'>> 
    & Partial<Omit<Question, 'type' | 'effect'>> 
    & Partial<Omit<Reminder, 'type' | 'effect'>> 
    & Partial<Omit<Quiz, 'type' | 'effect'>> 
    & Partial<Omit<Post, 'type' | 'effect'>> 
    & Partial<Omit<Mention, 'type' | 'effect'>> 
    & Partial<Omit<Video, 'type' | 'effect'>>
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

export interface MentionPickUpProps {
  boardRef: RefObject<HTMLDivElement>
}

export type ItemsDOMStringGenerators = {
  text: (innerText: string) => string
  post: ({}: Pick<Elements.Post, 'post' | 'user'>) => string
  mention: ({}: Pick<Elements.Mention, 'effect'>) => string
}

export interface MentionProps {
  username: string
  id: number
  profile?: string
  hasNap?: boolean
  onClick?: (id: number) => void
}
