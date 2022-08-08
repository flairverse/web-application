import { componentNapCreatorAtomFamilies } from '@/store'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { RiLightbulbLine } from 'react-icons/ri'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForQuizInserter = ({ boardRef, storeKeys }: Lib.T.ToolsForInserters) => {
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
    storeKeys,
  })
  const activeItemID = useRecoilValue(componentNapCreatorAtomFamilies.activeItemID(storeKeys.activeItemID))
  const activeOption = useRecoilValue(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: RiLightbulbLine,
      type: 'quiz-hint',
      title: 'Toggle hint',
      disabled: activeOption !== 'quiz' || activeItemID === null,
    },
    {
      Icon: BiPalette,
      type: 'quiz-effect',
      title: 'Effect',
      disabled: activeOption !== 'quiz' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'quiz-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'quiz' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'quiz-hint': {
        const focusedItem = getFocusedItem()
        if (!focusedItem) {
          return
        }

        const hint = focusedItem.querySelector('.hintSection') as HTMLParagraphElement | null
        const napElement = focusedItem.querySelector('.napElement') as HTMLDivElement | null
        if (!hint || !napElement) {
          return
        }

        const { display } = window.getComputedStyle(hint)
        const isEnabled = display === 'block'

        hint.style.display = isEnabled ? 'none' : 'block'
        napElement.setAttribute('data-hint-enabled', isEnabled ? 'false' : 'true')

        NapStorage.update(focusedItem)
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
