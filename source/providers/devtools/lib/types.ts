import { FC } from 'react'
import { IconType } from 'react-icons'

export interface FloatButtonProps {
  position: [number, number]
}

export interface DevtoolProps extends FloatButtonProps {
  Icon: IconType
  name: string
  current: string
}
