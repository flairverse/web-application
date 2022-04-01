import * as Lib from './lib'

export class Dater {
  static getMonth(month: Lib.T.Month, target: 'short' | 'long' | 'number' = 'short'): string | number {
    const currentMonthType = typeof month === 'string' ? 'string' : 'number'
    // prettier-ignore
    const currentMonthIndex = currentMonthType === 'number' 
                                ? Lib.CO.NUMERAL_MONTHS.indexOf(<Lib.T.NumeralMonth>month) 
                                : Lib.CO.SHORT_MONTHS.indexOf(<Lib.T.ShortMonths>(<string>month).substring(0, 3))

    switch (target) {
      case 'long': {
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
}
