import { atom } from 'recoil'
import { RecoilWithDynamicKey } from '@/types/recoil.type'
import * as Lib from '../lib'
import { Moment } from 'moment'
import { DateDetail } from '@/helpers/dates/lib/types'

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

export const timePickerValue: RecoilWithDynamicKey<DateDetail> = (key, defaultValue) => {
  return atom<DateDetail>({
    key,
    default: defaultValue || { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  })
}
