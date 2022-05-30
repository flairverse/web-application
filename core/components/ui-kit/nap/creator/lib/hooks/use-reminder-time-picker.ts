import { TimePickerProps } from '@/components/ui-kit/time-picker/lib/types'
import { useMemo } from 'react'

export const useReminderTimePicker = () => {
  const timePickerProps = useMemo<TimePickerProps>(createTimePickerProps, [])

  function createTimePickerProps(): TimePickerProps {
    const now = new Date()
    const nextYear = new Date()
    nextYear.setFullYear(now.getFullYear() + 1)

    return {
      visibilityStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_POPUP',
      valueStoreKey: 'PAGE__CREATE_NAP___TIME_PICKER_VALUE',
      minimumDate: new Date(now.getTime() + 60 * 60000),
      maximumDate: nextYear,
      onConfirm: console.log,
    }
  }

  return {
    get: { timePickerProps },
  }
}
