import { DateTimePickerProps } from '@/components/ui-kit/time-picker/lib/types'
import { useMemo } from 'react'
import moment from 'moment'
import * as Lib from '../'

export const useReminderTimePicker = () => {
  const timePickerProps = useMemo<DateTimePickerProps>(createTimePickerProps, [])

  function createTimePickerProps(): DateTimePickerProps {
    const now = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(now.getFullYear() + 1)

    return {
      storeKeys: {
        visibility: 'PAGE__CREATE_NAP___TIME_PICKER_POPUP',
        minute: 'PAGE__CREATE_NAP___TIME_PICKER_MINUTE',
        hour: 'PAGE__CREATE_NAP___TIME_PICKER_HOUR',
        day: 'PAGE__CREATE_NAP___TIME_PICKER_DAY',
        month: 'PAGE__CREATE_NAP___TIME_PICKER_MONTH',
        year: 'PAGE__CREATE_NAP___TIME_PICKER_YEAR',
        activeLayer: 'PAGE__CREATE_NAP___DATE_TIME_PICKER_ACTIVE_LAYER',
        minimumDate: 'PAGE__CREATE_NAO___DATE_TIME_PICKER_MINIMUM_DATE',
      },
      minimumDate: moment().add('1', 'hour').toDate(),
      maximumDate: nextYear,
      onConfirm: console.log,
      dayEndIsMax: true,
      closeOnConfirm: true,
    }
  }

  return {
    get: { timePickerProps },
  }
}
