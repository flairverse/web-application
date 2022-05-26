import { StoreKeys } from '@/types/recoil.type'
import { RefObject } from 'react'
import { DateDuration } from '@/helpers/dates/lib/types'
import { CreateArrayFromRangeFixesType } from '@/helpers/number/lib/types'

export interface TimePickerProps {
  visibilityStoreKey: StoreKeys
  valuesStoreKey: StoreKeys
  columnsStoreKeys: {
    yearsStoreKey: StoreKeys
    monthsStoreKey: StoreKeys
    daysStoreKey: StoreKeys
    hoursStoreKey: StoreKeys
    minutesStoreKey: StoreKeys
  }
  minimumDate: Date
  maximumDate: Date
}

export interface UseTimePickerArgs extends TimePickerProps {}

export type ColumnKey = keyof DateDuration

export interface ColumnProps extends Pick<TimePickerProps, 'valuesStoreKey' | 'minimumDate' | 'maximumDate' | 'columnsStoreKeys'> {
  title: string
  prefixes: Prefixes
  rangeStoreKey: StoreKeys
  type: ColumnKey
  ranges: Ranges
}

export interface InfoProps extends Pick<TimePickerProps, 'valuesStoreKey' | 'minimumDate'> {}

export type Ranges = {
  year: Range
  month: Range
  day: Range
  hour: Range
  minute: Range
}

export type Prefixes = {
  year?: CreateArrayFromRangeFixesType
  month?: CreateArrayFromRangeFixesType
  day?: CreateArrayFromRangeFixesType
  hour?: CreateArrayFromRangeFixesType
  minute?: CreateArrayFromRangeFixesType
}

export type Range = [number, number]

export interface UseColumnArgs extends Pick<ColumnProps, 'ranges' | 'prefixes' | 'valuesStoreKey' | 'minimumDate' | 'rangeStoreKey' | 'maximumDate' | 'type' | 'columnsStoreKeys'> {
  scrollableRef: RefObject<HTMLUListElement>
}

export type DateDetail = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
}
