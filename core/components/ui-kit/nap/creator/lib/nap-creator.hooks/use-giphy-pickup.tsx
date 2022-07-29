import { PickUpUIKitLib } from '@/components/ui-kit/pick-up'
import { environments } from '@/constants/environments.constant'
import * as storeKeys from '@/constants/store-keys.constants'
import { numeralBreakpoints } from '@/constants/style-variables.constant'
import { useGetAutoBreakpoint } from '@/hooks/use-auto-breakpoint'
import { pageCreateNapAtoms } from '@/store/atoms'
import { StoreKeys } from '@/types/recoil.type'
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'
import { IGif } from '@giphy/js-types'
import { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useGiphyPickUp = ({ boardRef }: Pick<Lib.T.PostsPickUpProps, 'boardRef'>) => {
  const searchQueryKey: StoreKeys = storeKeys.PAGE__CREATE_NAP___GIFS_PICKUP_SEARCH_QUERY
  const setPickUp = useSetRecoilState(pageCreateNapAtoms.giphyPickUp)
  const setActiveOptions = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const Inserters = Lib.H.useInserters({ boardRef })
  const insert = new Inserters()
  const [searchQuery, setSearchQuery] = useState('')
  const [updateKey, setUpdateKey] = useState(0)
  const gf = new GiphyFetch(environments.giphyKey)
  const { windowWidth, breakpoint } = useGetAutoBreakpoint()

  const gifFetcher = (offset: number): Promise<GifsResult> => {
    if (searchQuery) {
      return gf.search(searchQuery, { offset, limit: 20 })
    } else {
      return gf.trending({ offset, limit: 20 })
    }
  }

  const handlePickUpClose = () => {
    const { current: board } = boardRef
    if (!board) {
      return
    }

    setPickUp(false)
    setActiveOptions('none')
  }

  const { current: pickUpProps } = useRef<Omit<PickUpUIKitLib.T.PickUpProps, 'visibility'>>({
    cancelButton: true,
    onClose: handlePickUpClose,
    placeholder: 'Search... (powered by GIPHY)',
    searchBox: {
      storeKey: searchQueryKey,
      delay: 750,
      onChange: value => {
        setSearchQuery(value)
        setUpdateKey(currentVal => currentVal + 1)
      },
    },
  })

  const onGifClick = ({ images: { fixed_height } }: IGif) => {
    // fixed_height will always giv the gif in 200px height
    insert.newGif(fixed_height.url)
  }

  const giphyColumns = (): number => {
    if (breakpoint > numeralBreakpoints.md) {
      return 5
    } else if (breakpoint <= numeralBreakpoints.md && breakpoint > numeralBreakpoints.sm) {
      return 4
    } else if (breakpoint <= numeralBreakpoints.sm && breakpoint > numeralBreakpoints.xs) {
      return 3
    } else {
      return 2
    }
  }

  return {
    pickUpProps,
    gifFetcher,
    onGifClick,
    updateKey,
    windowWidth,
    giphyColumns,
  }
}
