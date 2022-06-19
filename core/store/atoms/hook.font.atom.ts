import { Setting } from '@/constants/settings.constant'
import * as storeTypes from '@/constants/store-keys.constants'
import { UseFontHookLib } from '@/hooks/use-font'
import { atom } from 'recoil'

export const fontState = atom<UseFontHookLib.T.Font>({
  key: storeTypes.HOOK__USER_FONT___FONT,
  default: Setting.use.defaultFont,
})
