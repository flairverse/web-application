import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { GoTextSize } from 'react-icons/go'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForLinkInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserter = Lib.H.useInserters({ boardRef })
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const insert = new Inserter()
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
  })
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const fontSizeRange = [10, 50]
  const fontSizeStep = 10

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: IoAddCircleOutline,
      type: 'add-link',
      title: 'Add new',
      disabled: !insert.canInsert('link', false),
    },
    {
      Icon: GoTextSize,
      type: 'link-font-size',
      title: 'Font Size',
      disabled: activeOption !== 'link' || activeItemID === null,
    },
    {
      Icon: BiPalette,
      type: 'link-effect',
      title: 'Effect',
      disabled: activeOption !== 'link' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'link-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'link' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-link': {
        insert.newLink()
        break
      }

      case 'link-font-size': {
        const focusedItem = getFocusedItem()
        if (focusedItem) {
          const currentFontSize = parseInt(focusedItem.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.FONT_SIZE) || '20px')
          const nextFontSize = currentFontSize + fontSizeStep
          const newFontSize = (nextFontSize > fontSizeRange[1] ? fontSizeRange[0] : nextFontSize) + 'px'
          focusedItem.style.fontSize = newFontSize
          focusedItem.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.FONT_SIZE, newFontSize)
          focusedItem.focus()
          NapStorage.update(focusedItem)
        }
        break
      }

      case 'link-effect': {
        changeEffect('LINK')
        break
      }

      case 'link-rotation': {
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
