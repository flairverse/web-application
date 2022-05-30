import { StoreKeys } from '@/types/recoil.type'
import { Dispatch } from 'react'

export interface TimePickerProps {
  visibilityStoreKey: StoreKeys
  valueStoreKey: StoreKeys
  minimumDate: Date
  maximumDate: Date
  onConfirm?: (confirmedValue: Date) => void
  closeOnConfirm?: boolean
}
export interface UseTimePickerArgs extends Pick<TimePickerProps, 'visibilityStoreKey' | 'minimumDate' | 'valueStoreKey'> {
  setShowContent: Dispatch<boolean>
}

export interface DatePickerProps extends Pick<TimePickerProps, 'valueStoreKey' | 'minimumDate' | 'maximumDate'> {}
export interface UseDatePickerArgs extends Pick<DatePickerProps, 'minimumDate' | 'valueStoreKey' | 'maximumDate'> {}

export interface DistanceProps extends Pick<TimePickerProps, 'valueStoreKey' | 'minimumDate'> {}
export interface UseDistanceArgs extends Pick<DistanceProps, 'valueStoreKey' | 'minimumDate'> {}

export interface ConfirmButtonProps extends Pick<TimePickerProps, 'onConfirm' | 'valueStoreKey' | 'minimumDate' | 'closeOnConfirm'> {
  closeModal: () => void
}
export interface UseConfirmButton extends Pick<ConfirmButtonProps, 'onConfirm' | 'valueStoreKey' | 'minimumDate' | 'closeOnConfirm' | 'closeModal'> {}

export interface FindersArgs {
  hour?: number
  minute?: number
}
export interface FindEarliestArgs extends FindersArgs, Pick<TimePickerProps, 'minimumDate'> {}
export interface FindLatestArgs extends FindersArgs, Pick<TimePickerProps, 'maximumDate'> {}
