import { DateTimePickerProps } from '@/components/ui-kit/time-picker/lib/types'
import { useMemo } from 'react'
import moment from 'moment'
import * as Lib from '../'

export const useReminderTimePicker = () => {
  const timePickerProps = useMemo<DateTimePickerProps>(createTimePickerProps, [])

  function createTimePickerProps(): DateTimePickerProps {
    const now = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(now.getFullYear() + 2)
    const minDate = moment().add('1', 'hour').toDate()

    console.log(
      {
        // prettier-ignore
        nextYear,
        nextYearMonth: nextYear.getMonth(),
        nextYearDay: nextYear.getDay(),
        nextYearYear: nextYear.getFullYear(),
      },
      {
        minDate,
        minDateMonth: minDate.getMonth(),
        minDateDay: minDate.getDate(),
        minDateYear: minDate.getFullYear(),
      },
    )

    return {
      storeKeys: {
        visibility: 'PAGE__CREATE_NAP___TIME_PICKER_POPUP',
        minute: 'PAGE__CREATE_NAP___TIME_PICKER_MINUTE',
        hour: 'PAGE__CREATE_NAP___TIME_PICKER_HOUR',
        day: 'PAGE__CREATE_NAP___TIME_PICKER_DAY',
        month: 'PAGE__CREATE_NAP___TIME_PICKER_MONTH',
        year: 'PAGE__CREATE_NAP___TIME_PICKER_YEAR',
        activeLayer: Lib.CO.TIME_PICKER_ACTIVE_LAYER_STORE_KEY,
        minimumDate: 'PAGE__CREATE_NAO___DATE_TIME_PICKER_MINIMUM_DATE',
      },
      minimumDate: moment().add('1', 'hour').toDate(),
      maximumDate: nextYear,
      onConfirm: console.log,
      dayEndIsMax: false,
      closeOnConfirm: true,
      closeOnEarliest: false,
    }
  }

  return {
    get: { timePickerProps },
  }
}
