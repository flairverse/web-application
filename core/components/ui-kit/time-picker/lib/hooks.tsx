import { ModalProps } from 'antd'
import { useEffect, useMemo, WheelEvent } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import * as Lib from '.'
import { Dates } from '@/helpers/dates'
import { NumeralMonth } from '@/helpers/dates/lib/types'
import { componentTimePickerAtoms, componentLayeredAtoms } from '@/store/atomFamilies'
import { LayeredProps } from '../../layered/lib/types'
import { StoreKeys } from '@/types/recoil.type'
import { Num } from '@/helpers/number'
import { useTriadCountdown } from '@/hooks/use-triad-countdown'
import moment from 'moment'

/**
 *
 *
 *
 *
 * makes it easy to set numeral time values
 */
const useSetNumeralTime = (storeKey: StoreKeys) => useSetRecoilState(componentTimePickerAtoms.timePickerNumeralTimes(storeKey))

/**
 *
 *
 *
 *
 * makes it easy to get and set numeral time values
 */
const useNumeralTime = (storeKey: StoreKeys) => useRecoilState(componentTimePickerAtoms.timePickerNumeralTimes(storeKey))

/**
 *
 *
 *
 *
 * makes it easy to get numeral time values
 */
const useNumeralTimeValue = (storeKey: StoreKeys) => useRecoilValue(componentTimePickerAtoms.timePickerNumeralTimes(storeKey))

/**
 *
 *
 *
 *
 * checks if a specific day should be disabled
 */
export const useDisabledDays = ({ storeKeys, maximumDate, dayEndIsMax }: Lib.T.UseDisabledDays) => {
  const { minYear, minMonth, minDay } = useMinimumValues({ storeKeys })
  const { maxYear, maxMonth, maxDay } = useMaximumValues({ maximumDate, dayEndIsMax })
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)

  const isDayDisabled = (day: number): boolean => {
    return (year <= minYear && month <= minMonth && day + 1 < minDay) || (year >= maxYear && month >= maxMonth && day + 1 > maxDay)
  }
  return isDayDisabled
}

/**
 *
 *
 *
 *
 * checks if a specific month should be disabled
 */
export const useDisabledMonths = ({ maximumDate, storeKeys, dayEndIsMax }: Lib.T.UseDisabledMonths) => {
  const year = useNumeralTimeValue(storeKeys.year)
  const { minYear, minMonth } = useMinimumValues({ storeKeys })
  const { maxYear, maxMonth } = useMaximumValues({ dayEndIsMax, maximumDate })

  const isMonthDisabled = (month: number): boolean => {
    return (year <= minYear && month < minMonth) || (year >= maxYear && month > maxMonth)
  }
  return isMonthDisabled
}

/**
 *
 *
 *
 *
 * returns all information about minimum date values
 */
export const useMinimumValues = ({ storeKeys }: Lib.T.UseMinimumValues) => {
  const minimumDate = useRecoilValue(componentTimePickerAtoms.timePickerMinimumDate(storeKeys.minimumDate))
  const minYear = minimumDate.getFullYear()
  const minMonth = minimumDate.getMonth()
  const minDay = minimumDate.getDate()
  const minHour = minimumDate.getHours()
  const minMinute = minimumDate.getMinutes()
  const minAllowedHour = 0
  const minAllowedMinute = 0
  return { minimumDate, minYear, minMonth, minDay, minHour, minMinute, minAllowedHour, minAllowedMinute }
}

/**
 *
 *
 *
 *
 * returns all information about maximum date values
 */
export const useMaximumValues = ({ maximumDate, dayEndIsMax }: Lib.T.UseMaximumValues) => {
  const maxYear = maximumDate.getFullYear()
  const maxMonth = maximumDate.getMonth()
  const maxDay = maximumDate.getDate()
  const maxAllowedHour = 23
  const maxAllowedMinute = 59
  const maxHour = dayEndIsMax ? maxAllowedHour : maximumDate.getHours()
  const maxMinute = dayEndIsMax ? maxAllowedMinute : maximumDate.getMinutes()
  return { maxYear, maxMonth, maxDay, maxHour, maxMinute, maxAllowedHour, maxAllowedMinute }
}

/**
 *
 *
 *
 *
 * functionalities to check if minute and hour can be increased or decreased and should they be disabled or not
 */
