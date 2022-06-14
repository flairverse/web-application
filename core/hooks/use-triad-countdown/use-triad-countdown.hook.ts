import { Dates } from '@/helpers/dates'
import { TriadDistanceI18n, TriadDistanceReturn } from '@/helpers/dates/lib/dates.types'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { useSSREffect } from '../use-ssr-effect'
import * as Lib from './lib'

const initialRefsState: Lib.T.RefsState = {
  first1: null,
  first2: null,
  second1: null,
  second2: null,
  third1: null,
  third2: null,
  title1: null,
  title2: null,
  title3: null,
}

export const useTriadCountdown = ({ defaultValues, triadRefs, titleRefs, containerRef }: Lib.T.UseTriadCountdownArgs) => {
  const [firstRef, secondRef, thirdRef] = triadRefs
  const [title1Ref, title2Ref, title3Ref] = titleRefs
  const { firstLetter: ref1Letter1, secondLetter: ref1Letter2 } = firstRef
  const { firstLetter: ref2Letter1, secondLetter: ref2Letter2 } = secondRef
  const { firstLetter: ref3Letter1, secondLetter: ref3Letter2 } = thirdRef
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [refs, setRefs] = useState<Lib.T.RefsState>(initialRefsState)
  const { first1, first2, second1, second2, third1, third2, title1, title2, title3 } = refs

  const findElement = (ref: Lib.T.Ref, parentContainer: HTMLElement | Document): HTMLElement | null => {
    if (typeof ref === 'string') {
      return parentContainer.querySelector(ref)
    }
    return ref.current
  }

  const findContainer = () => setContainer(findElement(containerRef, document))

  const findElements = () => {
    if (!container) {
      return
    }
    setRefs({
      first1: findElement(ref1Letter1, container),
      first2: findElement(ref1Letter2, container),
      second1: findElement(ref2Letter1, container),
      second2: findElement(ref2Letter2, container),
      third1: findElement(ref3Letter1, container),
      third2: findElement(ref3Letter2, container),
      title1: findElement(title1Ref, container),
      title2: findElement(title2Ref, container),
      title3: findElement(title3Ref, container),
    })
  }

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

    if (!first1 || !first2 || !second1 || !second2 || !third1 || !third2 || !title1 || !title2 || !title3) {
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

  useSSREffect(findContainer, [])
  useSSREffect(findElements, [container])
  useSSREffect(startTimer, [defaultValues])
}
