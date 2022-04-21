import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'
import * as Lib from '../lib'
import { Options } from 'pages/create-new/nap/lib/types'

export const showMoreOptions = atom<boolean>({
  key: storeTypes.SHOW_MORE_OPTIONS_IN_CREATE_NAP_PAGE,
  default: false,
})

export const activeOption = atom<Options | 'none'>({
  key: storeTypes.IN_CREATE_NAP_PAGE_ACTIVE_OPTION,
  default: 'none',
})
