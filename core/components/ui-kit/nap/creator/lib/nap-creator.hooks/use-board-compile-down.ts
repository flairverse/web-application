import * as storeKeys from '@/constants/store-keys.constants'
import { DOM } from '@/helpers/DOM'
import { componentTimePickerAtoms } from '@/store/atomFamilies'
import { pageCreateNapAtoms } from '@/store/atoms'
import { RefObject } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useBoardCompileDown = (boardRef: RefObject<HTMLDivElement>) => {
  const setActiveOption = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const setActiveItemID = useSetRecoilState(pageCreateNapAtoms.activeItemID)
  const setEditLinkPopupVisibility = useSetRecoilState(pageCreateNapAtoms.editLinkPopupVisibility)
  const setTimePickerVisibility = useSetRecoilState(
    componentTimePickerAtoms.timePickerPopupVisibility(storeKeys.PAGE__CREATE_NAP___TIME_PICKER_POPUP),
  )
  const setEditLinkPopupLinkTextAndRef = useSetRecoilState(pageCreateNapAtoms.editLinkPopupLinkTextAndRef)
  const NapStorage = Lib.H.useNapStorage(boardRef)

  /**
   *
   *
   *
   * decides which compiler to be used
   */
  const compileDown = (element: Lib.T.Elements.All): HTMLDivElement => {
    switch (element.type) {
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

      case 'quiz': {
        return compileQuizDown(<Lib.T.Elements.Quiz>element)
      }

      case 'reminder': {
        return compileReminderDown(<Lib.T.Elements.Reminder>element)
      }

      case 'gif': {
        return compileGifDown(<Lib.T.Elements.Gif>element)
      }

      case 'image': {
        return compileImageDown(<Lib.T.Elements.Image>element)
      }

      case 'link': {
        return compileLinkDown(<Lib.T.Elements.Link>element)
      }

      case 'more|less': {
        return document.createElement('div')
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
   * compiles all shared attributes of an item object
   */
  const compileSharedDown = ({
    effect,
    id,
    rotate,
    type,
    node,
    actionTypes,
    position,
    blackList,
    effectHolders,
    sync = true,
  }: Lib.T.CompileSharedDwnArgs): HTMLDivElement => {
    const { left, top } = position
    const element = addFrameTo(node, actionTypes || [], type, id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })

    element.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION, rotate.toString())
    element.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT, effect)

    effectHolders?.forEach(effectHolder => {
      const holder = element.querySelector(effectHolder)
      holder?.classList.add(effect)
      holder?.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT, effect)
    })

    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    DOM.makeElementDraggable({ element, onDragEnd: () => sync && NapStorage.update(element), blackList })
    return element
  }

  /**
   *
   *
   *
   * compiles a text object to actual element
   */
  const compileTextDown = ({ type, id, text, position, fontSize, effect, rotate }: Lib.T.Elements.Text): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.text(text))
    node.addEventListener('keyup', () => node.setAttribute('data-text', node.innerText))
    node.addEventListener('blur', () => NapStorage.update(element), false)
    const element = compileSharedDown({ actionTypes: ['editInnerText'], effect, id, node, position, rotate, type })
    DOM.addStyles(element, { fontSize })
    return element
  }

  /**
   *
   *
   *
   * compiles a post object to actual element
   */
  const compilePostDown = ({ id, position, rotate, type, effect, ...rest }: Lib.T.Elements.Post): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.post(rest))
    const element = compileSharedDown({ effect, id, node, position, rotate, type, effectHolders: ['.napElement'] })
    return element
  }

  /**
   *
   *
   *
   * compiles a mention object to actual element
   */
  const compileMentionDown = ({ effect, id, position, rotate, type, ...rest }: Lib.T.Elements.Mention): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.mention(rest))
    const element = compileSharedDown({ effect, id, node, position, rotate, type, effectHolders: ['.napElement'] })
    return element
  }

  /**
   *
   *
   *
   * compiles a question object to actual element
   */
  const compileQuestionDown = ({ effect, id, position, rotate, type, ...rest }: Lib.T.Elements.Question): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.question(rest))
    node.querySelector('.questionText')?.addEventListener('blur', () => NapStorage.update(element))
    node.querySelector('.hintSection')?.addEventListener('blur', () => NapStorage.update(element))
    const element = compileSharedDown({
      effect,
      id,
      node,
      position,
      rotate,
      type,
      blackList: ['questionText', 'hintSection'],
      effectHolders: ['.napElement'],
    })
    activateFrameByFocusingContentEditables(element)
    return element
  }

  /**
   *
   *
   *
   * compiles a link object to actual element
   */
  const compileLinkDown = ({ type, id, link, position, linkFontSize, effect, rotate, href }: Lib.T.Elements.Link): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.link(link, href))
    node.addEventListener('keyup', () => node.setAttribute('data-text', node.innerText))
    node.addEventListener('blur', () => NapStorage.update(element), false)
    const element = compileSharedDown({ effect, id, node, position, rotate, type, actionTypes: ['editInnerText', 'editLinkRef'] })
    DOM.addStyles(element, { fontSize: linkFontSize })
    return element
  }

  /**
   *
   *
   *
   * compiles a quiz object to actual element
   */
  const compileQuizDown = ({ effect, id, position, rotate, type, ...rest }: Lib.T.Elements.Quiz): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.quiz(rest))
    const element = compileSharedDown({
      effect,
      id,
      node,
      position,
      rotate,
      type,
      blackList: ['questionText', 'hintSection', 'answerText'],
      effectHolders: ['.napElement'],
    })
    node.querySelector('.questionText')?.addEventListener('blur', () => NapStorage.update(element))
    node.querySelector('.hintSection')?.addEventListener('blur', () => NapStorage.update(element))
    activateFrameByFocusingContentEditables(element)

    const answerNumbers = <NodeListOf<HTMLDivElement>>element.querySelectorAll('.answer > span')
    const answerContents = <NodeListOf<HTMLDivElement>>element.querySelectorAll('.answer > p')

    answerNumbers.forEach(answerNumber =>
      answerNumber.addEventListener('click', () => {
        switchCorrectAnswer(answerNumber)
        NapStorage.update(element)
      }),
    )

    answerContents.forEach(answerContent => {
      answerContent.addEventListener('input', evt => toggleNextAnswer(<InputEvent>evt))
      answerContent.addEventListener('blur', _evt => NapStorage.update(element))
    })

    function switchCorrectAnswer(answerNumber: HTMLDivElement) {
      const answerBox = <HTMLDivElement>answerNumber.parentNode!
      const answerActivation = answerBox.getAttribute('data-activation')!

      if (answerActivation === 'inactive') {
        return
      }

      const allAnswerBoxes = answerBox.parentNode!.querySelectorAll('.answer')
      allAnswerBoxes.forEach(answer => answer.classList.remove('true', 'false'))
      answerBox.classList.add('true')
    }

    function toggleNextAnswer(evt: InputEvent) {
      const answer = <HTMLDivElement>evt.target
      const { innerText: answerText } = answer
      const answerIndex = parseInt(answer.getAttribute('data-index')!)
      const answerContainer = <HTMLDivElement>answer.parentNode!
      const nextAnswer = <HTMLDivElement>answerContainer.nextElementSibling

      if (answerIndex !== 0 && answerIndex !== 3) {
        if (answerText) {
          nextAnswer.style.display = 'flex'
        } else {
          nextAnswer.style.display = 'none'
        }
      }

      if (answerIndex !== 0 && answerIndex !== 1) {
        if (answerText) {
          answerContainer.setAttribute('data-activation', 'active')
        } else {
          answerContainer.setAttribute('data-activation', 'inactive')
        }
      }
    }

    return element
  }

  /**
   *
   *
   *
   * compiles a reminder object to actual element
   */
  const compileReminderDown = ({ effect, id, position, reminderName, rotate, type, endTime }: Lib.T.Elements.Reminder): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.reminder({ reminderName, endTime }))
    node.querySelector('.reminderName')?.addEventListener('blur', () => NapStorage.update(element), false)
    const element = compileSharedDown({
      effect,
      id,
      node,
      position,
      rotate,
      type,
      actionTypes: ['changeReminderValue', 'noSyncDelete'],
      blackList: ['reminderName'],
      sync: false,
    })
    activateFrameByFocusingContentEditables(element)
    return element
  }

  /**
   *
   *
   *
   * compiles a gif object to actual element
   */
  const compileGifDown = ({ effect, gifURL, id, position, rotate, type, gifWidth }: Lib.T.Elements.Gif): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.gif({ gifURL, gifWidth }))
    const element = compileSharedDown({ effect, id, node, position, rotate, type, effectHolders: ['.napElement'] })
    return element
  }

  /**
   *
   *
   *
   * compiles a gif object to actual element
   */
  const compileImageDown = ({ effect, imageURL, id, position, rotate, type, imageWidth }: Lib.T.Elements.Image): HTMLDivElement => {
    const node = DOM.DOMStringToNode(Lib.CO.ITEMS_DOM_STRING.image({ imageURL, imageWidth }))
    const element = compileSharedDown({ effect, id, node, position, rotate, type, effectHolders: ['.napElement'] })
    return element
  }

  /**
   *
   *
   *
   * adds frame with custom buttons to an element
   */
  const addFrameTo = (element: HTMLElement, actions: Lib.T.ElementFrameActionTypes[], type: Lib.T.Options, id: string) => {
    if (!actions.includes('noSyncDelete')) {
      actions.push('delete')
    }

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
   * when you focus on element with the contentEditable attribute,
   * it's not possible to focus to it's element (to activate it).
   * so this function helps to do it under the hood.
   */
  const activateFrameByFocusingContentEditables = (element: HTMLDivElement) => {
    const contentEditables = element.querySelectorAll('*[contenteditable="true"]')

    const type = <Lib.T.Options | null>element.getAttribute('data-type')
    const id = <string | null>element.id

    if (!type || !id) {
      return
    }

    contentEditables.forEach(contentEditable =>
      contentEditable.addEventListener('focus', () => {
        setActiveOption(type)
        setActiveItemID(id)
      }),
    )
  }

  /**
   *
   *
   *
   * Actions will be used on frame buttons
   */
  class Action {
    static getFrame(evt: MouseEvent) {
      return <HTMLDivElement | null>(<HTMLSpanElement>evt.currentTarget)?.parentNode?.parentNode
    }

    static delete(evt: MouseEvent) {
      const frame = Action.getFrame(evt)
      setActiveItemID(null)
      setActiveOption('none')
      if (!frame) {
        return
      }
      frame.remove()
      NapStorage.delete(frame)
    }

    static noSyncDelete(evt: MouseEvent) {
      const frame = Action.getFrame(evt)
      setActiveItemID(null)
      setActiveOption('none')
      if (!frame) {
        return
      }
      frame.remove()
    }

    static editInnerText(evt: MouseEvent) {
      const frame = Action.getFrame(evt)
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

    static changeReminderValue(_evt: MouseEvent) {
      setTimePickerVisibility(true)
    }

    static editLinkRef(evt: MouseEvent) {
      const frame = Action.getFrame(evt)
      if (!frame) {
        return
      }

      const linkElement = <HTMLParagraphElement | null>frame.querySelector('p.link')
      if (!linkElement) {
        return
      }

      const linkText = linkElement.getAttribute('data-text') || ''
      const linkRef = linkElement.getAttribute('data-href') || ''
      const linkID = frame.id

      setEditLinkPopupLinkTextAndRef({ ref: linkRef, text: linkText, frameID: linkID })
      setEditLinkPopupVisibility(true)
    }
  }

  return { compileDown, compileAllDown }
}
