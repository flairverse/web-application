import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForQuizInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserters = Lib.H.useInserters(boardRef)
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-quiz', title: 'Add new', disabled: false },
    { Icon: FaRegLightbulb, type: 'quiz-hint', title: 'Toggle hint', disabled: activeOption !== 'quiz' || activeItemID === null },
    { Icon: IoColorFilterOutline, type: 'quiz-effect', title: 'Effect', disabled: activeOption !== 'quiz' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'quiz-rotation', title: 'Rotate', disabled: activeOption !== 'quiz' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-quiz': {
        new Inserters(boardRef).newQuiz()
        break
      }

      case 'quiz-hint': {
        const focusedItem = getFocusedItem()
        if (!focusedItem) {
          return
        }

        const hint = focusedItem.querySelector('.hintSection') as HTMLParagraphElement | null
        if (!hint) {
          return
        }

        const { display } = window.getComputedStyle(hint)
        hint.style.display = display === 'block' ? 'none' : 'block'

        break
      }

      case 'quiz-effect': {
        changeEffect('QUIZ', '.quiz')
        break
      }

      case 'quiz-rotation': {
        changeRotation()
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
