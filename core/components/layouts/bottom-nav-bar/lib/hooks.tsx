import * as Lib from '.'
import { RiSearch2Fill, RiSearch2Line, RiUserSmileLine, RiUserSmileFill, RiHomeSmile2Fill, RiHomeSmile2Line } from 'react-icons/ri'
import { BsChatSquareFill, BsChatSquare, BsPlusSquareFill, BsPlusSquare } from 'react-icons/bs'
import { IconBaseProps } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { layoutBottomNavbarAtoms } from '@/store/atoms'

export const useBottomNavBar = () => {
  const bottomNavBarActiveItem = useRecoilValue(layoutBottomNavbarAtoms.activeItem)
  const username = 'qafoori'

  const iconsProps: IconBaseProps = {
    size: 25,
    color: 'var(--layer-2-text-3)',
  }

  const bottomNavBarItems: Lib.T.BottomNavBarItem[] = [
    {
      href: '/',
      outlinedIcon: <RiHomeSmile2Line {...iconsProps} />,
      filledIcon: <RiHomeSmile2Fill {...iconsProps} />,
      active: bottomNavBarActiveItem === 'home',
    },
    {
      href: '/explore/posts',
      outlinedIcon: <RiSearch2Line {...iconsProps} />,
      filledIcon: <RiSearch2Fill {...iconsProps} />,
      active: bottomNavBarActiveItem === 'explore',
    },
    {
      href: '/create-new/post',
      outlinedIcon: <BsPlusSquare {...iconsProps} />,
      filledIcon: <BsPlusSquareFill {...iconsProps} />,
      active: bottomNavBarActiveItem === 'create-new-post',
    },
    {
      href: `/${username}/messaging`,
      outlinedIcon: <BsChatSquare {...iconsProps} />,
      filledIcon: <BsChatSquareFill {...iconsProps} />,
      active: bottomNavBarActiveItem === 'messaging',
    },
    {
      href: `/${username}`,
      outlinedIcon: <RiUserSmileLine {...iconsProps} />,
      filledIcon: <RiUserSmileFill {...iconsProps} />,
      active: bottomNavBarActiveItem === 'profile',
    },
  ]

  return { bottomNavBarItems }
}
