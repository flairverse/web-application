import * as Lib from '../'
import { DOM } from '@/helpers/DOM'
import { MakeElementDraggableSensitive } from '@/helpers/DOM/lib/types'

export const useBoardCompiler = (boardId: string) => {
  const areaSensitive: MakeElementDraggableSensitive = {
    target: `#${boardId}`,
    sensitiveOnMove: true,
  }

  const compileDown = (element: Lib.T.Elements.All): Element => {
    switch (element.type) {
      default: // <<--------------------------------------------------------------------------------------------------[[temporary]]
      case 'text': {
        return compileTextDown(element as Lib.T.Elements.Text)
      }
    }
  }

  const compileDownAll = (elements: Lib.T.Elements.All[]): Element[] => {
    const nodes: Element[] = []
    for (const element of elements) {
      compileDown(element)
    }
    return nodes
  }

  const compileTextDown = ({ type, id, text, color, position: { left, top }, fontSize }: Lib.T.Elements.Text): Element => {
    const node = document.createElement('p')
    node.innerText = 'Type something here...'
    const element = addFrameTo(node, ['editInnerText'])
    DOM.addStyles(element, { top, left, color, fontSize: fontSize + 'pt' })
    element.id = id
    element.classList.add(type)
    DOM.makeElementDraggable({ element: element, areaSensitive })
    return element
  }

  const addFrameTo = (element: HTMLElement, actions: Lib.T.ElementFrameActionTypes[]) => {
    actions = [...actions, 'delete']
    const frame = document.createElement('div')
    frame.tabIndex = 0
    frame.classList.add('frame')

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

  return { compileDown, compileDownAll }
}

class Action {
  static getElement(evt: MouseEvent) {
    return <HTMLDivElement | null>(<HTMLSpanElement>evt.currentTarget)?.parentNode?.parentNode
  }

  static ['delete'](evt: MouseEvent) {
    const element = Action.getElement(evt)
    element?.remove()
  }

  static ['editInnerText'](evt: MouseEvent) {
    const element = Action.getElement(evt)
    if (!element) return

    const paragraph = element.getElementsByTagName('p')[0]
    if (!paragraph) return

    paragraph.contentEditable = 'true'
    paragraph.focus()
    paragraph.addEventListener('blur', () => (paragraph.contentEditable = 'false'))
  }
}
