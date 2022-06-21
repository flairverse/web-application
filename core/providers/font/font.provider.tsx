import { useFont } from '@/hooks/use-font'
import { FC } from 'react'

export const FontProvider: FC = ({ children }) => {
  useFont()
  return <>{children}</>
}