export const useCalculateTimeValue = ({ storeKeys, maximumDate, dayEndIsMax }: Lib.T.UseCalculateTimeValueArgs) => {
  const { minYear, minMonth, minDay, minHour, minMinute, minAllowedHour, minAllowedMinute } = useMinimumValues({ storeKeys })
  const { maxHour, maxMinute, maxYear, maxMonth, maxDay, maxAllowedHour, maxAllowedMinute } = useMaximumValues({ maximumDate, dayEndIsMax })
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)
  const day = useNumeralTimeValue(storeKeys.day)
  const isChosenDateEqualMinDate: boolean = minYear === year && minMonth === month && minDay === day + 1
  const isChosenDateEqualMaxDate: boolean = maxYear === year && maxMonth === month && maxDay === day + 1

  const canIncreaseHour = (currentValue: number): boolean => currentValue < maxHour || (!isChosenDateEqualMaxDate && currentValue < maxAllowedHour)
  const canDecreaseHour = (currentValue: number): boolean => currentValue > minHour || (!isChosenDateEqualMinDate && currentValue > minAllowedHour)
  const canIncreaseMinute = (currentValue: number): boolean => currentValue < maxMinute || (!isChosenDateEqualMaxDate && currentValue < maxAllowedMinute)
  const canDecreaseMinute = (currentValue: number): boolean => currentValue > minMinute || (!isChosenDateEqualMinDate && currentValue > minAllowedMinute)

  const calculateTime = (target: Lib.T.TimeTarget, action: Lib.T.TimeAction, currentValue: number): number => {
    switch (target) {
      case 'hour': {
        if (action === 'increase') {
          return canIncreaseHour(currentValue) ? currentValue + 1 : currentValue
        }
        return canDecreaseHour(currentValue) ? currentValue - 1 : currentValue
      }

      case 'minute': {
        if (action === 'increase') {
          return canIncreaseMinute(currentValue) ? currentValue + 1 : currentValue
        }
        return canDecreaseMinute(currentValue) ? currentValue - 1 : currentValue
      }
    }
  }

  const shouldDisableAction = (target: Lib.T.TimeTarget, action: Lib.T.TimeAction, currentValue: number): boolean => {
    switch (target) {
      case 'hour': {
        if (action === 'increase') {
          return !canIncreaseHour(currentValue)
        }
        return !canDecreaseHour(currentValue)
      }

      case 'minute': {
        if (action === 'increase') {
          return !canIncreaseMinute(currentValue)
        }
        return !canDecreaseMinute(currentValue)
      }
    }
  }

  return { calculateTime, shouldDisableAction }
}

/**
 *
 *
 *
 *
 * it fixes all wrong time values when their greater value changes
 */
export const useFixWrongChosenDate = ({ storeKeys, dayEndIsMax, maximumDate }: Lib.T.UseFixWrongChosenDate) => {
  const { minYear, minMonth, minDay, minMinute, minHour } = useMinimumValues({ storeKeys })
  const { maxYear, maxMonth, maxDay, maxHour, maxMinute } = useMaximumValues({ dayEndIsMax, maximumDate })
  const year = useNumeralTimeValue(storeKeys.year)
  const [month, setMonth] = useNumeralTime(storeKeys.month)
  const [day, setDay] = useNumeralTime(storeKeys.day)
  const [hour, setHour] = useNumeralTime(storeKeys.hour)
  const [minute, setMinute] = useNumeralTime(storeKeys.minute)
  const isChosenDateEqualMinDate: boolean = minYear === year && minMonth === month && minDay === day + 1
  const isChosenDateEqualMaxDate: boolean = maxYear === year && maxMonth === month && maxDay === day + 1
  const isMonthDisabled = useDisabledMonths({ dayEndIsMax, maximumDate, storeKeys })
  const isDayDisabled = useDisabledDays({ dayEndIsMax, maximumDate, storeKeys })

  const fixHourAndMinute = () => {
    if (isChosenDateEqualMinDate) {
      if (minute < minMinute) {
        setMinute(minMinute)
      }
      if (hour < minHour) {
        setHour(minHour)
      }
    } else if (isChosenDateEqualMaxDate) {
      if (minute > maxMinute) {
        setMinute(maxMinute)
      }
      if (hour > maxHour) {
        setHour(maxHour)
      }
    }
  }

  const fixDay = () => {
    const chosenDay = day + 1
    const chosenMonth = month + 1
    const daysInMonth = Dates.getDaysInMonth(year, chosenMonth)

    if (chosenDay > daysInMonth) {
      setDay(daysInMonth - 1)
    }

    if (chosenDay < minDay && year === minDay) {
      setDay(minDay - 1)
    }

    if (chosenDay > maxDay && year === maxDay) {
      setDay(maxDay - 1)
    }

    if (isDayDisabled(chosenDay)) {
      switch (year) {
        case maxYear: {
          setDay(maxDay - 1)
          break
        }
        case minYear: {
          setDay(minDay - 1)
          break
        }
      }
    }
  }

  const fixMonth = () => {
    if (isMonthDisabled(month)) {
      switch (year) {
        case maxYear: {
          setMonth(maxMonth)
          break
        }
        case minYear: {
          setMonth(minMonth)
          break
        }
      }
    }
  }

  useEffect(fixHourAndMinute, [year, month, day])
  useEffect(fixDay, [year, month])
  useEffect(fixMonth, [year])
}

