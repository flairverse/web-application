import { FC } from 'react'
import * as Lib from './lib'

export const TopNavBarLayout: FC = ({}) => {
  const { onGapDBLClick } = Lib.H.useNavbarLayout()

  return (
    <>
      <Lib.S.Backdrop />

      <Lib.S.TopNavBarContainer data-testid="navbarComponent">
        {/* Flairverse Logo */}
        <Lib.C.Logo />

        {/* Search box */}
        <Lib.C.SearchInput />

        {/* middle gap with ability to double click to scroll to the top */}
        <div onDoubleClick={onGapDBLClick} className="gap" />

        {/* (sign in & create account || create post) buttons */}
        <Lib.C.Buttons />

        {/* user profile */}
        <Lib.C.Profile username="qafoori" />

        {/* create new post button in mobile view (min 768px) */}
        <Lib.C.AdderButton />
      </Lib.S.TopNavBarContainer>
    </>
  )
}
