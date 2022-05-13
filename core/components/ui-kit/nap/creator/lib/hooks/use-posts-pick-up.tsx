import { PickUpProps } from '@/components/ui-kit/pick-up/lib/types'
import { createNapAtoms } from '@/store/atoms'
import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import * as Lib from '..'

export const usePostsPickUp = () => {
  const [pickUp, setPickUp] = useRecoilState(createNapAtoms.postsPickUp)

  const { current: pickUpProps } = useRef<PickUpProps>({
    visibility: pickUp,
    onClose: () => setPickUp(false),
    filter: {
      content: <Lib.C.PostsPopupFilters />,
      filters: [],
      storeKey: 'COMPONENT_PICK_UP_FILTERS_VISIBILITY',
    },
    searchBox: {
      storeKey: 'COMPONENT_PUCK_UP_SEARCH_QUERY',
      delay: 500,
      onChange: query => console.log(query),
    },
  })

  return { pickUpProps }
}
