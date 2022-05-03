import * as Lib from '..'
import { BsTextareaT } from 'react-icons/bs'

export const useToolsForPostInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserters = Lib.H.useInserters()

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title'>[] = [
    { Icon: BsTextareaT, type: 'add-text', title: 'Add new' },
    { Icon: BsTextareaT, type: 'add-text', title: 'Add new' },
    { Icon: BsTextareaT, type: 'add-text', title: 'Add new' },
    { Icon: BsTextareaT, type: 'add-text', title: 'Add new' },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-text': {
        new Inserters(boardRef).newText()
        break
      }
    }
  }

  return {
    get: {
      tools,
    },
    on: {
      toolClick,
    },
  }
}
