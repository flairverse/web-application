import { StoreKeys } from '@/types/recoil.type'

export type TimeTarget = 'hour' | 'minute'
export type TimeAction = 'increase' | 'decrease'
export type DateTarget = 'year' | 'month' | 'day'

/**
 *
 *
 * DateTimePicker
 */
export interface DateTimePickerProps {
  storeKeys: {
    visibility: StoreKeys
    minute: StoreKeys
    hour: StoreKeys
    day: StoreKeys
    month: StoreKeys
    year: StoreKeys
    activeLayer: StoreKeys
    minimumDate: StoreKeys
  }
  minimumDate: Date
  maximumDate: Date
  onConfirm?: (confirmedValue: Date) => void
  closeOnConfirm?: boolean
  dayEndIsMax?: boolean
  autoHideEarliest?: boolean
  updateMinimumDateEveryMinutes?: boolean
  onMinimumDateUpdate?: (newMinimumDate: Date) => void
}
export interface UseDateTimePickerArgs
  extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax' | 'updateMinimumDateEveryMinutes' | 'onMinimumDateUpdate'> {
  minimumDateProp: Date
}

/**
 *
 *
 * TimePicker
 */
export interface TimePickerProps extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}

/**
 *
 *
 * TimePickerInput
 */
export interface TimePickerInputProps extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {
  target: TimeTarget
}
export interface UseTimePickerInput extends Pick<TimePickerInputProps, 'storeKeys' | 'target' | 'maximumDate' | 'dayEndIsMax'> {}

/**
 *
 *
 * TimePickerButton
 */
export interface TimePickerButtonProps extends Pick<TimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {
  target: TimeTarget
  action: TimeAction
}
export interface UseTimePickerButtonArgs extends Pick<TimePickerButtonProps, 'target' | 'action' | 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}

/**
 *
 *
 * UseTimeValues
 */
export interface UseCalculateTimeValueArgs extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}
export interface UseMinimumValues extends Pick<DateTimePickerProps, 'storeKeys'> {}
export interface UseMaximumValues extends Pick<DateTimePickerProps, 'maximumDate' | 'dayEndIsMax'> {}
export interface UseFixWrongChosenDate extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}
export interface UseDisabledDays extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}
export interface UseDisabledMonths extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}

/**
 *
 *
 * DatePicker
 */
export interface DatePickerProps extends Pick<DateTimePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}

/**
 *
 *
 * DatePickerItem
 */
export interface DatePickerItemProps extends Pick<DatePickerProps, 'storeKeys' | 'maximumDate'> {
  target: DateTarget
}
export interface UseDatePickerItemsArgs extends Pick<DatePickerItemProps, 'target' | 'storeKeys'> {}

/**
 *
 *
 * Year
 */
export interface YearsProps extends Pick<DatePickerProps, 'storeKeys' | 'maximumDate'> {}
export interface UseYearsArgs extends Pick<YearsProps, 'storeKeys' | 'maximumDate'> {}

/**
 *
 *
 * Months
 */
export interface MonthsProps extends Pick<DatePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}
export interface UseMonthsArgs extends Pick<MonthsProps, 'storeKeys'> {}

/**
 *
 *
 * Days
 */
export interface DaysProps extends Pick<DatePickerProps, 'storeKeys' | 'maximumDate' | 'dayEndIsMax'> {}
export interface UseDaysArgs extends Pick<DaysProps, 'storeKeys'> {}

/**
 *
 *
 *
 * Actions
 */
export interface Actions extends Pick<DateTimePickerProps, 'onConfirm' | 'closeOnConfirm' | 'storeKeys' | 'autoHideEarliest'> {}
export interface UseActionsArgs extends Pick<Actions, 'onConfirm' | 'closeOnConfirm' | 'storeKeys' | 'autoHideEarliest'> {}
