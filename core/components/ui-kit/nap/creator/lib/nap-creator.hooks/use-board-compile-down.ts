import { DOM } from '@/helpers/DOM'
import { componentTimePickerAtoms } from '@/store/atomFamilies'
import { pageCreateNapAtoms } from '@/store/atoms'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useBoardCompileDown = (boardId: string) => {
  const setActiveOption = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const setActiveItemID = useSetRecoilState(pageCreateNapAtoms.activeItemID)
  const setTimePickerVisibility = useSetRecoilState(
    componentTimePickerAtoms.timePickerPopupVisibility('PAGE__CREATE_NAP___TIME_PICKER_POPUP'),
  )

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
      default: // <<----------------------------------------------------------------[[temporary]]
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
  const compileTextDown = ({
    type,
    id,
    text,
    position: { left, top },
    fontSize,
    effect,
    rotate,
  }: Lib.T.Elements.Text): HTMLDivElement => {
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
  const compilePostDown = ({
    id,
    position: { left, top },
    rotate,
    type,
    user,
    post,
    effect,
  }: Lib.T.Elements.Post): HTMLDivElement => {
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
    const node = DOM.DOMStringToNode(
      Lib.CO.ITEMS_DOM_STRING.mention({
        fullName,
        username,
        job,
        profile,
        userID,
        hasNap,
        seen,
        followers,
        subscribes,
      }),
    )
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
  const compileQuestionDown = ({
    effect,
    hint,
    id,
    position: { left, top },
    question,
    questionerUser,
    rotate,
    type,
  }: Lib.T.Elements.Question): HTMLDivElement => {
    const node = DOM.DOMStringToNode(
      Lib.CO.ITEMS_DOM_STRING.question({ hint, question, questionerUser }),
    )
    const element = addFrameTo(node, [], 'question', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    activateFrameByFocusingContentEditables(element)
    DOM.makeElementDraggable({ element, areaSensitive, blackList: ['questionText', 'hintSection'] })
    return element
  }

  /**
   *
   *
   *
   * compiles a quiz object to actual element
   */
  const compileQuizDown = ({
    answers,
    correctAnswer,
    effect,
    hintText,
    id,
    position: { left, top },
    questionText,
    questioner,
    rotate,
    type,
  }: Lib.T.Elements.Quiz): HTMLDivElement => {
    const node = DOM.DOMStringToNode(
      Lib.CO.ITEMS_DOM_STRING.quiz({ answers, correctAnswer, hintText, questionText, questioner }),
    )
    const element = addFrameTo(node, [], 'quiz', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    activateFrameByFocusingContentEditables(element)
    DOM.makeElementDraggable({
      element,
      areaSensitive,
      blackList: ['questionText', 'hintSection', 'answerText'],
    })

    const answerNumbers = <NodeListOf<HTMLDivElement>>element.querySelectorAll('.answer > span')
    const answerContents = <NodeListOf<HTMLDivElement>>element.querySelectorAll('.answer > p')

    answerNumbers.forEach(answerNumber =>
      answerNumber.addEventListener('click', () => switchCorrectAnswer(answerNumber)),
    )
    answerContents.forEach(answerContent =>
      answerContent.addEventListener('input', evt => toggleNextAnswer(<InputEvent>evt)),
    )

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
  const compileReminderDown = ({
    effect,
    id,
    position: { left, top },
    reminderName,
    rotate,
    type,
    maximumDate,
    minimumDate,
  }: Lib.T.Elements.Reminder): HTMLDivElement => {
    const classNames: Lib.T.ReminderNodesClassNames = {
      titles: ['title1', 'title2', 'title3'],
      counters: [
        { firstLetter: 'first1', secondLetter: 'first2' },
        { firstLetter: 'second1', secondLetter: 'second2' },
        { firstLetter: 'third1', secondLetter: 'third2' },
      ],
    }
    const node = DOM.DOMStringToNode(
      Lib.CO.ITEMS_DOM_STRING.reminder({ reminderName, classNames, maximumDate, minimumDate }),
    )
    const element = addFrameTo(node, ['changeReminderValue'], 'reminder', id)
    DOM.addStyles(element, { top, left, transform: `rotate(${rotate}deg)` })
    element.id = id
    element.classList.add(type)
    element.classList.add(effect)
    activateFrameByFocusingContentEditables(element)
    DOM.makeElementDraggable({ element, areaSensitive, blackList: ['reminderName'] })
    setTimeout(() => {
      DOM.createTriadCountdown({
        containerRef: id,
        defaultValues: {
          year: minimumDate.year,
          month: minimumDate.month,
          day: minimumDate.day,
          hour: minimumDate.hour,
          minute: minimumDate.minute,
        },
        titleRefs: classNames.titles,
        triadRefs: classNames.counters,
        querySelectorPrefixes: { titlesAndTriad: '.', container: '#' },
      })
    }, 10)
    return element
  }

  /**
   *
   *
   *
   * adds frame with custom buttons to an element
   */
  const addFrameTo = (
    element: HTMLElement,
    actions: Lib.T.ElementFrameActionTypes[],
    type: Lib.T.Options,
    id: string,
  ) => {
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
    static getElement(evt: MouseEvent) {
      return <HTMLDivElement | null>(<HTMLSpanElement>evt.currentTarget)?.parentNode?.parentNode
    }

    static delete(evt: MouseEvent) {
      const element = Action.getElement(evt)
      setActiveItemID(null)
      setActiveOption('none')
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

    static changeReminderValue(evt: MouseEvent) {
      setTimePickerVisibility(true)
    }
  }

  return { compileDown, compileAllDown }
}
