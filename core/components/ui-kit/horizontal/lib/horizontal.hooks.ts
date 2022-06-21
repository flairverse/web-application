import { DragEvent, useState } from 'react'

export const useHorizontal = (scale: boolean, speed: number) => {
  const [isDown, setIsDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const onMouseDown = (e: DragEvent<HTMLDivElement>) => {
    setIsDrag(false)
    setIsDown(true)
    if (scale) {
      e.currentTarget.classList.add('active')
    }
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const onMouseLeave = (e: DragEvent<HTMLDivElement>) => {
    setIsDown(false)
    if (scale) {
      e.currentTarget.classList.remove('active')
    }
  }

  const onMouseUp = (e: DragEvent<HTMLDivElement>) => {
    setIsDown(false)
    if (scale) {
      e.currentTarget.classList.remove('active')
    }
  }

  const onMouseMove = (e: DragEvent<HTMLDivElement>) => {
    setIsDrag(true)
    if (!isDown) {
      return
    }
    e.stopPropagation()
    const x = e.pageX - e.currentTarget.offsetLeft
    const walk = (x - startX) * speed
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  const onItemClick = (callback: Function) => {
    if (isDrag) {
      setIsDrag(false)
      return
    }
    callback()
  }

  return {
    on: {
      mouseDown: onMouseDown,
      mouseLeave: onMouseLeave,
      mouseUp: onMouseUp,
      mouseMove: onMouseMove,
      itemClick: onItemClick,
    },
  }
}
