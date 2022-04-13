import { atom } from 'recoil'
import { LANGUAGES_TYPE } from '@/constants/languages.constants'
import * as storeTypes from '@/constants/store-types.constants'

export const languageState = atom({
  key: storeTypes.LANGUAGE,
  default: <LANGUAGES_TYPE>'en',
})
