import { HTMLAttributes } from 'react'
import * as Lib from './lib'

export class DOM {
  static addStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
    const styleKeys = <any[]>Object.keys(styles)
    const styleValues = <string[]>Object.values(styles)
    styleKeys.map((key, index) => (element.style[key] = styleValues[index]))
  }

  static addAttrs<T extends HTMLElement = HTMLElement>(element: HTMLElement, attributes: HTMLAttributes<T> & { [keyName: string]: any }) {
    const attrKeys = Object.keys(attributes)
    const attrValues = Object.values(attributes)
    attrKeys.map((key, index) => ((element as any)[key] = attrValues[index]))
  }

  static makeElementDraggable({ element, areaSensitive }: Lib.T.MakeElementDraggableArgs) {
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0

    const dragMouseDown = (x: number, y: number) => {
      pos3 = x
      pos4 = y
      document.onmouseup = closeDragElement
      document.ontouchcancel = closeDragElement

      document.onmousemove = evt => {
        evt = evt || window.event
        evt.preventDefault()
        const { clientX, clientY } = evt
        elementDrag(clientX, clientY)
      }
      document.ontouchmove = evt => {
        evt = evt || window.event
        evt.preventDefault()
        const { pageX, pageY } = evt.touches[0]
        elementDrag(pageX, pageY)
      }
    }

    const setRestrictedPositions = () => {
      const { clientWidth: areaWidth, clientHeight: areaHeight } = <HTMLDivElement>document.querySelector(areaSensitive!.target)!
      const { clientWidth: elementWidth, clientHeight: elementHeight } = element
      const maxLeft = areaWidth - elementWidth - 5
      const maxTop = areaHeight - elementHeight - 5

      let newTop = element.offsetTop - pos2
      let newLeft = element.offsetLeft - pos1

      if (newTop < 0) newTop = 0
      if (newTop > maxTop) newTop = maxTop

      if (newLeft < 0) newLeft = 0
      if (newLeft > maxLeft) newLeft = maxLeft

      element.style.top = newTop + 'px'
      element.style.left = newLeft + 'px'
    }

    const elementDrag = (x: number, y: number) => {
      pos1 = pos3 - x
      pos2 = pos4 - y
      pos3 = x
      pos4 = y

      if (areaSensitive && areaSensitive.sensitiveOnMove) {
        setRestrictedPositions()
      } else {
        element.style.top = element.offsetTop - pos2 + 'px'
        element.style.left = element.offsetLeft - pos1 + 'px'
      }
    }

    const closeDragElement = () => {
      document.onmouseup = null
      document.onmousemove = null

      if (areaSensitive && areaSensitive.sensitiveOnMoveEnd) {
        setRestrictedPositions()
      }
    }

    element.onmousedown = evt => {
      evt = evt || window.event
      evt.preventDefault()
      dragMouseDown(evt.clientX, evt.clientY)
    }

    element.ontouchstart = evt => {
      evt = evt || window.event
      evt.preventDefault()
      const { pageX, pageY } = evt.touches[0]
      dragMouseDown(pageX, pageY)
    }
  }
}
