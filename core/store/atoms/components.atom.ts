import { atom } from 'recoil'
import { RecoilWithDynamicKey } from '@/types/recoil.type'
import { DateDuration } from '@/helpers/dates/lib/types'
import { CreateArrayFromRangeReturn } from '@/helpers/number/lib/types'
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

export const timePickerValues: RecoilWithDynamicKey<DateDuration> = (key, defaultValue) => {
  return atom<DateDuration>({
    key,
    default: defaultValue || { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  })
}

export const timePickerColumnsRange: RecoilWithDynamicKey<CreateArrayFromRangeReturn[]> = key => {
  return atom<CreateArrayFromRangeReturn[]>({
    key,
    default: [],
  })
}
