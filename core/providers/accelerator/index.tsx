import { FC } from 'react'
import * as Lib from './lib'

export const AcceleratorsProvider: FC = ({ children }) => {
  Lib.H.useAcceleratorsProvider()
  return <>{children}</>
}
