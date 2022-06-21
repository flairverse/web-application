import { IconType } from 'react-icons'

export interface DevtoolsProviderProps {
  testMode?: boolean
}

export interface FloatButtonProps {
  position: [number, number]
}

export interface DevtoolProps extends FloatButtonProps {
  Icon: IconType
  name: string
  current: string
  testId: string
}
