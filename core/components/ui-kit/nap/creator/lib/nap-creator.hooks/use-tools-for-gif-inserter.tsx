import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineColumnWidth, AiOutlineRotateRight } from 'react-icons/ai'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useToolsForGifInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const setPickUp = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const { changeRotation, getFocusedItem, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const widthSizeRange = [100, 300]
  const widthSizeStep = 50

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-gif', title: 'Add new', disabled: false },
    {
      Icon: AiOutlineColumnWidth,
      type: 'gif-size',
      title: 'Resize',
      disabled: activeOption !== 'gif' || activeItemID === null,
    },
    {
      Icon: IoColorFilterOutline,
      type: 'gif-effect',
      title: 'Effect',
      disabled: activeOption !== 'gif' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'gif-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'gif' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-gif': {
        setPickUp(true)
        break
      }

      case 'gif-size': {
        const focusedItem = getFocusedItem()
        if (focusedItem) {
          const gif = focusedItem.querySelector('img')
          if (!gif) {
            return
          }

          const currentWidthSize = parseInt(window.getComputedStyle(gif).width)
          const nextWidthSize = currentWidthSize + widthSizeStep
          gif.style.width = (nextWidthSize > widthSizeRange[1] ? widthSizeRange[0] : nextWidthSize) + 'px'
          focusedItem.focus()
        }
        break
      }

      case 'gif-effect': {
        changeEffect('GIF', '.gif')
        break
      }

      case 'gif-rotation': {
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
