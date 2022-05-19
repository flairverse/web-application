import * as Lib from '../'
import { createNapAtoms } from '@/store/atoms'
import { useSetRecoilState } from 'recoil'
import { RefObject } from 'react'

export const useNapCreator = (boardRef: RefObject<HTMLDivElement | null>) => {
  const setShowMoreOptions = useSetRecoilState(createNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(createNapAtoms.activeOption)
  const setPostPopupVisibility = useSetRecoilState(createNapAtoms.postsPickUp)
  Lib.H.useFramesScaling(boardRef)

  const optionsClick = (key: Lib.T.Options) => {
    if (key !== 'more|less') {
      setActiveOption(key)
    }

    switch (key) {
      case 'more|less': {
        setShowMoreOptions(_ => !_)
        break
      }

      case 'post': {
        if (!Lib.HE.boardContains('post', boardRef)) {
          setPostPopupVisibility(true)
        }
        break
      }

      default: {
        setShowMoreOptions(false)
      }
    }
  }

  return {
    on: {
      optionsClick,
    },
  }
}
