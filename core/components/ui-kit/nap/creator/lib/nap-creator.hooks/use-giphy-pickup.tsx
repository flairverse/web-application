import { PickUpUIKitLib } from '@/components/ui-kit/pick-up'
import { environments } from '@/constants/environments.constant'
import { numeralBreakpoints } from '@/constants/style-variables.constant'
import { useGetAutoBreakpoint } from '@/hooks/use-auto-breakpoint'
import { componentNapCreatorAtomFamilies } from '@/store'
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'
import { IGif } from '@giphy/js-types'
import { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useGiphyPickUp = ({ boardRef, storeKeys }: Lib.T.UseGiphyPickUp) => {
  const setPickUp = useSetRecoilState(componentNapCreatorAtomFamilies.giphyPickUp(storeKeys.popups.giphy))
  const setActiveOptions = useSetRecoilState(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const Inserters = Lib.H.useInserters({ boardRef, storeKeys })
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
      storeKey: storeKeys.searchQueries.giphy,
      delay: 750,
      onChange: value => {
        setSearchQuery(value)
        setUpdateKey(currentVal => currentVal + 1)
      },
    },
  })

  const onGifClick = ({ images: { fixed_height } }: IGif) => {
    // fixed_height will always give the gif in 200px height
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
