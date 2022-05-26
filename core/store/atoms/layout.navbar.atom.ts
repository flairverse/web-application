import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'
import * as Lib from '../lib'

export const searchQuery = atom({
  key: storeTypes.LAYOUT__NAVBAR___SEARCH_QUERY,
  default: '',
})

export const searchBoxFocused = atom({
  key: storeTypes.LAYOUT__NAVBAR___SEARCH_BOX_FOCUSED,
  default: false,
})

export const bottomNavbarActiveItem = atom<Lib.T.BottomNavbarActiveItem>({
  key: storeTypes.LAYOUT__NAVBAR___ACTIVE_ITEM,
  default: 'home',
})
