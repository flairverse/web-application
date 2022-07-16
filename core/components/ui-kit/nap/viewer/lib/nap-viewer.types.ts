import { NapModel } from '@/models/nap.model'
import { RefObject } from 'react'

export type NavigationType = 'forward' | 'backward'

export interface NapGroupProps {
  naps: NapModel[]
  active: boolean
  beforeActive: boolean
  afterActive: boolean
  onAchieveEnd: () => void
  onAchieveStart: () => void
  storeKeys: {
    napIndex: string
    compiledElements: string
  }
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
  storeKeys: {
    compiledElements: string
  }
}

export interface CompiledDownNapProps extends Pick<NapProps, 'storeKeys'>, NapModel {}

export interface UseCompiledDownNapProps extends CompiledDownNapProps {
  containerRef: RefObject<HTMLDivElement>
}
