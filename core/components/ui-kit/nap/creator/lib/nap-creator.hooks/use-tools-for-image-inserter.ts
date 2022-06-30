import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineColumnWidth, AiOutlineRotateRight } from 'react-icons/ai'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForImageInserter = ({ boardRef, imageInputRef }: Lib.T.ToolsForImageInserter) => {
  const Inserter = Lib.H.useInserters({ boardRef })
  const insert = new Inserter()
  const { getFocusedItem, changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const { pickImage } = Lib.H.useImagePicker({ imageInputRef, boardRef })
  const widthSizeRange = [100, 300]
  const widthSizeStep = 50

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-image', title: 'Add new', disabled: !insert.canInsert('image', false) },
    {
      Icon: AiOutlineColumnWidth,
      type: 'image-size',
      title: 'Resize',
      disabled: activeOption !== 'image' || activeItemID === null,
    },
    {
      Icon: IoColorFilterOutline,
      type: 'image-effect',
      title: 'Effect',
      disabled: activeOption !== 'image' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'image-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'image' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'add-image': {
        pickImage()
        break
      }

      case 'image-size': {
        const focusedItem = getFocusedItem()

        if (focusedItem) {
          const images = <NodeListOf<HTMLImageElement>>focusedItem.querySelectorAll(`.variant img`)
          if (!images || images.length === 0) {
            return
          }

          const currentWidthSize = parseInt(window.getComputedStyle(images[0]).width)
          const nextWidthSize = currentWidthSize + widthSizeStep
          images.forEach(image => (image.style.width = (nextWidthSize > widthSizeRange[1] ? widthSizeRange[0] : nextWidthSize) + 'px'))
          focusedItem.focus()
        }
        break
      }

      case 'image-effect': {
        changeEffect('IMAGE', '.image')
        break
      }

      case 'image-rotation': {
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
