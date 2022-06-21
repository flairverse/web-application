import { TimePickerUIKitLib } from '@/components/ui-kit/time-picker'
import { componentTimePickerAtoms } from '@/store/atomFamilies'
import { RefObject, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useReminderTimePicker = (boardRef: RefObject<HTMLDivElement>) => {
  const visibility = useRecoilValue(componentTimePickerAtoms.timePickerPopupVisibility('PAGE__CREATE_NAP___TIME_PICKER_POPUP'))
  const Updater = Lib.H.useUpdaters(boardRef)
  const updater = new Updater()

  function onReminderConfirm(confirmedValue: Date) {
    updater.updateReminder({ endTime: confirmedValue.toISOString() })
  }

  const createTimePickerProps = (): TimePickerUIKitLib.T.DateTimePickerProps => {
    const { maximumDate, minimumDate } = Lib.HE.getReminderInitialTime()

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
      minimumDate,
      maximumDate,
      onConfirm: onReminderConfirm,
      dayEndIsMax: true,
      closeOnConfirm: true,
      autoHideEarliest: true,
      // onMinimumDateUpdate: onReminderConfirm,
      // updateMinimumDateEveryMinutes: true,
    }
  }

  const timePickerProps = useMemo<TimePickerUIKitLib.T.DateTimePickerProps>(createTimePickerProps, [visibility])
  return {
    get: { timePickerProps },
  }
}
