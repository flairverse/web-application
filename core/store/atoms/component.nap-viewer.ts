import * as storeKeys from '@/constants/store-keys.constants'
import { atom } from 'recoil'

export const napViewerVisibility = atom<boolean>({
  key: storeKeys.COMPONENT_NAP_VIEWER___NAP_VIEWER_POPUP_VISIBILITY,
  default: true,
})
