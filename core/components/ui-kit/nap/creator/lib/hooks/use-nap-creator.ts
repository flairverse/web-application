import * as Lib from '../'
import { createNapAtoms } from '@/store/atoms'
import { useSetRecoilState } from 'recoil'

export const useNapCreator = () => {
  const setShowMoreOptions = useSetRecoilState(createNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(createNapAtoms.activeOption)
  const setPostPopupVisibility = useSetRecoilState(createNapAtoms.postsPickUp)

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
        setPostPopupVisibility(true)
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
