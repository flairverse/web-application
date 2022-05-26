import * as Lib from './lib'
import { intervalToDuration, Duration } from 'date-fns'

export class Dates {
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

  static durationToDate(duration: Lib.T.DateDurationOrNow): Date {
    const date = new Date()
    if (duration !== 'now') {
      const { year, month, day, hour, minute } = duration
      date.setFullYear(year)
      date.setMonth(month)
      date.setDate(day)
      date.setHours(hour)
      date.setMinutes(minute)
      return date
    }
    return date
  }

  static dateToDuration(date: Date): Lib.T.DateDuration {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    }
  }

  static difference(startDate: Lib.T.DateDuration | 'now', endDate: Lib.T.DateDuration | 'now'): Duration {
    const start = Dates.durationToDate(startDate)
    const end = Dates.durationToDate(endDate)
    return intervalToDuration({ start, end })
  }

  static triadDuration({ duration, i18n }: Lib.T.TriadDurationArgs): Lib.T.TriadDurationReturn {
    const { years, months, weeks, days, hours, minutes, seconds } = duration
    const { years: yearsI18n, months: monthsI18n, weeks: weeksI18n, days: daysI18n, hours: hoursI18n, minutes: minutesI18n, seconds: secondsI18n } = i18n
    const triad: Partial<Lib.T.TriadDurationReturn> = []

    if (years) {
      triad.push({ title: yearsI18n, key: 'years', value: years })
      triad.push({ title: monthsI18n, key: 'months', value: months || 0 })
      triad.push({ title: weeksI18n, key: 'weeks', value: weeks || 0 })
    } else if (months) {
      triad.push({ title: monthsI18n, key: 'months', value: months })
      triad.push({ title: weeksI18n, key: 'weeks', value: weeks || 0 })
      triad.push({ title: daysI18n, key: 'days', value: days || 0 })
    } else if (weeks) {
      triad.push({ title: weeksI18n, key: 'weeks', value: weeks })
      triad.push({ title: daysI18n, key: 'days', value: days || 0 })
      triad.push({ title: hoursI18n, key: 'hours', value: hours || 0 })
    } else if (days) {
      triad.push({ title: daysI18n, key: 'days', value: days })
      triad.push({ title: hoursI18n, key: 'hours', value: hours || 0 })
      triad.push({ title: minutesI18n, key: 'minutes', value: minutes || 0 })
    } else {
      triad.push({ title: hoursI18n, key: 'hours', value: hours || 0 })
      triad.push({ title: minutesI18n, key: 'minutes', value: minutes || 0 })
      triad.push({ title: secondsI18n, key: 'seconds', value: seconds || 0 })
    }

    return <Lib.T.TriadDurationReturn>triad
  }
}
