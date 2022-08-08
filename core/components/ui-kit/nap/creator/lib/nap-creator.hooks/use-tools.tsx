import { useMemo } from 'react'
import * as Lib from '..'

export const useTools = ({
  selectedOption,
  boardRef,
  imageInputRef,
  storeKeys,
}: Pick<Lib.T.ToolsProps, 'selectedOption' | 'boardRef' | 'imageInputRef' | 'storeKeys'>) => {
  const checkTools = (): JSX.Element | null => {
    if (selectedOption !== 'none') {
      switch (selectedOption) {
        case 'text': {
          return <Lib.C.ToolsForTextInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'post': {
          return <Lib.C.ToolsForPostInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'mention': {
          return <Lib.C.ToolsForMentionInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'question': {
          return <Lib.C.ToolsForQuestionInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'quiz': {
          return <Lib.C.ToolsForQuizInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'reminder': {
          return <Lib.C.ToolsForReminderInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'gif': {
          return <Lib.C.ToolsForGifInserter boardRef={boardRef} storeKeys={storeKeys} />
        }

        case 'image': {
          return <Lib.C.ToolsForImageInserter boardRef={boardRef} imageInputRef={imageInputRef} storeKeys={storeKeys} />
        }

        case 'link': {
          return <Lib.C.ToolsForLinkInserter boardRef={boardRef} storeKeys={storeKeys} />
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
