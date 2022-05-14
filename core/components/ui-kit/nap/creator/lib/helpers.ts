import { RefObject } from 'react'
import * as Lib from '.'

export const boardContains = (item: Lib.T.Options, boardRef: RefObject<HTMLDivElement | null>): boolean => {
  const board = boardRef.current

  if (!board) {
    return false
  }

  return board.querySelector(`.${item}`) !== null
}
