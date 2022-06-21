import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import * as storeKeys from '@/constants/store-keys.constants'
import { atom } from 'recoil'

export const showMoreOptions = atom<boolean>({
  key: storeKeys.PAGE__CREATE_NAP___SHOW_MORE_OPTIONS,
  default: false,
})

export const activeOption = atom<NapCreatorUIKitLib.T.Options | 'none'>({
  key: storeKeys.PAGE__CREATE_NAP___ACTIVE_OPTION,
  default: 'none',
})

export const activeItemID = atom<string | null>({
  key: storeKeys.PAGE__CREATE_NAP___ACTIVE_ITEM_ID,
  default: null,
})

export const postsPickUp = atom<boolean>({
  key: storeKeys.PAGE__CREATE_NAP___POSTS_PICK_UP_VISIBILITY,
  default: false,
})

export const mentionPickUp = atom<boolean>({
  key: storeKeys.PAGE__CREATE_NAP___MENTION_PICK_UP_VISIBILITY,
  default: false,
})
export const giphyPickUp = atom<boolean>({
  key: storeKeys.PAGE__CREATE_NAP___GIPHY_PICK_UP_VISIBILITY,
  default: false,
})

export const mentionPopupVisibility = atom<boolean>({
  key: storeKeys.PAGE__CREATE_NAP___MENTION_POPUP_VISIBILITY,
  default: false,
})
