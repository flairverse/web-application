import { Num } from '@/helpers/number'
import { Str } from '@/helpers/string'
import moment from 'moment'
import { RefObject } from 'react'
import * as Lib from '.'

export const boardContains = (item: Lib.T.Options, boardRef: RefObject<HTMLDivElement | null>): boolean => {
  const { current: board } = boardRef
  if (!board) {
    return false
  }

  return board.querySelector(`.${item}`) !== null
}

export const getAllFrames = (boardRef: RefObject<HTMLDivElement | null>, loopAndDo?: (element: HTMLDivElement, index: number) => void) => {
  const { current: board } = boardRef
  if (!board) {
    return null
  }

  const frames = <NodeListOf<HTMLDivElement>>board.querySelectorAll('.frame')

  if (frames.length <= 0) {
    return null
  }

  if (!loopAndDo) {
    return frames
  }

  Array.from(frames).forEach((element, index) => loopAndDo(element, index))
  return frames
}

export const getFramesByType = (boardRef: RefObject<HTMLDivElement | null>, type: Lib.T.Options) => {
  const { current: board } = boardRef
  if (!board) {
    return null
  }

  const frames = <NodeListOf<HTMLDivElement>>board.querySelectorAll(`.frame.${type}`)
  if (frames.length <= 0) {
    return null
  }

  return frames
}

export const getFrameById = (boardRef: RefObject<HTMLDivElement | null>, id: string) => {
  const { current: board } = boardRef
  if (!board) {
    return null
  }

  const frame = <HTMLDivElement | null>board.querySelector(`#${id}`)
  if (!frame) {
    return null
  }

  return frame
}

export const removeFramesByType = (boardRef: RefObject<HTMLDivElement | null>, type: Lib.T.Options) => {
  const frames = getFramesByType(boardRef, type)
  if (!frames) {
    return
  }

  frames.forEach(frame => frame.remove())
}

export const removeFramesById = (boardRef: RefObject<HTMLDivElement | null>, id: string) => {
  const frame = getFrameById(boardRef, id)
  if (!frame) {
    return
  }

  frame.remove()
}

export const calculateFrameScale = (boardRef: RefObject<HTMLDivElement | null>) => {
  const { current: board } = boardRef
  if (!board) {
    return
  }

  const boardWidth = board.clientWidth
  const scaled = boardWidth / Lib.CO.BASE_BOARD_WIDTH
  return scaled < Lib.CO.MINIMUM_SCALE ? Lib.CO.MINIMUM_SCALE : scaled
}

export const getBoardSize = (boardRef: RefObject<HTMLDivElement | null>): Lib.T.BoardSize => {
  const { current: board } = boardRef
  if (!board) {
    return {
      width: Lib.CO.BASE_BOARD_WIDTH,
      height: Lib.CO.BASE_BOARD_HEIGHT,
    }
  }

  const { width, height } = window.getComputedStyle(board)

  return {
    width: Num.extract(width, true)[0],
    height: Num.extract(height, true)[0]!,
  }
}

/**
 *
 *
 *
 * finds all added frames and rescales them
 */
export const changeFrameScale = (boardRef: RefObject<HTMLDivElement | null>, frame: HTMLDivElement) => {
  const scaled = calculateFrameScale(boardRef)
  const minScale = Lib.CO.MINIMUM_SCALE

  if (!scaled) {
    return
  }

  const scale = scaled < Lib.CO.MINIMUM_SCALE ? Lib.CO.MINIMUM_SCALE : scaled
  const angle = parseFloat(frame.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION) || '0')

  frame.style.transform = `rotate(${angle}deg) scale(${scale})`
  frame.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.SCALE, scale.toString())
}

export const getReminderInitialTime = (defaults?: { now: Date; future: Date }) => {
  const now = defaults?.now || new Date()
  const nextYear = defaults?.future || new Date()

  if (!defaults) {
    nextYear.setFullYear(now.getFullYear() + 1)
  }

  return {
    minimumDate: moment().add('1', 'hour').toDate(),
    maximumDate: nextYear,
  }
}

export const makeElementID = (): string => {
  return Str.random(Lib.CO.ELEMENTS_ID_LENGTHS, 'allLetters')
}
