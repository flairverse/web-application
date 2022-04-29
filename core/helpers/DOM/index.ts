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

    const dragMouseDown = (e: MouseEvent) => {
      e = e || window.event
      e.preventDefault()
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      document.onmousemove = elementDrag
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

    const elementDrag = (e: MouseEvent) => {
      e = e || window.event
      e.preventDefault()
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

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

    element.onmousedown = dragMouseDown
  }
}
