import { LANGUAGES_TYPE } from '@/constants/languages.constants'
import * as storeKeys from '@/constants/store-keys.constants'
import { atom } from 'recoil'

export const language = atom<LANGUAGES_TYPE>({
  key: storeKeys.PROVIDER__INTERNATIONALIZATION___LANGUAGE,
  default: 'en',
})
