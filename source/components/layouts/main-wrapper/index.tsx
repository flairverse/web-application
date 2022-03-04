import { FC } from 'react'
import { NavBarLayout } from '../nav-bar'

export const MainWrapper: FC = ({ children }) => {
  return (
    <>
      <NavBarLayout />
      wrapper
      {children}
    </>
  )
}
