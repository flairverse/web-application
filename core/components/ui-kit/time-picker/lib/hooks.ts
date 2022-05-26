import * as Lib from '.'
import { ModalProps } from 'antd'
import { useSetRecoilState } from 'recoil'
import { componentsAtoms } from '@/store/atoms'
import type { RangePickerProps } from 'antd/es/date-picker'
import moment, { Moment } from 'moment'
import { Dates } from '@/helpers/dates'
import { Num } from '@/helpers/number'

export const useTimePicker = ({ visibilityStoreKey, maximumDate, minimumDate }: Lib.T.UseTimePickerArgs) => {
  const setVisibility = useSetRecoilState(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))
  const { year: minYear, month: minMonth, day: minDay, hour: minHour, minute: minMinute } = Dates.dateToDetail(minimumDate)
  const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour, minute: maxMinute } = Dates.dateToDetail(maximumDate)

  const modalProps: ModalProps = {
    onCancel: () => setVisibility(false),
    title: null,
    footer: null,
    width: 405,
    destroyOnClose: true,
    transitionName: '',
  }

  const disabledDates: RangePickerProps['disabledDate'] = current => {
    return current && current < moment().subtract(1, 'day').endOf('day')
  }

  const disabledTimes = (current: Moment) => {
    const { day, hour } = Dates.momentToDetail(current)
    console.log(Math.random())

    return {
      disabledHours: () => (day === minDay ? Num.createSimpleRange([0, minHour]) : []),
      disabledMinutes: () => (hour === minHour ? Num.createSimpleRange([0, minMinute]) : []),
    }
  }

  return {
    get: { modalProps, disabledDates, disabledTimes },
  }
}
