import { pageCreateNapAtoms } from '@/store/atoms'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForAllInserters = ({
  boardRef,
}: Pick<Lib.T.ToolsForInserters, 'boardRef'>) => {
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)

  /**
   *
   *
   *
   * finds the focused item
   */
  const getFocusedItem = (): HTMLDivElement | null => {
    if (!activeItemID) {
      return null
    }
    const { current: board } = boardRef
    if (!board) {
      return null
    }
    const id = '#'.concat(activeItemID)
    const focusedItem = board.querySelector(id) as HTMLDivElement | null
    return focusedItem
  }

  /**
   *
   *
   *
   * its one of the global tools for all inserters
   *  changes the focused item rotation
   */
  const changeRotation = () => {
    const focusedItem = getFocusedItem()
    if (!focusedItem) {
      return
    }

    const angle = <Lib.T.Elements.ElementRotation>(
      parseFloat(focusedItem.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION) || '0')
    )
    const scale = parseFloat(focusedItem.getAttribute(Lib.CO.FRAMES_DATA_ATTRS.SCALE) || '1')
    const nextAngle = angle + 45
    focusedItem.style.transform = `rotate(${nextAngle}deg) scale(${scale})`
    focusedItem.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.ROTATION, nextAngle.toString())
    focusedItem.focus()
  }

  /**
   *
   *
   *
   * changes the focused item effect
   *
   * @param effectGroup group name of effects
   * @param queried sometimes we need to query the found focused item to achieve the actual element that has the effect className
   */
  const changeEffect = (effectGroup: keyof typeof Lib.CO.EFFECTS, queried?: string) => {
    const focusedItem = getFocusedItem()
    if (!focusedItem) {
      return
    }

    const actualItem = <HTMLDivElement | null>(
      (queried ? focusedItem.querySelector(queried) : focusedItem)
    )
    if (!actualItem) {
      return
    }

    const currentEffect = actualItem.className.split(' ').pop() as any
    const effectsRange = [0, Lib.CO.EFFECTS[effectGroup].length - 1]
    const currentEffectIndex = Lib.CO.EFFECTS[effectGroup].indexOf(currentEffect)
    const nextEffectIndex = currentEffectIndex + 1
    const nextEffect =
      nextEffectIndex > effectsRange[1]
        ? Lib.CO.EFFECTS[effectGroup][effectsRange[0]]
        : Lib.CO.EFFECTS[effectGroup][nextEffectIndex]
    actualItem.classList.remove(currentEffect)
    actualItem.classList.add(nextEffect)
    actualItem.setAttribute(Lib.CO.FRAMES_DATA_ATTRS.EFFECT, nextEffect)
    actualItem.focus()
  }

  return {
    getFocusedItem,
    changeRotation,
    changeEffect,
  }
}
