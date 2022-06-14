import { atomFamily, SerializableParam } from 'recoil'
import { AtomFamilies } from '@/enums/store-families.enum'

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
