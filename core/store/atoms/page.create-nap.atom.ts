import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'
import { Options } from '@/components/ui-kit/nap/creator/lib/types'

export const showMoreOptions = atom<boolean>({
  key: storeTypes.SHOW_MORE_OPTIONS_IN_CREATE_NAP_PAGE,
  default: false,
})

export const activeOption = atom<Options | 'none'>({
  key: storeTypes.IN_CREATE_NAP_PAGE_ACTIVE_OPTION,
  default: 'none',
})

export const activeItemID = atom<string | null>({
  key: storeTypes.IN_CREATE_NAP_PAGE_ACTIVE_ITEM_ID,
  default: null,
})

export const postsPickUp = atom<boolean>({
  key: storeTypes.IN_CREATE_NAP_PAGE_POSTS_PICK_UP_VISIBILITY,
  default: false,
})

export const mentionPickUp = atom<boolean>({
  key: storeTypes.IN_CREATE_NAP_PAGE_MENTION_PICK_UP_VISIBILITY,
  default: false,
})

export const gifPopupVisibility = atom<boolean>({
  key: storeTypes.IN_CREATE_NAP_PAGE_GIF_POPUP_VISIBILITY,
  default: false,
})

export const mentionPopupVisibility = atom<boolean>({
  key: storeTypes.IN_CREATE_NAP_PAGE_MENTION_POPUP_VISIBILITY,
  default: false,
})
