import * as Lib from '../'
import { createNapAtoms } from '@/store/atoms'
import { useSetRecoilState } from 'recoil'

export const useCreateNewNapPage = () => {
  const setShowMoreOptions = useSetRecoilState(createNapAtoms.showMoreOptions)
  const setActiveOption = useSetRecoilState(createNapAtoms.activeOption)

  const optionsClick = (key: Lib.T.Options) => {
    switch (key) {
      case 'more|less': {
        setShowMoreOptions(_ => !_)
        break
      }
      default: {
        setActiveOption(key)
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
