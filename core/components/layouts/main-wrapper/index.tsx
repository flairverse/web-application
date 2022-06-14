import { FC } from 'react'
import { BottomNavBar } from '../bottom-nav-bar'
import { Footer } from '../footer'
import { TopNavBarLayout } from '../top-nav-bar'
import * as Lib from './lib'

export const MainWrapper: FC = ({ children }) => {
  return (
    <Lib.S.Container>
      <TopNavBarLayout />

      <BottomNavBar />

      <div className="container">{children}</div>

      <Footer />
    </Lib.S.Container>
  )
}
