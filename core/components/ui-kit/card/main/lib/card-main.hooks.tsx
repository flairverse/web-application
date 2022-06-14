import { MenuItem } from '@/components/ui-kit/menu/lib/menu.types'
import * as Lib from '.'

export const useCard = () => {
  const onMenuItemsClick = (key: Lib.T.MenuItemKeys) => {}

  const menuItems: MenuItem<Lib.T.MenuItemKeys>[] = [
    {
      title: 'Copy Link',
      key: 'copy-link',
      onClick: onMenuItemsClick,
    },
    {
      title: 'Report Abuse',
      key: 'report-abuse',
      onClick: onMenuItemsClick,
    },
    {
      title: 'Not Interested',
      key: 'not-interested',
      onClick: onMenuItemsClick,
    },
    {
      title: 'Send To Friends',
      key: 'send-to-friends',
      onClick: onMenuItemsClick,
    },
    {
      title: 'Share in Another Way',
      key: 'share-in-another-way',
      onClick: onMenuItemsClick,
    },
  ]

  return {
    menuItems,
  }
}
