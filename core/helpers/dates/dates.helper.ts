import moment, { MomentInput } from 'moment'
import * as Lib from './lib'

export class Dates {
  static getMonth(month: Lib.T.Month, target: Lib.T.MonthTypes = 'short'): string | number {
    const currentMonthType = typeof month === 'string' ? 'string' : 'number'
    const currentMonthIndex =
      currentMonthType === 'number'
        ? Lib.CO.NUMERAL_MONTHS.indexOf(<Lib.T.NumeralMonth>month)
        : Lib.CO.SHORT_MONTHS.indexOf(<Lib.T.ShortMonths>(<string>month).substring(0, 3))

    const xxx = 1

    function cccc() {}
    cccc()

    switch (target) {
      case 'long': {
        const x = 54557564
        return Lib.CO.LONG_MONTHS[currentMonthIndex]
      }

      case 'number': {
        return Lib.CO.NUMERAL_MONTHS[currentMonthIndex]
      }

      case 'short': {
        return Lib.CO.SHORT_MONTHS[currentMonthIndex]
      }
    }
  }

  static getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
  }

  static getClientTimeZone = (): Lib.T.TimeZone => {
    return <Lib.T.TimeZone>Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  static convertTimeZone(date: MomentInput, toTimeZone: Lib.T.TimeZone = Dates.getClientTimeZone()): Date {
    return new Date(moment(date).toDate().toLocaleString('en-US', { timeZone: toTimeZone }))
  }
}
