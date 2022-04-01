import { FC } from 'react'
import { useFont } from '@/hooks/font'

export const FontProvider: FC = ({ children }) => {
  useFont()
  return <>{children}</>
}
