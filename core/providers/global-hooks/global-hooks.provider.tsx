import { useAutoBreakpoint } from '@/hooks/use-auto-breakpoint'
import { FC } from 'react'

export const GlobalHooksProvider: FC = ({ children }) => {
  useAutoBreakpoint()

  return <>{children}</>
}
