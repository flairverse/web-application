import { useMemo } from 'react'
import * as Lib from '../'

export const useTools = ({ selectedOption, boardRef }: Pick<Lib.T.ToolsProps, 'selectedOption' | 'boardRef'>) => {
  const checkTools = (): JSX.Element | null => {
    if (selectedOption !== 'none') {
      switch (selectedOption) {
        case 'text': {
          return <Lib.C.ToolsForTextInserter boardRef={boardRef} />
        }

        default: // <<--------------------------------------------------------------------------------------------------[[temporary]]
        case 'post': {
          return <Lib.C.ToolsForPostInserter boardRef={boardRef} />
        }

        case 'mention': {
          return <Lib.C.ToolsForMentionInserter boardRef={boardRef} />
        }
      }
    } else return null
  }

  const tools = useMemo(() => checkTools(), [selectedOption])
  return tools
}
