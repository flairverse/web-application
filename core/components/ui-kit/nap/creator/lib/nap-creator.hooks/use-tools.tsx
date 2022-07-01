import { useMemo } from 'react'
import * as Lib from '..'

export const useTools = ({ selectedOption, boardRef, imageInputRef }: Pick<Lib.T.ToolsProps, 'selectedOption' | 'boardRef' | 'imageInputRef'>) => {
  const checkTools = (): JSX.Element | null => {
    if (selectedOption !== 'none') {
      switch (selectedOption) {
        case 'text': {
          return <Lib.C.ToolsForTextInserter boardRef={boardRef} />
        }

        case 'post': {
          return <Lib.C.ToolsForPostInserter boardRef={boardRef} />
        }

        case 'mention': {
          return <Lib.C.ToolsForMentionInserter boardRef={boardRef} />
        }

        case 'question': {
          return <Lib.C.ToolsForQuestionInserter boardRef={boardRef} />
        }

        case 'quiz': {
          return <Lib.C.ToolsForQuizInserter boardRef={boardRef} />
        }

        case 'reminder': {
          return <Lib.C.ToolsForReminderInserter boardRef={boardRef} />
        }

        case 'gif': {
          return <Lib.C.ToolsForGifInserter boardRef={boardRef} />
        }

        case 'image': {
          return <Lib.C.ToolsForImageInserter boardRef={boardRef} imageInputRef={imageInputRef} />
        }

        case 'link': {
          return <Lib.C.ToolsForLinkInserter boardRef={boardRef} />
        }

        case 'more|less': {
          return null
        }
      }
    } else return null
  }

  const tools = useMemo(() => checkTools(), [selectedOption])
  return tools
}
