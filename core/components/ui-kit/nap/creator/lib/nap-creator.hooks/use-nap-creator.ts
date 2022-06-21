import { pageCreateNapAtoms } from '@/store/atoms'
import { RefObject } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useNapCreator = (boardRef: RefObject<HTMLDivElement | null>) => {
  const setShowMoreOptions = useSetRecoilState(pageCreateNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const setPostPopupVisibility = useSetRecoilState(pageCreateNapAtoms.postsPickUp)
  const setMentionPopupVisibility = useSetRecoilState(pageCreateNapAtoms.mentionPickUp)
  const setGifPopupVisibility = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
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

      case 'mention': {
        if (!Lib.HE.boardContains('mention', boardRef)) {
          setMentionPopupVisibility(true)
        }
        break
      }

      case 'gif': {
        if (!Lib.HE.boardContains('gif', boardRef)) {
          setGifPopupVisibility(true)
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
