import * as Lib from '../'
import { Str } from '@/helpers/string'
import { RefObject } from 'react'

export const useInserters = () => {
  const { compileDown } = Lib.H.useBoardCompiler('mainBoard')

  return class Insert {
    board: HTMLDivElement | null = null

    constructor(_boardRef: RefObject<HTMLDivElement>) {
      this.board = _boardRef.current
    }

    appendItem(elementInfo: Lib.T.Elements.All) {
      if (!this.board) {
        return
      }
      const element = compileDown(elementInfo)
      this.board.appendChild(element)
      element.focus()
    }

    newText() {
      const text: Lib.T.Elements.Text = {
        type: 'text',
        id: Str.random(20),
        text: 'Type Something here...',
        position: { left: '20px', top: '20px' },
        fontSize: '20px',
        rotate: 0,
        effect: 'no-effect',
      }
      this.appendItem(text)
    }
  }
}
