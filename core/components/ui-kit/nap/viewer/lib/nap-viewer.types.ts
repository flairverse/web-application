import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { NapModel } from '@/models/nap.model'
import { StoreKeys } from '@/types/recoil.type'
import { RefObject } from 'react'

export type NavigationType = 'forward' | 'backward'

export interface WithNapCreatorStoreKeys {
  creatorStoreKeys: NapCreatorUIKitLib.T.NapCreatorStoreKeys
}

export interface NapViewerProps extends WithNapCreatorStoreKeys {
  storeKeys: {
    napIndex: string
    napGroupIndex: StoreKeys
    visibility: StoreKeys
    modals: {
      answerQuestion: StoreKeys
    }
  }
}

export interface UseNapViewer extends Pick<NapViewerProps, 'storeKeys'> {}

export interface NapGroupProps extends Pick<NapViewerProps, 'storeKeys'>, WithNapCreatorStoreKeys {
  naps: NapModel[]
  active: boolean
  beforeActive: boolean
  afterActive: boolean
  onAchieveAll: () => void
  onAchieveEnd: () => void
  onAchieveStart: () => void
  close: () => void
}

export interface UseNapNavigation extends Pick<NapGroupProps, 'onAchieveEnd' | 'onAchieveStart' | 'naps'>, Pick<NapViewerProps, 'storeKeys'> {}

export interface NavigateButtonProps {
  role: NavigationType
  onClick: () => void
  enabled: boolean
}

export interface NapProps extends NapModel, WithNapCreatorStoreKeys {
  napLength: number
  onForward: () => void
  onBackward: () => void
  close: () => void
}

export interface CompiledDownNapProps extends NapModel, WithNapCreatorStoreKeys {}

export interface UseCompiledDownNapProps extends CompiledDownNapProps {
  containerRef: RefObject<HTMLDivElement>
}

export interface AnswerQuestionModalProps extends Pick<NapViewerProps, 'storeKeys'> {}

export type MoreOptionKeys = 'report-abuse' | 'send-to-friends' | 'share-in-another-way'
