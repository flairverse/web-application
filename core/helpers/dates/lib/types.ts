import { Duration } from 'date-fns'
import * as Lib from '.'

export type NumeralMonth = typeof Lib.CO.NUMERAL_MONTHS[number]

export type ShortMonths = typeof Lib.CO.SHORT_MONTHS[number]

export type LongMonth = typeof Lib.CO.LONG_MONTHS[number]

export type StringyMonth = ShortMonths | LongMonth

export type Month = NumeralMonth | ShortMonths | LongMonth

export type DateDuration = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
}

export type DateDurationOrNow = DateDuration | 'now'

export interface DifferenceArgs {
  start: DateDurationOrNow
  end: DateDurationOrNow
}

export type TriadDurationI18n = {
  [key in keyof Required<Duration>]: string
}

export type TriadDuration = {
  key: keyof Duration
  title: string
  value: number
}

export type TriadDurationArgs = {
  duration: Duration
  i18n: TriadDurationI18n
}

export type TriadDurationReturn = [TriadDuration, TriadDuration, TriadDuration]
