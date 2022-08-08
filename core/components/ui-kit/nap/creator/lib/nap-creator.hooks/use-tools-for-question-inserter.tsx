import { componentNapCreatorAtomFamilies } from '@/store'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { RiLightbulbLine } from 'react-icons/ri'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForQuestionInserter = ({ boardRef, storeKeys }: Lib.T.ToolsForInserters) => {
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
    storeKeys,
  })
  const activeItemID = useRecoilValue(componentNapCreatorAtomFamilies.activeItemID(storeKeys.activeItemID))
  const activeOption = useRecoilValue(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const NapStorage = Lib.H.useNapStorage(boardRef)

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: RiLightbulbLine,
      type: 'question-hint',
      title: 'Toggle hint',
      disabled: activeOption !== 'question' || activeItemID === null,
    },
    {
      Icon: BiPalette,
      type: 'question-effect',
      title: 'Effect',
      disabled: activeOption !== 'question' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'question-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'question' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'question-hint': {
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
