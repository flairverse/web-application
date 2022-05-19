import { Topic } from '@/types/topics'
import { RefObject } from 'react'
import * as Lib from '..'

export const useBoardCompileUp = (boardRef: RefObject<HTMLDivElement>) => {
  /**
   *
   *
   *
   * decides which compiler to be used
   */
  const compileUp = (frame: HTMLDivElement) => {
    const type = <Lib.T.Options | null>frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.TYPE)

    if (!type) {
      return
    }

    switch (type) {
      case 'text': {
        return compileTextUp(frame)
      }

      case 'post': {
        return compilePostUp(frame)
      }
    }
  }

  /**
   *
   *
   *
   * compiles ell existing frames on the board to a json file
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
   * compiles all shared attributes of a frame
   */
  const compileSharedUp = <Effect extends Lib.T.AllEffects>(frame: HTMLDivElement): Omit<Lib.T.Elements.BaseElement<Effect>, 'type'> => {
    const id = frame.id
    const { left, top } = window.getComputedStyle(frame)
    const rotate: Lib.T.Elements.ElementRotation = <Lib.T.Elements.ElementRotation>parseInt(frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION) || '0')
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
    const { fontSize } = window.getComputedStyle(frame)
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
    const postId = parseInt(frame.querySelector('.createNapComponent')!.getAttribute('data-post-id')!)
    const paymentRequired = !!frame.querySelector('.payment')
    const summary = frame.querySelector('summary')!.innerText
    const timeToRead = parseInt(frame.querySelector('.timeToRead')!.getAttribute('data-timeToRead')!)
    const title = (<HTMLHeadingElement>frame.querySelector('.title')).innerText
    const topic = <Topic>frame.querySelector('.topic')!.getAttribute('data-topic')!
    const fullName = (<HTMLSpanElement>frame.querySelector('.fullName')!).innerText
    const job = (<HTMLSpanElement>frame.querySelector('.job')!).innerText
    const profile = (<HTMLImageElement>frame.querySelector('.profile')!).src
    const effect: Lib.T.PostEffects = <Lib.T.PostEffects | null>frame.querySelector('.createNapComponent')!.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT) || 'no-effect'

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

  return { compileUp, compileAllUp }
}
