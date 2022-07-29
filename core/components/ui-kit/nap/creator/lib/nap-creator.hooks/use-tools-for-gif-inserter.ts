import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineColumnWidth, AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useToolsForGifInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const setPickUp = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const { changeRotation, getFocusedItem, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const widthSizeRange = [100, 300]
  const widthSizeStep = 50

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: IoAddCircleOutline,
      type: 'add-gif',
      title: 'Add new',
      disabled: false,
    },
    {
      Icon: AiOutlineColumnWidth,
      type: 'gif-size',
      title: 'Resize',
      disabled: activeOption !== 'gif' || activeItemID === null,
    },
    {
      Icon: BiPalette,
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
          const gifs = <NodeListOf<HTMLImageElement>>focusedItem.querySelectorAll(`.variant img`)
          if (!gifs || gifs.length === 0) {
            return
          }

          const currentWidthSize = parseInt(window.getComputedStyle(gifs[0]).width)
          const nextWidthSize = currentWidthSize + widthSizeStep
          gifs.forEach(gif => (gif.style.width = (nextWidthSize > widthSizeRange[1] ? widthSizeRange[0] : nextWidthSize) + 'px'))
          focusedItem.focus()
          NapStorage.update(focusedItem)
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
