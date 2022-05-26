import { TimePickerProps } from '@/components/ui-kit/time-picker/lib/types'
import { useMemo } from 'react'

export const useReminderTimePicker = () => {
  const timePickerProps = useMemo<TimePickerProps>(createTimePickerProps, [])

  function createTimePickerProps(): TimePickerProps {
    const now = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(now.getFullYear() + 10)

    return {
      visibilityStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_POPUP',
      valuesStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_VALUES',
      columnsStoreKeys: {
        yearsStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_YEARS',
        monthsStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_MONTHS',
        daysStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_DAYS',
        hoursStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_HOURS',
        minutesStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_MINUTES',
      },
      minimumDate: new Date(now.getTime() + 60 * 60000),
      maximumDate: nextYear,
    }
  }

  return {
    get: { timePickerProps },
  }
}
