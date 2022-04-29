import { FC } from 'react'
import * as Lib from './lib'

export const InternationalizationProvider: FC = ({ children }) => {
  const { mounted } = Lib.H.useInternationalization()
  return <>{mounted && children}</>
}