/**
 *
 *
 *
 *
 * functionalities for the TimePicker component
 */
export const useDateTimePicker = ({ storeKeys, minimumDateProp, maximumDate, dayEndIsMax }: Lib.T.UseDateTimePickerArgs) => {
  useFixWrongChosenDate({ storeKeys, dayEndIsMax, maximumDate })
  const setVisibility = useSetRecoilState(componentTimePickerAtoms.timePickerPopupVisibility(storeKeys.visibility))
  const setMinimumDate = useSetRecoilState(componentTimePickerAtoms.timePickerMinimumDate(storeKeys.minimumDate))
  const setYear = useSetNumeralTime(storeKeys.year)
  const setMonth = useSetNumeralTime(storeKeys.month)
  const setDay = useSetNumeralTime(storeKeys.day)
  const setHour = useSetNumeralTime(storeKeys.hour)
  const setMinute = useSetNumeralTime(storeKeys.minute)

  const modalProps = useMemo<ModalProps>(
    () => ({
      onCancel: () => setVisibility(false),
      title: null,
      footer: null,
      width: 405,
      closable: false,
    }),
    [],
  )

  const layeredProps = useMemo<LayeredProps>(
    () => ({
      className: 'content',
      storeKeys: {
        activeLayer: storeKeys.activeLayer,
      },
      layers: [
        { node: <Lib.C.Months storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />, title: 'Months' },
        { node: <Lib.C.Days storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />, title: 'Days' },
      ],
    }),
    [],
  )

  const updateTime = (time: Date) => {
    setMinimumDate(time)
    setYear(time.getFullYear())
    setMonth(time.getMonth())
    setDay(time.getDate() - 1)
    setHour(time.getHours())
    setMinute(time.getMinutes())
  }

  const onMount = () => {
    const time = moment(minimumDateProp)
    updateTime(time.toDate())

    const interval = window.setInterval(() => {
      time.add(1, 'minute')
      updateTime(time.toDate())
    }, 5000)
    // }, 1000 * 60)

    return () => {
      window.clearInterval(interval)
    }
  }

  useEffect(onMount, [])
  return { modalProps, layeredProps }
}

/**
 *
 *
 *
 *
 * functionalities to calculate the correct values for minute and hour
 */
export const useTimePickerInput = ({ target, storeKeys, maximumDate, dayEndIsMax }: Lib.T.UseTimePickerInput) => {
  const [value, setValue] = useNumeralTime(storeKeys[target])
  const { calculateTime } = useCalculateTimeValue({ storeKeys, maximumDate, dayEndIsMax })

  const handleInputChange = (evt: WheelEvent<HTMLDivElement>) => {
    const isIncreaseTheAction = evt.deltaY < 0
    const action: Lib.T.TimeAction = isIncreaseTheAction ? 'increase' : 'decrease'
    setValue(currentValue => calculateTime(target, action, currentValue))
  }

  return { value, handleInputChange }
}

/**
 *
 *
 *
 *
 * handles increment and decrement buttons of hour and minute
 */
export const useTimePickerButton = ({ target, action, storeKeys, maximumDate, dayEndIsMax }: Lib.T.UseTimePickerButtonArgs) => {
  const Icon = action === 'increase' ? FiChevronUp : FiChevronDown
  const [value, setValue] = useNumeralTime(storeKeys[target])
  const { calculateTime, shouldDisableAction } = useCalculateTimeValue({ storeKeys, maximumDate, dayEndIsMax })

  const handleButtonClicks = () => {
    setValue(currentValue => calculateTime(target, action, currentValue))
  }

  return {
    Icon,
    value,
    handleButtonClicks,
    shouldDisableAction,
  }
}

/**
 *
 *
 *
 *
 * handles layer changing and formatted values for year, month and day
 */
