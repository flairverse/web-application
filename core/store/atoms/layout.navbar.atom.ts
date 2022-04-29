import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'
import * as Lib from '../lib'

export const searchQuery = atom({
  key: storeTypes.LAYOUT_NAVBAR_SEARCH_QUERY,
  default: '',
})

export const searchBoxFocused = atom({
  key: storeTypes.LAYOUT_NAVBAR_SEARCH_BOX_FOCUSED,
  default: false,
})

export const bottomNavbarActiveItem = atom<Lib.T.BottomNavbarActiveItem>({
  key: storeTypes.BOTTOM_NAVBAR_ACTIVE_ITEM,
  default: 'home',
})
