import { atom } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'
import { Options } from '@/components/ui-kit/nap/creator/lib/types'

export const showMoreOptions = atom<boolean>({
  key: storeTypes.PAGE__CREATE_NAP___SHOW_MORE_OPTIONS,
  default: false,
})

export const activeOption = atom<Options | 'none'>({
  key: storeTypes.PAGE__CREATE_NAP___ACTIVE_OPTION,
  default: 'none',
})

export const activeItemID = atom<string | null>({
  key: storeTypes.PAGE__CREATE_NAP___ACTIVE_ITEM_ID,
  default: null,
})

export const postsPickUp = atom<boolean>({
  key: storeTypes.PAGE__CREATE_NAP___POSTS_PICK_UP_VISIBILITY,
  default: false,
})

export const mentionPickUp = atom<boolean>({
  key: storeTypes.PAGE__CREATE_NAP___MENTION_PICK_UP_VISIBILITY,
  default: false,
})

export const gifPopupVisibility = atom<boolean>({
  key: storeTypes.PAGE__CREATE_NAP___GIF_POPUP_VISIBILITY,
  default: false,
})

export const mentionPopupVisibility = atom<boolean>({
  key: storeTypes.PAGE__CREATE_NAP___MENTION_POPUP_VISIBILITY,
  default: false,
})
