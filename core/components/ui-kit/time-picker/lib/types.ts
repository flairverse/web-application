import { StoreKeys } from '@/types/recoil.type'

export interface TimePickerProps {
  visibilityStoreKey: StoreKeys
  minimumDate: Date
  maximumDate: Date
}

export interface UseTimePickerArgs extends Pick<TimePickerProps, 'visibilityStoreKey' | 'minimumDate' | 'maximumDate'> {}
