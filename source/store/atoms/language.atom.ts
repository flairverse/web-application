import { atom } from 'recoil'
import { LANGUAGES_TYPE } from '@/constants/languages'
import * as storeTypes from '@/constants/store-types'

export const languageState = atom({
  key: storeTypes.LANGUAGE,
  default: <LANGUAGES_TYPE>'en',
})
