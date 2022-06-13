import * as Lib from './lib'
import { intervalToDuration, Duration, format as dateFNsFormat } from 'date-fns'
import moment, { Moment } from 'moment'
import { Str } from '../string'

export class Dates {
  static getMonth(month: Lib.T.Month, target: Lib.T.MonthTypes = 'short'): string | number {
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

  static getWeekDay(detail: Lib.T.DateDetailOrNow) {
    const date = Dates.dateDetailToDate(detail)
    return dateFNsFormat(date, 'EEE')
  }

  static getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate()
  }

  static dateDetailToDate(detail: Lib.T.DateDetailOrNow): Date {
    const date = new Date()
    if (detail !== 'now') {
      const { year, month, day, hour, minute, second } = detail
      date.setFullYear(year)
      date.setMonth(month)
      date.setDate(day)
      date.setHours(hour)
      date.setMinutes(minute)
      date.setSeconds(second || 0)
      return date
    }
    return date
  }

  static dateToDetail(date: Date): Lib.T.DateDetail {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    }
  }

  static dateKeyToMilliseconds = (key: keyof Duration): number => {
    switch (key) {
      case 'years': {
        return 3.154e10 // not always
      }
      case 'months': {
        return 2.628e9 // not always
      }
      case 'weeks': {
        return 6.048e8
      }
      case 'days': {
        return 8.64e7
      }
      case 'hours': {
        return 3.6e6
      }
      case 'minutes': {
        return 60000
      }
      case 'seconds': {
        return 1000
      }
    }
  }

  static momentToDetail(moment: Moment): Lib.T.DateDetail {
    return {
      year: moment.year(),
      month: moment.month(),
      day: moment.date(),
      hour: moment.hour(),
      minute: moment.minute(),
    }
  }

  static dateToMoment(date: Date): Moment {
    return moment(date)
  }

  static momentToDate(moment: Moment): Date {
    return moment.toDate()
  }

  static dateDetailToMoment(detail: Lib.T.DateDetail): Moment {
    const date = Dates.dateDetailToDate(detail)
    return Dates.dateToMoment(date)
  }

  static difference(startDate: Lib.T.DateDetail | 'now', endDate: Lib.T.DateDetail | 'now'): Duration {
    const start = Dates.dateDetailToDate(startDate)
    const end = Dates.dateDetailToDate(endDate)
    return intervalToDuration({ start, end })
  }

  static triadDistance({ duration, i18n }: Lib.T.TriadDistanceArgs): Lib.T.TriadDistanceReturn {
    const { years, months, weeks, days, hours, minutes, seconds } = duration
    const { years: yearsI18n, months: monthsI18n, weeks: weeksI18n, days: daysI18n, hours: hoursI18n, minutes: minutesI18n, seconds: secondsI18n } = i18n
    const triad: Partial<Lib.T.TriadDistanceReturn> = []

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

    return <Lib.T.TriadDistanceReturn>triad
  }
}
