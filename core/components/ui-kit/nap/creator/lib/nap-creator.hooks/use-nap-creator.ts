import { pageCreateNapAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useNapCreator = ({ boardRef, imageInputRef }: Lib.T.UseNapCreatorArgs) => {
  Lib.H.useFramesScaling(boardRef)
  const setShowMoreOptions = useSetRecoilState(pageCreateNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const setPostPopupVisibility = useSetRecoilState(pageCreateNapAtoms.postsPickUp)
  const setMentionPopupVisibility = useSetRecoilState(pageCreateNapAtoms.mentionPickUp)
  const setGifPopupVisibility = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const { pickImage } = Lib.H.useImagePicker({ imageInputRef, boardRef })
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const Inserters = Lib.H.useInserters({ boardRef })

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

  const insertStoredElements = () => {
    NapStorage.readAll().then(elements => {
      if (elements.length > 0) {
        new Inserters().bulkNewAny(elements)
      }
    })
  }

  useEffect(insertStoredElements, [])

  return {
    on: {
      optionsClick,
    },
  }
}
