import { pageCreateNapAtoms } from '@/store/atoms'
import { RefObject } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useNapCreator = (boardRef: RefObject<HTMLDivElement>, imageInputRef: RefObject<HTMLInputElement>) => {
  const setShowMoreOptions = useSetRecoilState(pageCreateNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const setPostPopupVisibility = useSetRecoilState(pageCreateNapAtoms.postsPickUp)
  const setMentionPopupVisibility = useSetRecoilState(pageCreateNapAtoms.mentionPickUp)
  const setGifPopupVisibility = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const { pickImage } = Lib.H.useImagePicker({ imageInputRef, boardRef })
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

      case 'mention':
      case 'post': {
        const existItems = Lib.HE.getFramesByType(boardRef, key)
        if (existItems) {
          existItems[existItems.length - 1].focus()
        } else {
          switch (key) {
            case 'mention': {
              setMentionPopupVisibility(true)
              break
            }
            case 'post': {
              setPostPopupVisibility(true)
              break
            }
          }
        }
        break
      }

      case 'gif': {
        if (!Lib.HE.boardContains('gif', boardRef)) {
          setGifPopupVisibility(true)
        }
        break
      }

      case 'image': {
        if (!Lib.HE.boardContains('image', boardRef)) {
          pickImage()
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
