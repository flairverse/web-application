import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as Lib from '.'
import { componentsAtoms } from '@/store/atoms'
import { ModalProps } from 'antd'
import { useEffect, useMemo } from 'react'
import { DOM } from '@/helpers/DOM'
import { Num } from '@/helpers/number'
import { Dates } from '@/helpers/dates'
import { DateDuration, TriadDurationI18n } from '@/helpers/dates/lib/types'
import { CreateArrayFromRangeFixesType } from '@/helpers/number/lib/types'
import { StoreKeys } from '@/types/recoil.type'

export const useTimePicker = ({ visibilityStoreKey, maximumDate, minimumDate }: Lib.T.UseTimePickerArgs) => {
  const setVisibility = useSetRecoilState(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))
  const ranges = useMemo<Lib.T.Ranges>(createRanges, [])
  const prefixes = useMemo<Lib.T.Prefixes>(createPrefixes, [])

  function createRanges(): Lib.T.Ranges {
    const future: Lib.T.DateDetail = {
      year: maximumDate.getFullYear(),
      month: maximumDate.getMonth(),
      day: maximumDate.getDate(),
      hour: maximumDate.getHours(),
      minute: maximumDate.getMinutes(),
    }

    const now: Lib.T.DateDetail = {
      year: minimumDate.getFullYear(),
      month: minimumDate.getMonth(),
      day: minimumDate.getDate(),
      hour: minimumDate.getHours(),
      minute: minimumDate.getMinutes(),
    }

    return {
      year: [now.year, future.year],
      month: [now.month, 12],
      day: [now.day, 39],
      hour: [now.hour, 24],
      minute: [now.minute, 59],
    }
  }

  function createPrefixes(): Lib.T.Prefixes {
    return {
      month: { placement: 'prefix', type: 'month' },
      day: { placement: 'prefix', type: 'weekDay' },
    }
  }

  const modalProps: ModalProps = {
    onCancel: () => setVisibility(false),
    title: null,
    footer: null,
    width: 500,
  }

  return {
    get: { modalProps, ranges, prefixes },
  }
}

