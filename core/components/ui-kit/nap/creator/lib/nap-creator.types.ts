import { DOMHelperLib } from '@/helpers/DOM'
import { Range } from '@/types/enumerable'
import { StoreKeys } from '@/types/recoil.type'
import { Topic } from '@/types/topics'
import { RefObject } from 'react'
import { IconType } from 'react-icons/lib'
import * as Lib from '.'

export interface NapCreatorStoreKeys {
  activeOption: StoreKeys
  activeItemID: StoreKeys
  showMoreOptions: StoreKeys
  popups: {
    post: StoreKeys
    mention: StoreKeys
    giphy: StoreKeys
    timePicker: StoreKeys
    answerQuestion: StoreKeys
    editLink: StoreKeys
    editLinkDetail: StoreKeys
  }
  searchQueries: {
    giphy: StoreKeys
  }
}

export interface NapCreatorProps {
  storeKeys: NapCreatorStoreKeys
}

export interface UseBoardCompileDown extends Pick<NapCreatorProps, 'storeKeys'> {
  boardRef: RefObject<HTMLDivElement>
}

export interface UseGiphyPickUp extends Pick<NapCreatorProps, 'storeKeys'>, Pick<PostsPickUpProps, 'boardRef'> {}

export interface ItemsProps extends Pick<NapCreatorProps, 'storeKeys'> {
  onOptionsClick: (key: Options) => void
  boardRef: RefObject<HTMLDivElement>
  imageInputRef: RefObject<HTMLInputElement>
}

export interface UseDefinedItems extends Pick<NapCreatorProps, 'storeKeys'> {}

export interface ItemsShadowingProps {
  active: boolean
}

export interface ToolsProps extends Pick<ItemsProps, 'boardRef' | 'imageInputRef'>, Pick<NapCreatorProps, 'storeKeys'> {
  selectedOption: Options | 'none'
}

export interface ReminderTimePickerProps extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface ToolsForInserters extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}
export interface ToolsForImageInserter extends ToolsForInserters, Pick<ToolsProps, 'imageInputRef'> {}

export type Options = typeof Lib.CO.OPTIONS[number]
export type ElementalOptions = typeof Lib.CO.ELEMENTAL_OPTIONS[number]

export type Item = {
  Icon: IconType
  title: string
  key: Options
  limit: number
}

export interface UseImagePickerArgs extends Pick<ItemsProps, 'imageInputRef' | 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface ToolboxProps extends Pick<ItemsProps, 'boardRef' | 'imageInputRef'>, Pick<NapCreatorProps, 'storeKeys'> {
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
export type PostTools = 'post-effect' | 'post-rotation'
export type MentionTools = 'add-mention' | 'mention-effect' | 'mention-rotation'
export type QuestionTools = 'question-effect' | 'question-rotation' | 'question-hint'
export type QuizTools = 'quiz-effect' | 'quiz-rotation' | 'quiz-hint'
export type ReminderTools = 'reminder-effect' | 'reminder-rotation'
export type GifTools = 'add-gif' | 'gif-effect' | 'gif-rotation' | 'gif-size'
export type ImageTools = 'add-image' | 'image-effect' | 'image-size' | 'image-rotation'
export type LinkTools = 'add-link' | 'link-font-size' | 'link-effect' | 'link-rotation'
export type Tool = 'none' | TextTools | PostTools | MentionTools | QuestionTools | QuizTools | ReminderTools | GifTools | ImageTools | LinkTools

export type TextEffects = typeof Lib.CO.EFFECTS.TEXT[number]
export type PostEffects = typeof Lib.CO.EFFECTS.POST[number]
export type MentionEffects = typeof Lib.CO.EFFECTS.MENTION[number]
export type QuestionEffects = typeof Lib.CO.EFFECTS.QUESTION[number]
export type QuizEffects = typeof Lib.CO.EFFECTS.QUIZ[number]
export type ReminderEffects = typeof Lib.CO.EFFECTS.REMINDER[number]
export type ImageEffects = typeof Lib.CO.EFFECTS.IMAGE[number]
export type GifEffects = typeof Lib.CO.EFFECTS.GIF[number]
export type LinkEffects = typeof Lib.CO.EFFECTS.LINK[number]
export type AllEffects = TextEffects | PostEffects | MentionEffects | QuestionEffects | QuizEffects | ReminderEffects | ImageEffects | LinkEffects

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
  export type ElementRotation = typeof Lib.CO.ELEMENT_ROTATIONS[number]

  export interface Text extends BaseElement<TextEffects, 'text'> {
    text: string
    fontSize: string
  }

  export interface Post extends BaseElement<PostEffects, 'post'> {
    user: {
      fullName: string
      job: string
      profile: string
      seen: boolean
      hasNap: boolean
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
    hasNap: boolean
    seen: boolean
    followers: number
    subscribes: number
  }

  export interface Question extends BaseElement<QuestionEffects, 'question'> {
    question: string
    hint: string
    hintEnabled: boolean
    questionerUser: {
      profile: string
      hasNap: boolean
      seen: boolean
    }
  }

  export interface Quiz extends BaseElement<QuizEffects, 'quiz'> {
    questionText: string
    hintText: string
    hintTextEnabled: boolean
    answers: string[]
    correctAnswer: number
    questioner: {
      profile: string
      hasNap: boolean
      seen: boolean
    }
  }

