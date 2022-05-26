import { atom } from 'recoil'
import { RecoilWithDynamicKey } from '@/types/recoil.type'
import * as Lib from '../lib'

export const pickUpFiltersVisibility: RecoilWithDynamicKey<boolean> = (key, defaultValue) => {
  return atom<boolean>({
    key,
    default: defaultValue || false,
  })
}

export const pickUpSearchQuery: RecoilWithDynamicKey<string> = (key, defaultValue) => {
  return atom<string>({
    key,
    default: defaultValue || '',
  })
}

export const timePickerPopupVisibility: RecoilWithDynamicKey<boolean> = (key, defaultValue) => {
  return atom<boolean>({
    key,
    default: defaultValue || true,
  })
}
