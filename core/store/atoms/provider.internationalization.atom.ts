import { atom } from 'recoil'
import { LANGUAGES_TYPE } from '@/constants/languages.constants'
import * as storeKeys from '@/constants/store-keys.constants'

export const language = atom<LANGUAGES_TYPE>({
  key: storeKeys.PROVIDER__INTERNATIONALIZATION___LANGUAGE,
  default: 'en',
})
