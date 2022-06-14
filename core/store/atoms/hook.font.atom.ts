import { SETTINGS } from '@/constants/settings.constant'
import * as storeTypes from '@/constants/store-keys.constants'
import { Font } from '@/hooks/use-font/lib/types'
import { atom } from 'recoil'

export const fontState = atom<Font>({
  key: storeTypes.HOOK__USER_FONT___FONT,
  default: SETTINGS.defaultFont,
})
