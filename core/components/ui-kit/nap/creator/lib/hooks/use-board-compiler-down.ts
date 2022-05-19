import * as Lib from '..'
import { DOM } from '@/helpers/DOM'
import { MakeElementDraggableSensitive } from '@/helpers/DOM/lib/types'
import { useSetRecoilState } from 'recoil'
import { createNapAtoms } from '@/store/atoms'

export const useBoardCompiler = (boardId: string) => {
  const setActiveOption = useSetRecoilState(createNapAtoms.activeOption)
  const setActiveItemID = useSetRecoilState(createNapAtoms.activeItemID)

  // const areaSensitive: MakeElementDraggableSensitive = {
  //   target: `#${boardId}`,
  //   sensitiveOnMove: true,
  // }

  const areaSensitive = undefined

  /**
   *
   *
   *
   * decides which compiler to be used
   */
  const compileDown = (element: Lib.T.Elements.All): HTMLDivElement => {
    switch (element.type) {
      default: // <<--------------------------------------------------------------------------------------------------[[temporary]]
      case 'text': {
        return compileTextDown(element as Lib.T.Elements.Text)
      }

      case 'post': {
        return compilePostDown(element as Lib.T.Elements.Post)
      }
    }
  }

  /**
   *
   *
   *
   * compiles many object of `Lib.T.Elements.All[]` to actual elements
   */
  const compileAllDown = (elements: Lib.T.Elements.All[]): Element[] => {
    const nodes: Element[] = []
    for (const element of elements) {
      compileDown(element)
    }
    return nodes
  }

  /**
   *
   *
   *
   * compiles a text object to actual element
   */
  const compileTextDown = ({ type, id, text, position: { left, top }, fontSize, effect, rotate }: Lib.T.Elements.Text): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.text(text))
    node.addEventListener('keyup', () => node.setAttribute('data-text', node.innerText))
    const element = addFrameTo(node, ['editInnerText'], 'text', id)
    DOM.addStyles(element, { top, left, fontSize: fontSize, transform: `rotate(${rotate})` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element: element, areaSensitive })
    return element
  }

  /**
   *
   *
   *
   * compiles a post object to actual element
   */
  const compilePostDown = ({ id, position: { left, top }, rotate, type, user, post, style }: Lib.T.Elements.Post): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.post({ user, post }))
    const element = addFrameTo(node, [], 'post', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate})` })
    element.id = id
    element.classList.add(type)
    element.classList.add(style)
    DOM.makeElementDraggable({ element: element, areaSensitive })
    return element
  }

  /**
   *
   *
   *
   * adds frame with custom buttons to an element
   */
  const addFrameTo = (element: HTMLElement, actions: Lib.T.ElementFrameActionTypes[], type: Lib.T.Options, id: string) => {
    actions = [...actions, 'delete']
    const frame = document.createElement('div')
    frame.tabIndex = 0
    frame.classList.add('frame')
    frame.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.TYPE, type)
    frame.addEventListener('focus', () => {
      setActiveOption(type)
      setActiveItemID(id)
    })

    const buttons = document.createElement('div')
    buttons.classList.add('buttons')

    for (const action of actions) {
      const button = document.createElement('span')
      button.className = action
      button.onclick = Action[action]
      button.innerHTML = Lib.CO.ICONS[action]
      buttons.appendChild(button)
    }

    frame.appendChild(buttons)
    frame.appendChild(element)
    return frame
  }

  /**
   *
   *
   *
   * Actions will be used on frame buttons
   */
  class Action {
    static getElement(evt: MouseEvent) {
      return <HTMLDivElement | null>(<HTMLSpanElement>evt.currentTarget)?.parentNode?.parentNode
    }

    static delete(evt: MouseEvent) {
      const element = Action.getElement(evt)
      setActiveItemID(null)
      element?.remove()
    }

    static editInnerText(evt: MouseEvent) {
      const element = Action.getElement(evt)
      if (!element) return

      const paragraph = element.getElementsByTagName('p')[0]
      if (!paragraph) return

      paragraph.contentEditable = 'true'

      // set cursor position to the end
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

      const frame = <HTMLDivElement>paragraph.parentNode
      const currentEffect = <Lib.T.TextEffects>frame.className.split(' ').pop()

      if (currentEffect !== 'no-effect') {
        frame.classList.remove(currentEffect)
      }

      paragraph.addEventListener('blur', () => {
        paragraph.contentEditable = 'false'
        ;(<HTMLDivElement | null>paragraph.parentNode)?.focus()

        if (currentEffect !== 'no-effect') {
          frame.classList.add(currentEffect)
        }
      })
    }
  }

  return { compileDown, compileAllDown }
}
