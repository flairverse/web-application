import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { GoTextSize } from 'react-icons/go'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import * as Lib from '../'

export const useToolsForTextInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserters = Lib.H.useInserters(boardRef)
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const fontSizeRange = [10, 50]
  const fontSizeStep = 10

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-text', title: 'Add new', disabled: false },
    { Icon: GoTextSize, type: 'text-font-size', title: 'Font Size', disabled: activeOption !== 'text' || activeItemID === null },
    { Icon: IoColorFilterOutline, type: 'text-effect', title: 'Effect', disabled: activeOption !== 'text' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'text-rotation', title: 'Rotate', disabled: activeOption !== 'text' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-text': {
        new Inserters(boardRef).newText()
        break
      }

      case 'text-font-size': {
        const focusedItem = getFocusedItem()
        if (focusedItem) {
          const currentFontSize = parseInt(window.getComputedStyle(focusedItem).fontSize)
          const nextFontSize = currentFontSize + fontSizeStep
          focusedItem.style.fontSize = (nextFontSize > fontSizeRange[1] ? fontSizeRange[0] : nextFontSize) + 'px'
          focusedItem.focus()
        }
        break
      }

      case 'text-effect': {
        changeEffect('TEXT')
        break
      }

      case 'text-rotation': {
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
