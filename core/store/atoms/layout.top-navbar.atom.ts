import * as storeKeys from '@/constants/store-keys.constants'
import { atom } from 'recoil'

export const searchQuery = atom({
  key: storeKeys.LAYOUT__NAVBAR___SEARCH_QUERY,
  default: '',
})

export const searchBoxFocused = atom({
  key: storeKeys.LAYOUT__NAVBAR___SEARCH_BOX_FOCUSED,
  default: false,
})
