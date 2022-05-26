import * as Lib from '../'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { FaRegLightbulb } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { createNapAtoms } from '@/store/atoms'

export const useToolsForQuestionInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserters = Lib.H.useInserters(boardRef)
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const activeItemID = useRecoilValue(createNapAtoms.activeItemID)
  const activeOption = useRecoilValue(createNapAtoms.activeOption)

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-question', title: 'Add new', disabled: false },
    { Icon: FaRegLightbulb, type: 'question-hint', title: 'Toggle hint', disabled: activeOption !== 'question' || activeItemID === null },
    { Icon: IoColorFilterOutline, type: 'question-effect', title: 'Effect', disabled: activeOption !== 'question' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'question-rotation', title: 'Rotate', disabled: activeOption !== 'question' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-question': {
        new Inserters(boardRef).newQuestion()
        break
      }

      case 'question-hint': {
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

      case 'question-effect': {
        changeEffect('QUESTION', '.question')
        break
      }

      case 'question-rotation': {
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
