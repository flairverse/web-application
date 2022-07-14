import { NapModel } from '@/models/nap.model'

export interface NapGroupProps {
  naps: NapModel[]
  active: boolean
  beforeActive: boolean
  afterActive: boolean
}

export interface NavigateButtonProps {
  role: 'forward' | 'backward'
  onClick: () => void
  enabled: boolean
}

export interface NapProps extends NapModel {
  shouldRender: boolean
}
