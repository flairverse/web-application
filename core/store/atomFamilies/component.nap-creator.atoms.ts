import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily, SerializableParam } from 'recoil'
import * as Lib from '../lib'

export const showMoreOptions = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.showMoreOptions,
  default: false,
})

export const activeOption = atomFamily<NapCreatorUIKitLib.T.Options | 'none', SerializableParam>({
  key: AtomFamilies.activeOption,
  default: 'none',
})

export const activeItemID = atomFamily<string | null, SerializableParam>({
  key: AtomFamilies.activeItemID,
  default: null,
})

export const postsPickUp = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.postsPickUp,
  default: false,
})

export const mentionPickUp = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.mentionPickUp,
  default: false,
})

export const giphyPickUp = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.giphyPickUp,
  default: false,
})

export const mentionPopupVisibility = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.mentionPopupVisibility,
  default: false,
})

export const editLinkPopupVisibility = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.editLinkPopupVisibility,
  default: false,
})

export const editLinkPopupLinkTextAndRef = atomFamily<Lib.T.EditLinkPopupLinkTextAndRef, SerializableParam>({
  key: AtomFamilies.editLinkPopupLinkTextAndRef,
  default: Lib.CO.EDIT_LINK_POPUP_LINK_TEXT_AND_REF_DEFAULTS,
})
