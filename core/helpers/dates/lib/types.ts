import { Duration } from 'date-fns'
import * as Lib from '.'

export type NumeralMonth = typeof Lib.CO.NUMERAL_MONTHS[number]

export type ShortMonths = typeof Lib.CO.SHORT_MONTHS[number]

export type LongMonth = typeof Lib.CO.LONG_MONTHS[number]

export type StringyMonth = ShortMonths | LongMonth

export type Month = NumeralMonth | ShortMonths | LongMonth

export type MonthTypes = 'short' | 'long' | 'number'

export type DateDetail = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second?: number
}

export type DateDetailOrNow = DateDetail | 'now'

export interface DifferenceArgs {
  start: DateDetailOrNow
  end: DateDetailOrNow
}

export type TriadDistanceI18n = {
  [key in keyof Required<Duration>]: string
}

export type TriadDistance = {
  key: keyof Duration
  title: string
  value: number
}

export type TriadDistanceArgs = {
  duration: Duration
  i18n: TriadDistanceI18n
}

export type TriadDistanceReturn = [TriadDistance, TriadDistance, TriadDistance]
