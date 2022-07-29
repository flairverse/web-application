import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { NumeralBreakpoints, StringifiedBreakpoints } from '@/types/style-variables.type'

export type BottomNavbarActiveItem = 'home' | 'explore' | 'create-new-post' | 'messaging' | 'profile'

export type EditLinkPopupLinkTextAndRef = {
  text: string
  ref: string
  frameID: string
}

export type CurrentWindowBreakpoint = {
  breakpoint: NumeralBreakpoints
  stringifiedBreakpoint: StringifiedBreakpoints
  windowWidth: number
}

export interface AnswerQuestionModal extends Pick<NapCreatorUIKitLib.T.Elements.Question, 'question' | 'hint' | 'questionerUser'> {
  visibility: boolean
}
