import { FC } from 'react'
import { NavBarLayout } from '../nav-bar'
import { Footer } from '../footer'
import * as Lib from './lib'

export const MainWrapper: FC = ({ children }) => {
  return (
    <Lib.S.Container>
      <NavBarLayout />

      <div className="container">{children}</div>

      <Footer />
    </Lib.S.Container>
  )
}
