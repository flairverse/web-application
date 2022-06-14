import moment from 'moment'
import { RefObject } from 'react'
import * as Lib from '.'

export const boardContains = (
  item: Lib.T.Options,
  boardRef: RefObject<HTMLDivElement | null>,
): boolean => {
  const { current: board } = boardRef
  if (!board) {
    return false
  }

  return board.querySelector(`.${item}`) !== null
}

export const getAllFrames = (
  boardRef: RefObject<HTMLDivElement | null>,
  loopAndDo?: (element: HTMLDivElement) => void,
) => {
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

  Array.from(frames).forEach(loopAndDo)
  return frames
}

export const getFramesByType = (
  boardRef: RefObject<HTMLDivElement | null>,
  type: Lib.T.Options,
) => {
  const { current: board } = boardRef
  if (!board) {
    return null
  }

  const frames = <NodeListOf<HTMLDivElement>>board.querySelectorAll(`.${type}`)
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

export const removeFramesByType = (
  boardRef: RefObject<HTMLDivElement | null>,
  type: Lib.T.Options,
) => {
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
  return scaled < 0.5 ? 0.5 : scaled
}

/**
 *
 *
 *
 * finds all added frames and rescales them
 */
export const changeFrameScale = (
  boardRef: RefObject<HTMLDivElement | null>,
  frame: HTMLDivElement,
) => {
  const scaled = calculateFrameScale(boardRef)
  if (!scaled) {
    return
  }

  const scale = scaled < 0.5 ? 0.5 : scaled
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
