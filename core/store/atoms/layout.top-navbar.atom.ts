import { atom } from 'recoil'
import * as storeKeys from '@/constants/store-keys.constants'

export const searchQuery = atom({
  key: storeKeys.LAYOUT__NAVBAR___SEARCH_QUERY,
  default: '',
})

export const searchBoxFocused = atom({
  key: storeKeys.LAYOUT__NAVBAR___SEARCH_BOX_FOCUSED,
  default: false,
})
