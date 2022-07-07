import { numeralBreakpoints } from '@/constants/style-variables.constant'
import { MouseEvent, TouchEvent, useRef } from 'react'
import * as Lib from '.'

export const useLongTap = ({ timeout = 500, callback, popup, popupRef }: Lib.T.UseLongTapArgs) => {
  const timeoutID = useRef<number>(-1)

  const handleMouseDown = (evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | TouchEvent<HTMLDivElement>) => {
    const { currentTarget } = evt
    const { parentElement, firstChild } = currentTarget

    timeoutID.current = window.setTimeout(() => {
      const { activeElement } = document
      const possibleTargets = [parentElement, firstChild, currentTarget]

      if (possibleTargets.indexOf(activeElement) >= 0) {
        callback?.()

        if (popup && popupRef.current) {
          if (popup.mobileOnly) {
            if (window.innerWidth <= numeralBreakpoints.md) {
              popupRef.current.click()
            }
          } else {
            popupRef.current.click()
          }
        }
      }
    }, timeout)
  }

  const handleMouseUp = () => {
    window.clearTimeout(timeoutID.current)
    timeoutID.current = -1
    ;(<HTMLDivElement | null>document.activeElement)?.blur()
  }

  return { handleMouseDown, handleMouseUp }
}
