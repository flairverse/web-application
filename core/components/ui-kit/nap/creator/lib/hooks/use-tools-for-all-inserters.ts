import { createNapAtoms } from '@/store/atoms'
import { useRecoilValue } from 'recoil'
import * as Lib from '../'

export const useToolsForAllInserters = ({ boardRef }: Pick<Lib.T.ToolsForInserters, 'boardRef'>) => {
  const activeItemID = useRecoilValue(createNapAtoms.activeItemID)

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

  return {
    getFocusedItem,
  }
}
