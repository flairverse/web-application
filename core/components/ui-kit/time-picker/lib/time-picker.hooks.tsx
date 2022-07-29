import { Dates, DatesHelperLib } from '@/helpers/dates'
import { Num } from '@/helpers/number'
import { useInterval } from '@/hooks/use-interval'
import { componentLayeredAtomFamilies, componentTimePickerAtomFamilies } from '@/store/atomFamilies'
import { StoreKeys } from '@/types/recoil.type'
import { ModalProps } from 'antd'
import moment from 'moment'
import { useEffect, useMemo, WheelEvent } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as Lib from '.'
import { LayeredUIKitLib } from '../../layered'

/**
 *
 *
 *
 *
 * makes it easy to get and set numeral time values
 */
const useNumeralTime = (storeKey: StoreKeys) => useRecoilState(componentTimePickerAtomFamilies.timePickerNumeralTimes(storeKey))

/**
 *
 *
 *
 *
 * makes it easy to get numeral time values
 */
const useNumeralTimeValue = (storeKey: StoreKeys) => useRecoilValue(componentTimePickerAtomFamilies.timePickerNumeralTimes(storeKey))

/**
 *
 *
 *
 *
 * checks if a specific day should be disabled
 */
export const useDisabledDays = ({ storeKeys, maximumDate, dayEndIsMax }: Lib.T.UseDisabledDays) => {
  const { minYear, minMonth, minDay } = useMinimumValues({ storeKeys })
  const { maxYear, maxMonth, maxDay } = useMaximumValues({
    maximumDate,
    dayEndIsMax,
  })
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
  const minimumDate = useRecoilValue(componentTimePickerAtomFamilies.timePickerMinimumDate(storeKeys.minimumDate))
  const minYear = minimumDate.getFullYear()
  const minMonth = minimumDate.getMonth()
  const minDay = minimumDate.getDate()
  const minHour = minimumDate.getHours()
  const minMinute = minimumDate.getMinutes()
  const minAllowedHour = 0
  const minAllowedMinute = 0
  return {
    minimumDate,
    minYear,
    minMonth,
    minDay,
    minHour,
    minMinute,
    minAllowedHour,
    minAllowedMinute,
  }
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
  return {
    maxYear,
    maxMonth,
    maxDay,
    maxHour,
    maxMinute,
    maxAllowedHour,
    maxAllowedMinute,
  }
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
  const canIncreaseMinute = (currentValue: number): boolean =>
    currentValue < maxMinute || (!isChosenDateEqualMaxDate && currentValue < maxAllowedMinute)
  const canDecreaseMinute = (currentValue: number): boolean =>
    currentValue > minMinute || (!isChosenDateEqualMinDate && currentValue > minAllowedMinute)

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
  const { minYear, minMonth, minDay, minMinute, minHour } = useMinimumValues({
    storeKeys,
  })
  const { maxYear, maxMonth, maxDay, maxHour, maxMinute } = useMaximumValues({
    dayEndIsMax,
    maximumDate,
  })
  const year = useNumeralTimeValue(storeKeys.year)
  const [month, setMonth] = useNumeralTime(storeKeys.month)
  const [day, setDay] = useNumeralTime(storeKeys.day)
  const [hour, setHour] = useNumeralTime(storeKeys.hour)
  const [minute, setMinute] = useNumeralTime(storeKeys.minute)
  const isChosenDateEqualMinDate: boolean = minYear === year && minMonth === month && minDay === day + 1
  const isChosenDateEqualMaxDate: boolean = maxYear === year && maxMonth === month && maxDay === day + 1
  const isMonthDisabled = useDisabledMonths({
    dayEndIsMax,
    maximumDate,
    storeKeys,
  })
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

    if (chosenDay < minDay && year === minYear) {
      setDay(minDay - 1)
    }

    if (chosenDay > maxDay && year === maxYear) {
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
export const useDateTimePicker = ({
  storeKeys,
  minimumDateProp,
  maximumDate,
  dayEndIsMax,
  updateMinimumDateEveryMinutes,
  onMinimumDateUpdate,
}: Lib.T.UseDateTimePickerArgs) => {
  useFixWrongChosenDate({ storeKeys, dayEndIsMax, maximumDate })
  const setVisibility = useSetRecoilState(componentTimePickerAtomFamilies.timePickerPopupVisibility(storeKeys.visibility))
  const [minimumDate, setMinimumDate] = useRecoilState(componentTimePickerAtomFamilies.timePickerMinimumDate(storeKeys.minimumDate))
  const [year, setYear] = useNumeralTime(storeKeys.year)
  const [month, setMonth] = useNumeralTime(storeKeys.month)
  const [day, setDay] = useNumeralTime(storeKeys.day)
  const [hour, setHour] = useNumeralTime(storeKeys.hour)
  const [minute, setMinute] = useNumeralTime(storeKeys.minute)

  const modalProps = useMemo<ModalProps>(
    () => ({
      onCancel: () => setVisibility(false),
      title: null,
      footer: null,
      width: 405,
      closable: false,
      destroyOnClose: true,
    }),
    [],
  )

  const layeredProps = useMemo<LayeredUIKitLib.T.LayeredProps>(
    () => ({
      className: 'content',
      storeKeys: {
        activeLayer: storeKeys.activeLayer,
      },
      layers: [
        {
          node: <Lib.C.Months storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />,
          title: 'Months',
        },
        {
          node: <Lib.C.Days storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />,
          title: 'Days',
        },
      ],
    }),
    [],
  )

  useEffect(() => {
    setMinimumDate(minimumDateProp)
    setYear(minimumDateProp.getFullYear())
    setMonth(minimumDateProp.getMonth())
    setDay(minimumDateProp.getDate() - 1)
    setHour(minimumDateProp.getHours())
    setMinute(minimumDateProp.getMinutes())
  }, [])

  const returnObj = { modalProps, layeredProps }

  if (!updateMinimumDateEveryMinutes) {
    return returnObj
  }

  useInterval(() => {
    const chosenDate = moment(new Date(year, month, day + 1, hour, minute))
    const oneMinLater = moment(chosenDate).add(1, 'minute').toDate()

    if (chosenDate.isSame(minimumDate, 'minute')) {
      setYear(oneMinLater.getFullYear())
      setMonth(oneMinLater.getMonth())
      setDay(oneMinLater.getDate() - 1)
      setHour(oneMinLater.getHours())
      setMinute(oneMinLater.getMinutes())
    }

    const newMinimumDate = moment(minimumDate).add(1, 'minute').toDate()
    setMinimumDate(newMinimumDate)
    onMinimumDateUpdate?.(newMinimumDate)
  }, 1000 * 60)

  return returnObj
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
  const { calculateTime } = useCalculateTimeValue({
    storeKeys,
    maximumDate,
    dayEndIsMax,
  })

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
  const { calculateTime, shouldDisableAction } = useCalculateTimeValue({
    storeKeys,
    maximumDate,
    dayEndIsMax,
  })

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
  const setLayer = useSetRecoilState(componentLayeredAtomFamilies.activeLayer(storeKeys.activeLayer))
  const value = useNumeralTimeValue(storeKeys[target]) // can be one of the next three lines, but that's fine
  const year = useNumeralTimeValue(storeKeys.year)
  const month = useNumeralTimeValue(storeKeys.month)
  const day = useNumeralTimeValue(storeKeys.day)
  const hour = useNumeralTimeValue(storeKeys.hour)
  const minute = useNumeralTimeValue(storeKeys.minute)

  const formattedValue = useMemo<string>(() => {
    switch (target) {
      case 'month': {
        return Dates.getMonth(value as DatesHelperLib.T.NumeralMonth, 'short') as string
      }
      case 'day': {
        return moment({ year, month, day, hour, minute }).format('dddd')
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
  const minimumDate = useRecoilValue(componentTimePickerAtomFamilies.timePickerMinimumDate(storeKeys.minimumDate))
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
  const setLayer = useSetRecoilState(componentLayeredAtomFamilies.activeLayer(storeKeys.activeLayer))
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
  const setLayer = useSetRecoilState(componentLayeredAtomFamilies.activeLayer(storeKeys.activeLayer))
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
export const useActions = ({ closeOnConfirm, onConfirm, storeKeys, autoHideEarliest }: Lib.T.UseActionsArgs) => {
  const setVisibility = useSetRecoilState(componentTimePickerAtomFamilies.timePickerPopupVisibility(storeKeys.visibility))
  const { minYear, minMonth, minDay, minHour, minMinute } = useMinimumValues({
    storeKeys,
  })
  const [year, setYear] = useNumeralTime(storeKeys.year)
  const [month, setMonth] = useNumeralTime(storeKeys.month)
  const [day, setDay] = useNumeralTime(storeKeys.day)
  const [hour, setHour] = useNumeralTime(storeKeys.hour)
  const [minute, setMinute] = useNumeralTime(storeKeys.minute)
  const isEarliestDisabled =
    year === minYear && month === minMonth && day + 1 === minDay && hour === minHour && minute === minMinute && autoHideEarliest

  const goToEarliestDate = () => {
    setYear(minYear)
    setMonth(minMonth)
    setDay(minDay - 1)
    setHour(minHour)
    setMinute(minMinute)
  }

  const discard = () => setVisibility(false)

  const confirm = () => {
    onConfirm?.(new Date(year, month, day + 1, hour, minute, 0, 0))
    if (closeOnConfirm) {
      setVisibility(false)
    }
  }

  return { goToEarliestDate, discard, confirm, isEarliestDisabled }
}
