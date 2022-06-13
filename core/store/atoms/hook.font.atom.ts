import { atom } from 'recoil'
import { Font } from '@/hooks/use-font/lib/types'
import { SETTINGS } from '@/constants/settings.constant'
import * as storeTypes from '@/constants/store-keys.constants'

export const fontState = atom<Font>({
  key: storeTypes.HOOK__USER_FONT___FONT,
  default: SETTINGS.defaultFont,
})