export const useColumn = ({ scrollableRef, ranges, prefixes, valuesStoreKey, minimumDate, rangeStoreKey, maximumDate, type, columnsStoreKeys }: Lib.T.UseColumnArgs) => {
  const [timePickerValues, setTimePickerValues] = useRecoilState(componentsAtoms.timePickerValues(valuesStoreKey, Dates.dateToDuration(minimumDate)))
  const setTimePickerColumnsRange = useSetRecoilState(componentsAtoms.timePickerColumnsRange(rangeStoreKey))
  const { year, month, day, hour, minute } = timePickerValues
  const { year: minYear, month: minMonth, day: minDay, hour: minHour, minute: minMinute } = useMemo<DateDuration>(() => Dates.dateToDuration(minimumDate), [minimumDate])
  const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour, minute: maxMinute } = useMemo<DateDuration>(() => Dates.dateToDuration(maximumDate), [maximumDate])
  const setTimePickerYears = useSetRecoilState(componentsAtoms.timePickerColumnsRange(columnsStoreKeys.yearsStoreKey))
  const setTimePickerMonths = useSetRecoilState(componentsAtoms.timePickerColumnsRange(columnsStoreKeys.monthsStoreKey))
  const setTimePickerDays = useSetRecoilState(componentsAtoms.timePickerColumnsRange(columnsStoreKeys.daysStoreKey))
  const setTimePickerHours = useSetRecoilState(componentsAtoms.timePickerColumnsRange(columnsStoreKeys.hoursStoreKey))
  const setTimePickerMinutes = useSetRecoilState(componentsAtoms.timePickerColumnsRange(columnsStoreKeys.minutesStoreKey))

  const handleValueChange = (integer: number, full: string) => {
    setTimePickerValues(_ => ({ ..._, [type]: integer }))

    // minute checks
    const range = Num.createArrayFromRange({
      range: integer === minHour ? ranges.minute : [1, 59],
      fixesType: prefixes.minute,
    })
    console.log(hour, minHour, maxHour)
    setTimePickerMinutes(range)
  }

  const fixScrollPosition = (currentScrollPosition: number) => {
    const { current: scrollable } = scrollableRef
    if (!scrollable) {
      return
    }

    const divided = currentScrollPosition / Lib.CO.ITEM_HEIGHT
    const integer = parseInt(divided.toString())
    const center = parseFloat(integer + '.5')

    const fixedPosition = (divided > center ? integer + 1 : integer) * Lib.CO.ITEM_HEIGHT

    scrollable.scrollTop = fixedPosition
    changeActiveItem(fixedPosition / Lib.CO.ITEM_HEIGHT + 1)
  }

  const changeActiveItem = (activeItemIndex: number) => {
    const { current: scrollable } = scrollableRef
    if (!scrollable) {
      return
    }

    const allItems = scrollable.querySelectorAll('li')

    if (activeItemIndex < 1) {
      activeItemIndex = 1
    }

    if (activeItemIndex > allItems.length) {
      activeItemIndex = allItems.length
    }

    allItems.forEach(item => item.classList.remove('active'))
    const activeItem = <HTMLLIElement>scrollable.querySelector(`li:nth-child(${activeItemIndex})`)
    if (!activeItem) {
      return
    }
    activeItem.classList.add('active')
    const { innerText } = activeItem
    handleValueChange(<number>Num.extract(innerText, true), innerText)
  }

  const addListeners = () => {
    const { current: scrollable } = scrollableRef
    if (!scrollable) {
      return
    }

    DOM.scrollWithStep(scrollable, Lib.CO.ITEM_HEIGHT, changeActiveItem)
    DOM.scrollByDrag({
      scrollable,
      type: 'vertical',
      callback: ([scrollTop]) => fixScrollPosition(scrollTop),
      triggerCallbackOn: ['all'],
    })
  }

  const scrollDown = () => {
    const { current: scrollable } = scrollableRef
    if (!scrollable) {
      return
    }

    scrollable.scrollTop = scrollable.scrollTop + Lib.CO.ITEM_HEIGHT
    changeActiveItem(scrollable.scrollTop / Lib.CO.ITEM_HEIGHT + 1)
  }

  const scrollUp = () => {
    const { current: scrollable } = scrollableRef
    if (!scrollable) {
      return
    }

    scrollable.scrollTop = scrollable.scrollTop - Lib.CO.ITEM_HEIGHT
    changeActiveItem(scrollable.scrollTop / Lib.CO.ITEM_HEIGHT + 1)
  }

  const createRange = (range: [number, number]) => {
    return Num.createArrayFromRange({ range, fixesType: prefixes[type] ?? prefixes[type] })
  }

  const setDefaultRange = () => {
    setTimePickerColumnsRange(createRange(ranges[type]))
  }

  useEffect(addListeners, [])
  useEffect(setDefaultRange, [])
  return { scrollDown, scrollUp }
}

export const useInfo = ({ valuesStoreKey, minimumDate }: Pick<Lib.T.InfoProps, 'valuesStoreKey' | 'minimumDate'>) => {
  const timePickerValues = useRecoilValue(componentsAtoms.timePickerValues(valuesStoreKey, Dates.dateToDuration(minimumDate)))

  const triadDurationI18n: TriadDurationI18n = {
    years: 'years',
    months: 'months',
    weeks: 'weeks',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  }

  const createInfo = (): string => {
    const [first, second, third] = Dates.triadDuration({
      duration: Dates.difference('now', timePickerValues),
      i18n: triadDurationI18n,
    })
    return `${first.value} ${first.title}, ${second.value} ${second.title} and ${third.value} ${third.title}`
  }

  const info = useMemo<string>(createInfo, [timePickerValues])
  return {
    get: { info },
  }
}