  export interface Reminder extends BaseElement<ReminderEffects, 'reminder'> {
    reminderName: string
    endTime: string
  }

  export interface Gif extends BaseElement<GifEffects, 'gif'> {
    gifURL: string
    gifWidth: string
  }

  export interface Image extends BaseElement<ImageEffects, 'image'> {
    imageURL: string
    imageWidth: string
  }

  export interface Link extends BaseElement<LinkEffects, 'link'> {
    link: string
    linkFontSize: string
    href: string
  }

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
    & Partial<Omit<Link, 'type' | 'effect'>>

  export type AllOr = Text | Image | Gif | Question | Reminder | Quiz | Post | Mention | Link
}

export type ElementFrameActionTypes = 'delete' | 'editInnerText' | 'changeReminderValue' | 'editLinkRef' | 'noSyncDelete'

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

export interface PostsPickUpProps extends Pick<NapCreatorProps, 'storeKeys'> {
  boardRef: RefObject<HTMLDivElement>
}

export interface MentionPickUpProps extends Pick<NapCreatorProps, 'storeKeys'> {
  boardRef: RefObject<HTMLDivElement>
}
export interface GifPickUpProps extends Pick<NapCreatorProps, 'storeKeys'> {
  boardRef: RefObject<HTMLDivElement>
}

export type ItemsDOMStringComponents = {
  profile: ({}: Pick<Elements.Mention, 'profile' | 'hasNap' | 'seen'> & {
    size?: Range<1, 11>
  }) => string

  imageBaseItem: (args: { dataUrl: string; width: string }, type: 'image' | 'gif') => string
}

export type DummyTexts = ReturnType<typeof Lib.H.useDummyTexts>

export type ItemsDOMStringGenerators = {
  text: (innerText: string, dummyTexts: DummyTexts) => string
  post: (args: Pick<Elements.Post, 'post' | 'user'>, dummyTexts: DummyTexts, compileOptions?: CompileDownOptions) => string
  mention: (
    args: Pick<Elements.Mention, 'fullName' | 'job' | 'profile' | 'username' | 'userID' | 'hasNap' | 'seen' | 'followers' | 'subscribes'>,
    dummyTexts: DummyTexts,
    compileOptions?: CompileDownOptions,
  ) => string
  question: (
    args: Pick<Elements.Question, 'hint' | 'question' | 'questionerUser' | 'hintEnabled'>,
    dummyTexts: DummyTexts,
    compileOptions?: CompileDownOptions,
  ) => string
  quiz: (
    args: Pick<Elements.Quiz, 'answers' | 'correctAnswer' | 'hintText' | 'questionText' | 'questioner' | 'hintTextEnabled'>,
    dummyTexts: DummyTexts,
    compileOptions?: CompileDownOptions,
  ) => string
  reminder: (args: Pick<Elements.Reminder, 'endTime' | 'reminderName'>, dummyTexts: DummyTexts, compileOptions?: CompileDownOptions) => string
  gif: (args: Pick<Elements.Gif, 'gifURL' | 'gifWidth'>, dummyTexts: DummyTexts) => string
  image: (args: Pick<Elements.Image, 'imageURL' | 'imageWidth'>, dummyTexts: DummyTexts) => string
  link: (innerText: string, href: string, dummyTexts: DummyTexts, compileOptions?: CompileDownOptions) => string
}

export type ItemsDOMStringGeneratorsLogics = {
  post: (
    postId: number,
    compileOptions?: CompileDownOptions,
  ) => {
    articleNode: string
  }

  mention: (
    username: string,
    compileOptions?: CompileDownOptions,
  ) => {
    topLevelNode: string
  }

  scaleOutIn: (compileOptions?: CompileDownOptions) => string
}

export interface MentionProps {
  username: string
  id: number
  profile?: string
  hasNap?: boolean
  onClick?: (id: number) => void
}

export interface UseInsertersArgs extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface UseNapCreatorArgs extends Pick<ItemsProps, 'boardRef'>, Pick<ItemsProps, 'imageInputRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface UseUpdatersArgs extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface UseReminderTimePicker extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface EditLinkHrefPopupProps extends Pick<ItemsProps, 'boardRef'>, Pick<NapCreatorProps, 'storeKeys'> {}

export interface CompileSharedDownArgs extends Elements.BaseElement, Pick<DOMHelperLib.T.MakeElementDraggableArgs, 'blackList'> {
  node: HTMLElement
  actionTypes?: ElementFrameActionTypes[]
  effectHolders?: string[]
  sync?: boolean
}

export interface CompileTextBasedDownArgs extends Omit<CompileSharedDownArgs, 'actionTypes' | 'effectHolders' | 'sync' | 'blackList'> {
  additionalActionTypes?: ElementFrameActionTypes[]
  fontSize: string
}

export interface ValidatorResult {
  isValid: boolean
  reasons: ValidatorResultReason[]
}

export type ValidatorResultReason = {
  error: Lib.E.ValidatorErrorEnum
  elementID: string
}

export type BoardSize = {
  width: number
  height: number
}

export interface CompileDownOptions {
  readonly?: boolean
  scale?: number
}
