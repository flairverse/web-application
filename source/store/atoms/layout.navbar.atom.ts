import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'

export const searchQuery = atom({
  key: storeTypes.LAYOUT_NAVBAR_SEARCH_QUERY,
  default: '',
})

export const searchBoxFocused = atom({
  key: storeTypes.LAYOUT_NAVBAR_SEARCH_BOX_FOCUSED,
  default: false,
})
