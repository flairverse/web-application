import Link from 'next/link'
import { FC } from 'react'
import * as Lib from './lib'

export const BottomNavBar: FC = () => {
  const { bottomNavBarItems } = Lib.H.useBottomNavBar()

  return (
    <Lib.S.BottomNavBarContainer>
      <ul>
        {bottomNavBarItems.map(({ filledIcon, outlinedIcon, active, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{active ? filledIcon : outlinedIcon}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Lib.S.BottomNavBarContainer>
  )
}
