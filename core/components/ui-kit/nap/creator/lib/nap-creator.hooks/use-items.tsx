import { pageCreateNapAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useItems = ({ onOptionsClick, boardRef }: Pick<Lib.T.ItemsProps, 'boardRef' | 'onOptionsClick'>) => {
  const [activeOption, setActiveOptions] = useRecoilState(pageCreateNapAtoms.activeOption)
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const Insert = Lib.H.useInserters(boardRef)

  const focusActiveItem = (target?: Lib.T.Options) => {
    if (activeItemID) {
      if (target) {
        const foundItems = Lib.HE.getFramesByType(boardRef, target)
        if (foundItems) {
          foundItems[foundItems.length - 1].focus()
        }
      } else {
        Lib.HE.getFrameById(boardRef, activeItemID)?.focus()
      }
    }
  }

  const addItem = () => {
    const insert = new Insert(boardRef)

    if (activeOption !== 'none') {
      if (Lib.HE.boardContains(activeOption, boardRef)) {
        focusActiveItem(activeOption)
      } else {
        switch (activeOption) {
          case 'text': {
            insert.newText()
            break
          }

          case 'question': {
            insert.newQuestion()
            break
          }

          case 'quiz': {
            insert.newQuiz()
            break
          }

          case 'reminder': {
            insert.newReminder()
            break
          }
        }
      }
    }
  }

  const onItemClick = (key: Lib.T.Options) => {
    if (key === activeOption) {
      setActiveOptions('none')
    } else {
      onOptionsClick(key)
    }
  }

  useEffect(focusActiveItem, [activeItemID])
  useEffect(addItem, [activeOption])
  return { onItemClick }
}
