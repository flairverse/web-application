import * as Lib from '.'

export type NumeralMonth = typeof Lib.CO.NUMERAL_MONTHS[number]
export type ShortMonths = typeof Lib.CO.SHORT_MONTHS[number]
export type LongMonth = typeof Lib.CO.LONG_MONTHS[number]
export type Month = NumeralMonth | ShortMonths | LongMonth
export type MonthTypes = 'short' | 'long' | 'number'

export type TimeZone = typeof Lib.CO.TIME_ZONES[number]
