import * as storeKeys from '@/constants/store-keys.constants'
import { atom } from 'recoil'

export const napViewerVisibility = atom<boolean>({
  key: storeKeys.COMPONENT__NAP_VIEWER___NAP_VIEWER_POPUP_VISIBILITY,
  default: true,
})

export const napGroupIndex = atom<number>({
  key: storeKeys.COMPONENT__NAP_VIEWER___NAP_GROUP_INDEX,
  default: 0,
})
