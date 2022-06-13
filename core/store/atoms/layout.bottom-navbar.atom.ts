import { atom } from 'recoil'
import * as Lib from '../lib'
import * as storeKeys from '@/constants/store-keys.constants'

export const activeItem = atom<Lib.T.BottomNavbarActiveItem>({
  key: storeKeys.LAYOUT__BOTTOM_NAVBAR___ACTIVE_ITEM,
  default: 'home',
})
