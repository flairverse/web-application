import { MenuItem } from '@/components/menu/lib/types'
import * as Lib from '.'
import { AiFillAccountBook } from 'react-icons/ai'

export const useCard = () => {
  const onMenuItemsClick = (key: Lib.T.MenuItemKeys) => {}

  const menuItems: MenuItem<Lib.T.MenuItemKeys>[] = [
    {
      title: 'Copy Link',
      key: 'copy-link',
      icon: <AiFillAccountBook />,
      onClick: onMenuItemsClick,
    },
    {
      title: 'Report Abuse',
      key: 'report-abuse',
      icon: <AiFillAccountBook />,
      onClick: onMenuItemsClick,
    },
    {
      title: 'Not Interested',
      key: 'not-interested',
      icon: <AiFillAccountBook />,
      onClick: onMenuItemsClick,
    },
    {
      title: 'Send To Friends',
      key: 'send-to-friends',
      icon: <AiFillAccountBook />,
      onClick: onMenuItemsClick,
    },
    {
      title: 'Share in Another Way',
      key: 'share-in-another-way',
      icon: <AiFillAccountBook />,
      onClick: onMenuItemsClick,
    },
  ]

  return {
    menuItems,
  }
}
