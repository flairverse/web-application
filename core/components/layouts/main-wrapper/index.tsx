import { FC } from 'react'
import { TopNavBarLayout } from '../top-nav-bar'
import { BottomNavBar } from '../bottom-nav-bar'
import { Footer } from '../footer'
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
