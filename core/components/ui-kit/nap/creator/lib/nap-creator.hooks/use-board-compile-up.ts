import { Topic } from '@/types/topics'
import { RefObject } from 'react'
import * as Lib from '..'

export const useBoardCompileUp = (boardRef: RefObject<HTMLDivElement>) => {
  const { validate } = Lib.H.useBoardValidate()
  const { mapErrors } = Lib.H.useShowErrors(boardRef)
  const { fix } = Lib.H.useBoardFixers()

  /**
   *
   *
   *
   * decides which compiler to be used
   */
  const compileUp = (frame: HTMLDivElement): Lib.T.Elements.AllOr | null => {
    const type = <Lib.T.Options | null>frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.TYPE)

    if (!type) {
      return null
    }

    switch (type) {
      case 'text': {
        return compileTextUp(frame)
      }

      case 'post': {
        return compilePostUp(frame)
      }

      case 'mention': {
        return compileMentionUp(frame)
      }

      case 'question': {
        return compileQuestionUp(frame)
      }

      case 'quiz': {
        return compileQuizUp(frame)
      }

      case 'reminder': {
        return compileReminderUp(frame)
      }

      case 'gif': {
        return compileGifUp(frame)
      }

      case 'image': {
        return compileImageUp(frame)
      }

      case 'link': {
        return compileLinkUp(frame)
      }

      case 'more|less': {
        return null
      }
    }
  }

  /**
   *
   *
   *
   * compiles all existing frames on the board to a json file
   */
  const compileAllUp = () => {
    const allObjects: Lib.T.Elements.All[] = []

    Lib.HE.getAllFrames(boardRef, frame => {
      const object = compileUp(frame)
      if (object) {
        allObjects.push(object)
      }
    })

    console.log(allObjects)
    console.log(JSON.stringify(allObjects))
    return allObjects
  }

  /**
   *
   *
   *
   * compiles and validates all existing frames on the board
   */
  const compileAndValidateAll = (showErrors = true) => {
    const allItems: Lib.T.Elements.All[] = []
    const allValidations: Lib.T.ValidatorResult[] = []

    Lib.HE.getAllFrames(boardRef, frame => {
      const item = <Lib.T.Elements.All>compileUp(frame)

      if (item) {
        const fixed = fix(item) || item
        const { isValid, reasons } = validate(fixed)

        allItems.push(fixed)

        if (!isValid) {
          allValidations.push({ isValid, reasons })
        }
      }
    })

    if (allValidations.length > 0 && showErrors) {
      mapErrors(allValidations)
    }

    return allItems
  }

  /**
   *
   *
   *
   * compiles all shared attributes of a frame
   */
  const compileSharedUp = <Effect extends Lib.T.AllEffects>(frame: HTMLDivElement): Omit<Lib.T.Elements.BaseElement<Effect>, 'type'> => {
    const id = frame.id
    const { left, top } = window.getComputedStyle(frame)
    const rotate: Lib.T.Elements.ElementRotation = <Lib.T.Elements.ElementRotation>(
      Math.abs(parseInt(frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION) || '0') % 360)
    )
    const effect = <Effect>(<Lib.T.AllEffects | null>frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT) || 'no-effect')

    return {
      position: { left, top },
      id,
      rotate,
      effect,
    }
  }

  /**
   *
   *
   *
   * compiles a text frame to a JSON
   */
  const compileTextUp = (frame: HTMLDivElement): Lib.T.Elements.Text => {
    const { id, position, rotate, effect } = compileSharedUp<Lib.T.TextEffects>(frame)
    const fontSize = frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.FONT_SIZE) || '20px'
    const text = frame.innerText

    return {
      id,
      position,
      rotate,
      effect,
      fontSize,
      text,
      type: 'text',
    }
  }

  /**
   *
   *
   *
   * compiles a link frame to a JSON
   */
  const compileLinkUp = (frame: HTMLDivElement): Lib.T.Elements.Link => {
    const { effect, id, position, rotate } = compileSharedUp<Lib.T.LinkEffects>(frame)
    const linkFontSize = frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.FONT_SIZE) || '20px'
    const link = frame.innerText
    const href = (<HTMLParagraphElement>frame.querySelector('p.link')!).getAttribute('data-href') || ''

    return {
      type: 'link',
      id,
      position,
      rotate,
      effect,
      href,
      link,
      linkFontSize,
    }
  }

  /**
   *
   *
   *
   * compiles a post frame to a JSON
   */
  const compilePostUp = (frame: HTMLDivElement): Lib.T.Elements.Post => {
    const { id, position, rotate } = compileSharedUp(frame)
    const comments = parseInt(frame.querySelector('.comments')!.getAttribute('data-comments')!)
    const likes = parseInt(frame.querySelector('.likes')!.getAttribute('data-likes')!)
    const cover = (<HTMLImageElement>frame.querySelector('.cover')!).src
    const day = (<HTMLSpanElement>frame.querySelector('.day')!).innerText
    const month = (<HTMLSpanElement>frame.querySelector('.month')!).innerText
    const year = (<HTMLSpanElement>frame.querySelector('.year')!).innerText
    const postId = parseInt(frame.querySelector('.napElement')!.getAttribute('data-post-id')!)
    const paymentRequired = !!frame.querySelector('.payment')
    const summary = frame.querySelector('summary')!.innerText
    const timeToRead = parseInt(frame.querySelector('.timeToRead')!.getAttribute('data-timeToRead')!)
    const title = (<HTMLHeadingElement>frame.querySelector('.title')).innerText
    const topic = <Topic>frame.querySelector('.topic')!.getAttribute('data-topic')!
    const fullName = (<HTMLSpanElement>frame.querySelector('.fullName')!).innerText
    const job = (<HTMLSpanElement>frame.querySelector('.job')!).innerText
    const profile = (<HTMLImageElement>frame.querySelector('.profile')!).src
    const hasNap = (<HTMLDivElement>frame.querySelector('.profileComponent')).getAttribute('data-has-nap')! === 'true'
    const seen = (<HTMLDivElement>frame.querySelector('.profileComponent')).getAttribute('data-seen')! === 'true'
    const effect: Lib.T.PostEffects =
      <Lib.T.PostEffects | null>frame.querySelector('.napElement')!.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT) || 'no-effect'

    return {
      type: 'post',
      id,
      position,
      rotate,
      effect,
      user: {
        fullName,
        job,
        profile,
        hasNap,
        seen,
      },
      post: {
        id: postId,
        comments,
        likes,
        cover,
        day,
        month,
        year,
        paymentRequired,
        summary,
        timeToRead,
        title,
        topic,
      },
    }
  }

  /**
   *
   *
   *
   * compiles a mention frame to a JSON
   */
  const compileMentionUp = (frame: HTMLDivElement): Lib.T.Elements.Mention => {
    const { id, position, rotate, effect } = compileSharedUp<Lib.T.MentionEffects>(frame)
    const followers = parseInt((<HTMLSpanElement>frame.querySelector('.followers')!).getAttribute('data-followers') || '0')
    const fullName = (<HTMLParagraphElement>frame.querySelector('.name')!).innerText || ''
    const hasNap = (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-has-nap') === 'true'
    const seen = (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-seen') === 'true'
    const subscribes = parseInt((<HTMLSpanElement>frame.querySelector('.subscribes')!).getAttribute('data-subscribes') || '0')
    const userID = parseInt((<HTMLDivElement>frame.querySelector('.mention')!).getAttribute('data-user-id') || '0')
    const username = (<HTMLParagraphElement>frame.querySelector('.username')!).innerText.replace('@', '')
    const job = (<HTMLParagraphElement>frame.querySelector('.job')!).innerText
    const profile = (<HTMLImageElement>frame.querySelector('.profile')!).src

    return {
      id,
      position,
      rotate,
      effect,
      type: 'mention',
      followers,
      fullName,
      hasNap,
      seen,
      subscribes,
      userID,
      username,
      job,
      profile,
    }
  }

  /**
   *
   *
   *
   * compiles a question frame to a JSON
   */
  const compileQuestionUp = (frame: HTMLDivElement): Lib.T.Elements.Question => {
    const { effect, id, position, rotate } = compileSharedUp<Lib.T.QuestionEffects>(frame)
    const hint = (<HTMLParagraphElement>frame.querySelector('.hintSection')!).innerText || ''
    const question = (<HTMLParagraphElement>frame.querySelector('.questionText')!).innerText || ''
    const hintEnabled = (<HTMLDivElement>frame.querySelector('.napElement')!).getAttribute('data-hint-enabled') === 'true'
    const questionerUser = {
      profile: (<HTMLImageElement>frame.querySelector('.profile')!).src,
      hasNap: (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-has-nap') === 'true',
      seen: (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-seen') === 'true',
    }

    return {
      id,
      position,
      rotate,
      effect,
      hint,
      question,
      questionerUser,
      type: 'question',
      hintEnabled,
    }
  }

  /**
   *
   *
   *
   * compiles a quiz frame to a JSON
   */
  const compileQuizUp = (frame: HTMLDivElement): Lib.T.Elements.Quiz => {
    const { effect, id, position, rotate } = compileSharedUp<Lib.T.QuizEffects>(frame)
    const hintText = (<HTMLParagraphElement>frame.querySelector('.hintSection')!).innerText
    const questionText = (<HTMLParagraphElement>frame.querySelector('.questionText')!).innerText
    const hintTextEnabled = (<HTMLDivElement>frame.querySelector('.napElement')!).getAttribute('data-hint-enabled') === 'true'
    const questioner = {
      profile: (<HTMLImageElement>frame.querySelector('.profile')!).src,
      hasNap: (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-has-nap') === 'true',
      seen: (<HTMLDivElement>frame.querySelector('.profileContainer > div')!).getAttribute('data-seen') === 'true',
    }

    let correctAnswer = 0
    const answers: string[] = []
    ;(<NodeListOf<HTMLDivElement>>frame.querySelectorAll('.answer')).forEach((answer, index) => {
      answers.push((<HTMLParagraphElement>answer.querySelector('.answerText')!).innerText)
      if (answer.classList.contains('true')) {
        correctAnswer = index
      }
    })

    return {
      type: 'quiz',
      id,
      position,
      rotate,
      effect,
      answers,
      correctAnswer,
      hintText,
      questioner,
      questionText,
      hintTextEnabled,
    }
  }

  /**
   *
   *
   *
   * compiles a reminder frame to a JSON
   */
  const compileReminderUp = (frame: HTMLDivElement): Lib.T.Elements.Reminder => {
    const { id, position, rotate, effect } = compileSharedUp<Lib.T.ReminderEffects>(frame)
    const reminderName = (<HTMLParagraphElement>frame.querySelector('.reminderName')!).innerText
    const endTime = (<HTMLDivElement>frame.querySelector('.reminder')).getAttribute('data-end-time')!

    return {
      id,
      position,
      rotate,
      effect,
      reminderName,
      type: 'reminder',
      endTime,
    }
  }

  /**
   *
   *
   *
   * compiles a gif frame to a JSON
   */
  const compileGifUp = (frame: HTMLDivElement): Lib.T.Elements.Gif => {
    const { effect, id, position, rotate } = compileSharedUp<Lib.T.GifEffects>(frame)
    const gifURL = (<HTMLDivElement>frame.querySelector('.gif')!).getAttribute('data-gif-url') || ''
    const gifWidth = window.getComputedStyle(<HTMLDivElement>frame.querySelector('img')).width

    return {
      type: 'gif',
      id,
      position,
      effect,
      rotate,
      gifURL,
      gifWidth,
    }
  }

  /**
   *
   *
   *
   * compiles a image frame to a JSON
   */
  const compileImageUp = (frame: HTMLDivElement): Lib.T.Elements.Image => {
    const { effect, id, position, rotate } = compileSharedUp<Lib.T.ImageEffects>(frame)
    const imageURL = (<HTMLDivElement>frame.querySelector('.image')!).getAttribute('data-image-url') || ''
    const imageWidth = window.getComputedStyle(<HTMLDivElement>frame.querySelector('img')).width

    return {
      type: 'image',
      id,
      position,
      effect,
      rotate,
      imageURL,
      imageWidth,
    }
  }

  return { compileUp, compileAllUp, compileAndValidateAll }
}
