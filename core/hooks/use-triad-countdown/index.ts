import { Dates } from '@/helpers/dates'
import { TriadDistance, TriadDistanceI18n, TriadDistanceReturn } from '@/helpers/dates/lib/types'
import moment, { Moment } from 'moment'
import { useEffect } from 'react'
import * as Lib from './lib'

export const useTriadCountdown = ({ defaultValues, triadRefs, titleRefs }: Lib.T.UseTriadCountdownArgs) => {
  const [firstRef, secondRef, thirdRef] = triadRefs
  const [title1Ref, title2Ref, title3Ref] = titleRefs
  const { firstLetter: ref1Letter1, secondLetter: ref1Letter2 } = firstRef
  const { firstLetter: ref2Letter1, secondLetter: ref2Letter2 } = secondRef
  const { firstLetter: ref3Letter1, secondLetter: ref3Letter2 } = thirdRef

  const triadDistanceIntl: TriadDistanceI18n = {
    years: 'years',
    months: 'months',
    weeks: 'weeks',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  }

  const createDistance = (time: Moment) => {
    const dateDetail = Dates.momentToDetail(time)
    const difference = Dates.difference('now', dateDetail)
    const distance = Dates.triadDistance({ duration: difference, i18n: triadDistanceIntl })
    return distance
  }

  const updateNode = (element: HTMLElement, value: string) => {
    if (element.innerHTML !== value) {
      element.innerHTML = value
    }
  }

  const updateDOM = (triadInfo: TriadDistanceReturn) => {
    const [firstInfo, secondInfo, thirdInfo] = triadInfo
    const { current: first1 } = ref1Letter1
    const { current: first2 } = ref1Letter2
    const { current: second1 } = ref2Letter1
    const { current: second2 } = ref2Letter2
    const { current: third1 } = ref3Letter1
    const { current: third2 } = ref3Letter2
    const { current: title1 } = title1Ref
    const { current: title2 } = title2Ref
    const { current: title3 } = title3Ref

    if (!first1 || !first2 || !second1 || !second2 || !third1 || !third2 || !title1 || !title2 || !title3) {
      console.log({ first1, first2, second1, second2, third1, third2, title1, title2, title3 })
      return
    }

    const [value1Letter1, value1Letter2] = firstInfo.value.toString().padStart(2, '0').split('')
    const [value2Letter1, value2Letter2] = secondInfo.value.toString().padStart(2, '0').split('')
    const [value3Letter1, value3Letter2] = thirdInfo.value.toString().padStart(2, '0').split('')

    updateNode(title1, firstInfo.title)
    updateNode(title2, secondInfo.title)
    updateNode(title3, thirdInfo.title)

    updateNode(first1, value1Letter1)
    updateNode(first2, value1Letter2)

    updateNode(second1, value2Letter1)
    updateNode(second2, value2Letter2)

    updateNode(third1, value3Letter1)
    updateNode(third2, value3Letter2)
  }

  const startTimer = () => {
    const { year, month, day, hour, minute, second } = defaultValues
    const time = moment(new Date(year, month, day, hour, minute, 0, 0))
    const firstDistance = createDistance(time)
    const { key: thirdInfoKey } = firstDistance[2]
    const updateTimeout = Dates.dateKeyToMilliseconds(thirdInfoKey)

    updateDOM(firstDistance)

    const updaterIntervalID = window.setInterval(() => {
      time.subtract(1, 'seconds')
      const distance = createDistance(time)
      updateDOM(distance)
    }, updateTimeout)

    return () => {
      window.clearInterval(updaterIntervalID)
    }
  }

  useEffect(startTimer, [defaultValues])
}
