import * as Lib from '../'
import { GoTextSize } from 'react-icons/go'
import { IoAddCircleOutline, IoColorFilterOutline } from 'react-icons/io5'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { useRecoilValue } from 'recoil'
import { createNapAtoms } from '@/store/atoms'

export const useToolsForTextInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const Inserters = Lib.H.useInserters()
  const activeItemID = useRecoilValue(createNapAtoms.activeItemID)
  const activeOption = useRecoilValue(createNapAtoms.activeOption)
  const fontSizeRange = [10, 50]
  const fontSizeStep = 10

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-text', title: 'Add new', disabled: false },
    { Icon: GoTextSize, type: 'text-font-size', title: 'Font Size', disabled: activeOption !== 'text' || activeItemID === null },
    { Icon: IoColorFilterOutline, type: 'text-effect', title: 'Effect', disabled: activeOption !== 'text' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'text-rotation', title: 'Rotate', disabled: activeOption !== 'text' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    const { current: board } = boardRef
    if (!board) {
      return
    }

    switch (type) {
      case 'add-text': {
        new Inserters(boardRef).newText()
        break
      }

      case 'text-font-size': {
        if (activeItemID) {
          const focusedItem = board.querySelector(`#${activeItemID}`) as HTMLDivElement | null
          if (focusedItem) {
            const currentFontSize = parseInt(window.getComputedStyle(focusedItem).fontSize)
            const nextFontSize = currentFontSize + fontSizeStep
            focusedItem.style.fontSize = (nextFontSize > fontSizeRange[1] ? fontSizeRange[0] : nextFontSize) + 'px'
            focusedItem.focus()
          }
        }
        break
      }

      case 'text-effect': {
        if (activeItemID) {
          const focusedItem = board.querySelector(`#${activeItemID}`) as HTMLDivElement | null
          if (focusedItem) {
            const currentEffect = focusedItem.className.split(' ').filter(c => c !== 'frame' && c !== 'text')[0] as Lib.T.TextEffects
            const effectsRange = [0, Lib.CO.TEXT_EFFECTS.length - 1]
            const currentEffectIndex = Lib.CO.TEXT_EFFECTS.indexOf(currentEffect)
            const nextEffectIndex = currentEffectIndex + 1
            focusedItem.classList.remove(currentEffect)
            focusedItem.classList.add(nextEffectIndex > effectsRange[1] ? Lib.CO.TEXT_EFFECTS[effectsRange[0]] : Lib.CO.TEXT_EFFECTS[nextEffectIndex])
            focusedItem.focus()
          }
        }
        break
      }

      case 'text-rotation': {
        if (activeItemID) {
          const focusedItem = board.querySelector(`#${activeItemID}`) as HTMLDivElement | null
          if (focusedItem) {
            const angle = parseInt(focusedItem.getAttribute('data-rotation') || '0') as Lib.T.Elements.ElementRotation
            const nextAngle = angle + 45
            focusedItem.style.transform = `rotate(${nextAngle}deg)`
            focusedItem.setAttribute('data-rotation', nextAngle.toString())
            focusedItem.focus()
          }
        }
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
