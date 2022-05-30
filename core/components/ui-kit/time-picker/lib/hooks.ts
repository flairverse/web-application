import * as Lib from '.'
import { ModalProps } from 'antd'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { componentsAtoms } from '@/store/atoms'
import type { RangePickerProps } from 'antd/es/date-picker'
import moment, { Moment } from 'moment'
import { Dates } from '@/helpers/dates'
import { Num } from '@/helpers/number'
import { useEffect, useMemo } from 'react'
import { DateDetail, TriadDistance, TriadDistanceI18n } from '@/helpers/dates/lib/types'

/**
 *
 *
 *
 *
 * finds the earliest date that is supposed to be selectable
 */
export const useFindEarliest = () => {
  return ({ hour, minute, minimumDate }: Lib.T.FindEarliestArgs) => {
    const newDate = new Date(minimumDate)
    if (hour) {
      newDate.setHours(hour)
    }
    if (minute) {
      newDate.setMinutes(minute)
    }
    return newDate
  }
}

/**
 *
 *
 *
 *
 * finds the latest date that is supposed to be selectable
 */
export const useFindLatest = () => {
  return ({ hour, minute, maximumDate }: Lib.T.FindLatestArgs) => {
    const newDate = new Date(maximumDate)
    if (hour) {
      newDate.setHours(hour)
    }
    if (minute) {
      newDate.setMinutes(minute)
    }
    return newDate
  }
}

/**
 *
 *
 *
 *
 * functionalities for the timepicker component
 */
export const useTimePicker = ({ visibilityStoreKey, minimumDate, valueStoreKey, setShowContent }: Lib.T.UseTimePickerArgs) => {
  const [visibility, setVisibility] = useRecoilState(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))
  const findEarliest = Lib.H.useFindEarliest()
  const setTimePickerValue = useSetRecoilState(componentsAtoms.timePickerValue(valueStoreKey))

  const modalProps = useMemo<ModalProps>(
    () => ({
      onCancel: () => closeModal(),
      title: null,
      footer: null,
      width: 405,
      destroyOnClose: true,
    }),
    [],
  )

  const handleEarliestClick = () => {
    setTimeout(() => {
      const earliest = findEarliest({ minimumDate })
      setTimePickerValue(Dates.dateToDetail(earliest))
    }, 0)
  }

  const closeModal = () => {
    setShowContent(false)
    setTimeout(() => setVisibility(false), 0)
  }

  useEffect(() => {
    setTimeout(() => setShowContent(visibility), 215)
  }, [visibility])

  return {
    get: { modalProps },
    handleEarliestClick,
    closeModal,
  }
}

/**
 *
 *
 *
 *
 * functionalities for the datepicker component
 */
export const useDatePicker = ({ minimumDate, valueStoreKey, maximumDate }: Lib.T.UseDatePickerArgs) => {
  const minDate = useMemo<DateDetail>(() => Dates.dateToDetail(minimumDate), [minimumDate])
  const maxDate = useMemo<DateDetail>(() => Dates.dateToDetail(maximumDate), [maximumDate])
  const [timePickerValue, setTimePickerValue] = useRecoilState(componentsAtoms.timePickerValue(valueStoreKey, Dates.dateToDetail(minimumDate)))
  const findEarliest = useFindEarliest()
  const findLatest = useFindLatest()

  const disabledDates: RangePickerProps['disabledDate'] = current => {
    return current && (current < moment().subtract(1, 'day').endOf('day') || current > moment(maximumDate).endOf('day'))
  }

  const disabledTimes = (current: Moment) => {
    const { day, hour, year, month } = Dates.momentToDetail(current)

    const isCurrentYearAndMonth = year === minDate.year && month === minDate.month

    return {
      disabledHours: () => (day === minDate.day && isCurrentYearAndMonth ? Num.createSimpleRange([0, minDate.hour]) : []),
      disabledMinutes: () => (hour === minDate.hour && isCurrentYearAndMonth ? Num.createSimpleRange([0, minDate.minute]) : []),
    }
  }

  const handleChanges = (date: Moment) => {
    const selected = Dates.momentToDetail(date)
    const { hour, minute } = selected

    if (selected.year === minDate.year && selected.month === minDate.month && selected.day === minDate.day) {
      const earliest = findEarliest({ minimumDate, hour, minute })
      setTimeout(() => setTimePickerValue(Dates.dateToDetail(earliest)), 0)
    } else if (selected.year === maxDate.year && selected.month === maxDate.month && selected.day === maxDate.day) {
      const latest = findLatest({ maximumDate, hour, minute })
      setTimeout(() => setTimePickerValue(Dates.dateToDetail(latest)), 0)
    } else {
      setTimePickerValue(Dates.momentToDetail(date))
    }
  }

  const parsedValue = () => {
    return Dates.dateDetailToMoment(timePickerValue)
  }

  return {
    get: { disabledDates, disabledTimes, parsedValue },
    handleChanges,
  }
}

/**
 *
 *
 *
 *
 * functionalities for the distance component
 */
export const useDistance = ({ valueStoreKey, minimumDate }: Lib.T.UseDistanceArgs) => {
  const timePickerValue = useRecoilValue(componentsAtoms.timePickerValue(valueStoreKey, Dates.dateToDetail(minimumDate)))

  const triadDistanceIntl: TriadDistanceI18n = {
    years: 'years',
    months: 'months',
    weeks: 'weeks',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  }

  const createInfo = (info: TriadDistance) => {
    return `${info.value} ${info.title}`
  }

  const createDistance = () => {
    const difference = Dates.difference('now', timePickerValue)
    const [first, second, third] = Dates.triadDistance({ duration: difference, i18n: triadDistanceIntl })
    return `${createInfo(first)}, ${createInfo(second)} and ${createInfo(third)}`
  }

  const distance = useMemo<string>(createDistance, [timePickerValue])
  return distance
}

/**
 *
 *
 *
 *
 * functionalities for the confirm button component
 */
export const useConfirmButton = ({ onConfirm, minimumDate, valueStoreKey, closeOnConfirm, closeModal }: Lib.T.UseConfirmButton) => {
  const timePickerValue = useRecoilValue(componentsAtoms.timePickerValue(valueStoreKey, Dates.dateToDetail(minimumDate)))

  const confirm = () => {
    onConfirm?.(Dates.dateDetailToDate(timePickerValue))

    if (closeOnConfirm) {
      closeModal()
    }
  }

  return confirm
}
