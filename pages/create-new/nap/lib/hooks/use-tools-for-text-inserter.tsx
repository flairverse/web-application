import * as Lib from '../'
import { BsTextareaT } from 'react-icons/bs'

export const useToolsForTextInserter = () => {
  const tools: Pick<Lib.T.ToolProps, 'icon' | 'type' | 'title'>[] = [
    { icon: <BsTextareaT />, type: 'add-text', title: 'Insert new text' },
    { icon: <BsTextareaT />, type: 'add-text', title: 'Insert new text' },
  ]

  const toolClick = (type: Lib.T.Tool) => {}

  return {
    get: {
      tools,
    },
    on: {
      toolClick,
    },
  }
}