export const useDatePickerItem = ({ target, storeKeys }: Lib.T.UseDatePickerItemsArgs) => {
  const setLayer = useSetRecoilState(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))
  const value = useNumeralTimeValue(storeKeys[target]) // can be one of the next three lines, but that's fine
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)
  const day = useNumeralTimeValue(storeKeys.day)
  const hour = useNumeralTimeValue(storeKeys.hour)
  const minute = useNumeralTimeValue(storeKeys.minute)

  const formattedValue = useMemo<string>(() => {
    switch (target) {
      case 'month': {
        return Dates.getMonth(value as NumeralMonth, 'short') as string
      }
      case 'day': {
        return Dates.getWeekDay({ year, month, day, hour, minute })
      }
      default: {
        return ''
      }
    }
  }, [value])

  const onButtonsClick = () => {
    switch (target) {
      case 'month': {
        setLayer(0)
        break
      }
      case 'day': {
        setLayer(1)
        break
      }
    }
  }

  return {
    value,
    formattedValue,
    onButtonsClick,
  }
}

/**
 *
 *
 *
 *
 * functionalities generate and handle year buttons
 */
export const useYears = ({ storeKeys, maximumDate }: Lib.T.UseYearsArgs) => {
  const [selectedYear, setYear] = useNumeralTime(storeKeys.year)
  const minimumDate = useRecoilValue(componentTimePickerAtoms.timePickerMinimumDate(storeKeys.minimumDate))
  const minimumYear = minimumDate.getFullYear()
  const maximumYear = maximumDate.getFullYear()

  const years = Num.range(minimumYear, maximumYear)

  const changeYear = (year: number) => {
    setYear(year)
  }

  return { years, changeYear, selectedYear }
}

/**
 *
 *
 *
 *
 * generates possible months
 */
export const useMonths = ({ storeKeys }: Lib.T.UseMonthsArgs) => {
  const setLayer = useSetRecoilState(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))
  const [selectedMonth, setMonth] = useNumeralTime(storeKeys.month)
  const changeMonth = (month: number) => {
    setMonth(month)
    setLayer(null)
  }
  return { selectedMonth, changeMonth }
}

/**
 *
 *
 *
 *
 * generates possible days
 */
export const useDays = ({ storeKeys }: Lib.T.UseDaysArgs) => {
  const [selectedDay, setDay] = useNumeralTime(storeKeys.day)
  const setLayer = useSetRecoilState(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)
  const changeDay = (day: number) => {
    setDay(day)
    setLayer(null)
  }
  const daysInMonth = () => Dates.getDaysInMonth(year, month + 1)
  return { selectedDay, changeDay, daysInMonth }
}

/**
 *
 *
 *
 *
 * functionalities of action buttons
 */
export const useActions = ({ closeOnConfirm, onConfirm, storeKeys, closeOnEarliest }: Lib.T.UseActionsArgs) => {
  const setVisibility = useSetRecoilState(componentTimePickerAtoms.timePickerPopupVisibility(storeKeys.visibility))
  const { minYear, minMonth, minDay, minHour, minMinute } = useMinimumValues({ storeKeys })
  const [year, setYear] = useNumeralTime(storeKeys.year)
  const [month, setMonth] = useNumeralTime(storeKeys.month)
  const [day, setDay] = useNumeralTime(storeKeys.day)
  const [hour, setHour] = useNumeralTime(storeKeys.hour)
  const [minute, setMinute] = useNumeralTime(storeKeys.minute)

  const goToEarliestDate = () => {
    setYear(minYear)
    setMonth(minMonth)
    setDay(minDay - 1)
    setHour(minHour)
    setMinute(minMinute)

    if (closeOnEarliest) {
      setVisibility(false)
    }
  }

  const discard = () => {
    setVisibility(false)
  }

  const confirm = () => {
    if (onConfirm) {
      onConfirm(new Date(year, month, day + 1, hour, minute, 0, 0))
      if (closeOnConfirm) {
        setVisibility(false)
      }
    }
  }

  return { goToEarliestDate, discard, confirm }
}

/**
 *
 *
 *
 *
 * functionalities for the distance component
 */
export const useDistance = ({ storeKeys, triadRefs }: Lib.T.UseDistanceArgs) => {
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)
  const day = useNumeralTimeValue(storeKeys.day) + 1
  const hour = useNumeralTimeValue(storeKeys.hour)
  const minute = useNumeralTimeValue(storeKeys.minute)

  useTriadCountdown({
    triadRefs,
    defaultValues: {
      year,
      month,
      day,
      hour,
      minute,
    },
  })
}
