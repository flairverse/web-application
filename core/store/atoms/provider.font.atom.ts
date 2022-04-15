import { atom } from 'recoil'
import { Font } from '@/hooks/use-font/lib/types'
import * as storeTypes from '@/constants/store-types.constants'
import { SETTINGS } from '@/constants/settings.constant'

export const fontState = atom({
  key: storeTypes.FONT,
  default: <Font>SETTINGS.defaultFont,
})
