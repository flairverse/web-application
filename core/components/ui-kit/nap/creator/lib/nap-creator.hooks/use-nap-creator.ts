import { componentNapCreatorAtomFamilies } from '@/store'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useNapCreator = ({ boardRef, imageInputRef, storeKeys }: Lib.T.UseNapCreatorArgs) => {
  Lib.H.useFramesScaling(boardRef)
  const setShowMoreOptions = useSetRecoilState(componentNapCreatorAtomFamilies.showMoreOptions(storeKeys.showMoreOptions))
  const setActiveOption = useSetRecoilState(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const setPostPopupVisibility = useSetRecoilState(componentNapCreatorAtomFamilies.postsPickUp(storeKeys.popups.post))
  const setMentionPopupVisibility = useSetRecoilState(componentNapCreatorAtomFamilies.mentionPickUp(storeKeys.popups.mention))
  const setGifPopupVisibility = useSetRecoilState(componentNapCreatorAtomFamilies.giphyPickUp(storeKeys.popups.giphy))
  const { pickImage } = Lib.H.useImagePicker({ imageInputRef, boardRef, storeKeys })
  const NapStorage = Lib.H.useNapStorage(boardRef)
  const Inserters = Lib.H.useInserters({ boardRef, storeKeys })

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
