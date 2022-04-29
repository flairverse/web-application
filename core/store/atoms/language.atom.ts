import { atom } from 'recoil'
import { LANGUAGES_TYPE } from '@/constants/languages.constants'
import * as storeTypes from '@/constants/store-types.constants'

export const languageState = atom<LANGUAGES_TYPE>({
  key: storeTypes.LANGUAGE,
  default: 'en',
})
