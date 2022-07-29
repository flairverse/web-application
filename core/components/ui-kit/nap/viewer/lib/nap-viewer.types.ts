import { NapModel } from '@/models/nap.model'
import { StoreKeys } from '@/types/recoil.type'
import { RefObject } from 'react'

export type NavigationType = 'forward' | 'backward'

export interface NapViewerProps {
  storeKeys: {
    napIndex: string
    modals: {
      answerQuestion: StoreKeys
    }
  }
}

export interface NapGroupProps extends Pick<NapViewerProps, 'storeKeys'> {
  naps: NapModel[]
  active: boolean
  beforeActive: boolean
  afterActive: boolean
  onAchieveEnd: () => void
  onAchieveStart: () => void
}

export interface NavigateButtonProps {
  role: NavigationType
  onClick: () => void
  enabled: boolean
}

export interface NapProps extends NapModel {
  napLength: number
  onForward: () => void
  onBackward: () => void
}

export interface CompiledDownNapProps extends NapModel {}

export interface UseCompiledDownNapProps extends CompiledDownNapProps {
  containerRef: RefObject<HTMLDivElement>
}

export interface AnswerQuestionModalProps extends Pick<NapViewerProps, 'storeKeys'> {}
