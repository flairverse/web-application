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
        return compileTextDown(<Lib.T.Elements.Text>element)
      }

      case 'post': {
        return compilePostDown(<Lib.T.Elements.Post>element)
      }

      case 'mention': {
        return compileMentionDown(<Lib.T.Elements.Mention>element)
      }

      case 'question': {
        return compileQuestionDown(<Lib.T.Elements.Question>element)
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
    DOM.addStyles(element, { top, left, fontSize: fontSize, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element, areaSensitive })
    return element
  }

  /**
   *
   *
   *
   * compiles a post object to actual element
   */
  const compilePostDown = ({ id, position: { left, top }, rotate, type, user, post, effect }: Lib.T.Elements.Post): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.post({ user, post }))
    const element = addFrameTo(node, [], 'post', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element, areaSensitive })
    return element
  }

  /**
   *
   *
   *
   * compiles a mention object to actual element
   */
  const compileMentionDown = ({
    effect,
    fullName,
    id,
    position: { left, top },
    rotate,
    type,
    userID,
    username,
    job,
    profile,
    hasNap,
    seen,
    followers,
    subscribes,
  }: Lib.T.Elements.Mention): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.mention({ fullName, username, job, profile, userID, hasNap, seen, followers, subscribes }))
    const element = addFrameTo(node, [], 'mention', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element, areaSensitive })
    return element
  }

  /**
   *
   *
   *
   * compiles a question object to actual element
   */
  const compileQuestionDown = ({ effect, hint, id, position: { left, top }, question, questionerUser, rotate, type }: Lib.T.Elements.Question): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.question({ hint, question, questionerUser }))
    const element = addFrameTo(node, ['editQuestionAndHint'], 'question', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element, areaSensitive })
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
      const frame = Action.getElement(evt)
      if (!frame) return

      const paragraph = frame.getElementsByTagName('p')[0]
      if (!paragraph) return

      paragraph.contentEditable = 'true'

      DOM.setCursorPositionToTheEnd(paragraph)

      const currentEffect = <Lib.T.TextEffects>frame.className.split(' ').pop()

      if (currentEffect !== 'no-effect') {
        frame.classList.remove(currentEffect)
      }

      paragraph.addEventListener('blur', () => {
        paragraph.contentEditable = 'false'
        frame.focus()

        if (currentEffect !== 'no-effect') {
          frame.classList.add(currentEffect)
        }
      })
    }

    static editQuestionAndHint(evt: MouseEvent) {
      const frame = Action.getElement(evt)
      if (!frame) return

      const question = <HTMLParagraphElement | null>frame.querySelector('.questionText')
      if (!question) return

      question.contentEditable = 'true'

      DOM.setCursorPositionToTheEnd(question)

      function restrictLength(evt: Event) {
        DOM.restrictInputValueLength(<InputEvent>evt, 300)
      }

      question.addEventListener('input', restrictLength, false)

      question.addEventListener('blur', () => {
        question.contentEditable = 'false'
        question.removeEventListener('input', restrictLength, false)
        frame.focus()
      })
    }
  }

  return { compileDown, compileAllDown }
}