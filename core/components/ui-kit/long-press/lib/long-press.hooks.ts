import { MouseEvent, useState } from 'react'
import * as Lib from '.'

export const useLongPress = ({ timeout = 150, callback, disabled }: Lib.T.UseLongPressArgs) => {
  const [intervalID, setIntervalID] = useState<number | null>(null)

  let isMouseDown = false

  const handleMouseDown = () => {
    if (disabled) {
      return
    }

    isMouseDown = true

    setTimeout(() => {
      if (isMouseDown) {
        const ID = window.setInterval(callback, timeout)
        setIntervalID(ID)
      }
    }, 700)
  }

  const handleMouseUp = () => {
    isMouseDown = false
    handleMouseUpOrLeave()
  }

  const handleMouseUpOrLeave = () => {
    isMouseDown = false
    if (intervalID) {
      window.clearInterval(intervalID)
      setIntervalID(null)
    }
  }

  const handleClick = (evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    evt.stopPropagation()
    if (disabled) {
      return
    }
    callback()
  }

  return { handleMouseDown, handleMouseUpOrLeave, handleClick, handleMouseUp }
}
