import { Dates } from '@/helpers/dates'
import { TriadDistance, TriadDistanceI18n, TriadDistanceReturn } from '@/helpers/dates/lib/types'
import moment, { Moment } from 'moment'
import { useEffect } from 'react'
import * as Lib from './lib'

export const useTriadCountdown = ({ defaultValues, triadRefs }: Lib.T.UseTriadCountdownArgs) => {
  const [firstRef, secondRef, thirdRef] = triadRefs

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
    return ` ${info.value} ${info.title} `
  }

  const createDistance = (time: Moment) => {
    const dateDetail = Dates.momentToDetail(time)
    const difference = Dates.difference('now', dateDetail)
    const distance = Dates.triadDistance({ duration: difference, i18n: triadDistanceIntl })
    return distance
  }

  const updateDOM = (triadInfo: TriadDistanceReturn) => {
    const [firstInfo, secondInfo, thirdInfo] = triadInfo
    const { current: first } = firstRef
    const { current: second } = secondRef
    const { current: third } = thirdRef

    if (!first || !second || !third) {
      return
    }

    first.innerHTML = createInfo(firstInfo)
    second.innerHTML = createInfo(secondInfo)
    third.innerHTML = createInfo(thirdInfo)
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
