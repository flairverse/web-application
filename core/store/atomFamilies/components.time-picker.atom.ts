import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily } from 'recoil'

export const timePickerPopupVisibility = atomFamily({
  key: AtomFamilies.timePickerPopupVisibility,
  default: false,
})

// used in date time picker component to store: [minute, hour, day, month, year]
export const timePickerNumeralTimes = atomFamily({
  key: AtomFamilies.timePickerNumeralTimes,
  default: 0,
})

export const timePickerMinimumDate = atomFamily({
  key: AtomFamilies.timePickerMinimumDate,
  default: new Date(),
})
