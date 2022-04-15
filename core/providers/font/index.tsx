import { FC } from 'react'
import { useFont } from '@/hooks/use-font'

export const FontProvider: FC = ({ children }) => {
  useFont()
  return <>{children}</>
}
