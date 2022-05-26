import { PickUpProps } from '@/components/ui-kit/pick-up/lib/types'
import { createNapAtoms } from '@/store/atoms'
import { useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const usePostsPickUp = ({ boardRef }: Pick<Lib.T.PostsPickUpProps, 'boardRef'>) => {
  const setPickUp = useSetRecoilState(createNapAtoms.postsPickUp)
  const setActiveOptions = useSetRecoilState(createNapAtoms.activeOption)
  const Inserters = Lib.H.useInserters(boardRef)

  const handlePickUpClose = () => {
    const { current: board } = boardRef
    if (!board) {
      return
    }

    setPickUp(false)
    setActiveOptions('none')
  }

  const onPostSelect = (id: number) => {
    new Inserters(boardRef).newPost(id)
    setPickUp(false)
  }

  const { current: pickUpProps } = useRef<Omit<PickUpProps, 'visibility'>>({
    cancelButton: true,
    onClose: handlePickUpClose,
    searchBox: {
      storeKey: 'PAGE__CREATE_NAP___POSTS_PICKUP_SEARCH_QUERY',
      delay: 500,
      onChange: query => console.log(query),
    },
  })

  return { pickUpProps, onPostSelect }
}
