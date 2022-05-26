import * as Lib from './lib'

/**
 *
 *
 *
 *
 * every functionalities that are needed for manipulation the DOM behavior
 */
export class DOM {
  /**
   *
   *
   *
   * appends a group of styles to an element
   */
  static addStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
    const styleKeys = <any[]>Object.keys(styles)
    const styleValues = <string[]>Object.values(styles)
    styleKeys.map((key, index) => (element.style[key] = styleValues[index]))
  }

  /**
   *
   *
   *
   * adds the draggable ability to an element
   */
  static makeElementDraggable({ element, areaSensitive, blackList }: Lib.T.MakeElementDraggableArgs) {
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0

    const dragMouseDown = (x: number, y: number) => {
      pos3 = x
      pos4 = y
      document.onmouseup = closeDragElement
      document.ontouchend = closeDragElement

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

  /**
   *
   *
   *
   * sets the scroll position of element with contentEditable attribute to the end
   */
  static setCursorPositionToTheEnd(paragraph: HTMLElement) {
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

  /**
   *
   *
   *
   * adds a limitation to an element with contentEditable attribute
   */
  static restrictInputValueLength(evt: InputEvent, max: number) {
    const element = <HTMLParagraphElement>evt.target
    const { innerText } = element

    if (innerText.length >= max) {
      element.innerText = innerText.substring(0, max)
    }

    DOM.setCursorPositionToTheEnd(element)
  }

  /**
   *
   *
   *
   * toggles an specific class for an element
   */
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

  /**
   *
   *
   *
   * switches between two classes for an element
   */
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

  /**
   *
   *
   *
   * prevents the default scroll functionality and scrolls with specific step instead
   */
  static scrollWithStep(scrollable: HTMLElement, steps: number, callback?: (activeItemIndex: number) => void) {
    scrollable.addEventListener('wheel', evt => {
      evt.preventDefault()
      const nextScrollPosition = (evt as any).wheelDelta > 0 ? scrollable.scrollTop - steps : scrollable.scrollTop + steps
      const activeItemIndex = nextScrollPosition / steps
      scrollable.scrollTop = nextScrollPosition
      callback?.(activeItemIndex + 1)
    })
  }

  /**
   *
   *
   *
   * adds the ability of drag to scroll to an element
   */
  static scrollByDrag({ scrollable, type, callback, triggerCallbackOn = ['all'] }: Lib.T.ScrollByDragArgs) {
    scrollable.style.cursor = 'grab'
    scrollable.style.touchAction = 'none'

    let top = 0
    let left = 0
    let x = 0
    let y = 0

    const mouseDownHandler = function (clientX: number, clientY: number) {
      scrollable.style.cursor = 'grabbing'
      scrollable.style.userSelect = 'none'
      left = scrollable.scrollLeft
      top = scrollable.scrollTop
      x = clientX
      y = clientY
      document.onmousemove = evt => mouseMoveHandler(evt.clientX, evt.clientY)
      document.onmouseup = mouseUpHandler
      document.ontouchmove = evt => mouseMoveHandler(evt.touches[0].pageX, evt.touches[0].pageY)
      document.ontouchend = mouseUpHandler
      document.ontouchcancel = mouseUpHandler
      triggerCallback('start')
    }

    const mouseMoveHandler = function (clientX: number, clientY: number) {
      const dx = clientX - x
      const dy = clientY - y
      if (type === 'all' || type === 'vertical') {
        scrollable.scrollTop = top - dy
      }
      if (type === 'all' || type === 'horizontal') {
        scrollable.scrollLeft = left - dx
      }
      triggerCallback('move')
    }

    const mouseUpHandler = function () {
      scrollable.style.cursor = 'grab'
      scrollable.style.removeProperty('user-select')
      document.onmousemove = null
      document.onmouseup = null

      document.ontouchmove = null

      document.ontouchcancel = null
      document.ontouchend = null
      triggerCallback('stop')
    }

    const triggerCallback = (type: Lib.T.ScrollByDragTriggers) => {
      if (callback && (triggerCallbackOn.includes(type) || triggerCallbackOn.includes('all'))) {
        const { scrollTop, scrollLeft } = scrollable
        callback([scrollTop, scrollLeft])
      }
    }

    scrollable.onmousedown = evt => mouseDownHandler(evt.clientX, evt.clientY)
    scrollable.ontouchstart = evt => mouseDownHandler(evt.touches[0].pageX, evt.touches[0].pageY)
  }
}
