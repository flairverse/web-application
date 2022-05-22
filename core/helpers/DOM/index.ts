import * as Lib from './lib'

export class DOM {
  static addStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
    const styleKeys = <any[]>Object.keys(styles)
    const styleValues = <string[]>Object.values(styles)
    styleKeys.map((key, index) => (element.style[key] = styleValues[index]))
  }

  static makeElementDraggable({ element, areaSensitive, blackList }: Lib.T.MakeElementDraggableArgs) {
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
        const { clientX, clientY } = evt
        elementDrag(clientX, clientY)
      }

      document.ontouchmove = evt => {
        evt = evt || window.event
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
      const target = <HTMLDivElement | null>evt.target

      if (target && blackList) {
        for (const blocked of blackList) {
          if (target.classList.contains(blocked)) {
            return
          }
        }
      }

      evt = evt || window.event
      dragMouseDown(evt.clientX, evt.clientY)
    }

    element.ontouchstart = evt => {
      evt = evt || window.event
      const { pageX, pageY } = evt.touches[0]
      dragMouseDown(pageX, pageY)
    }
  }

  /**
   *
   *
   *
   * converts a DOM string to actual DOM
   */
  static DOMStringToNode<T = HTMLElement>(DOMString: string) {
    const document = new DOMParser().parseFromString(DOMString, 'text/html')
    return <T>(<unknown>document.body.firstChild!)
  }

  static setCursorPositionToTheEnd(paragraph: HTMLParagraphElement) {
    if (paragraph.firstChild) {
      try {
        const range = document.createRange()
        const selection = window.getSelection()
        range.setStart(paragraph.firstChild, paragraph.innerText.trim().length)
        range.collapse(true)

        if (selection) {
          selection.removeAllRanges()
          selection.addRange(range)
        }
      } catch (error) {}
    }
  }

  static restrictInputValueLength(evt: InputEvent, max: number) {
    const element = <HTMLParagraphElement>evt.target
    const { innerText } = element

    if (innerText.length >= max) {
      element.innerText = innerText.substring(0, max)
    }

    DOM.setCursorPositionToTheEnd(element)
  }

  static toggleClass(element: HTMLElement, className: string) {
    const { classList } = element

    // remove className
    if (classList.contains(className)) {
      element.classList.remove(className)
    }
    // add className
    else {
      element.classList.add(className)
    }
  }

  static toggleClasses(element: HTMLElement, class1: string, class2: string) {
    const { classList } = element

    // remove class1 and add class2
    if (classList.contains(class1)) {
      element.classList.remove(class1)
      element.classList.add(class2)
    }
    // remove class2 and add class1
    else if (classList.contains(class2)) {
      element.classList.remove(class2)
      element.classList.add(class1)
    }
    // add class1
    else {
      element.classList.add(class1)
    }
  }
}
