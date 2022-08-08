import { PickUpUIKitLib } from '@/components/ui-kit/pick-up'
import { componentNapCreatorAtomFamilies } from '@/store'
import { useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const usePostsPickUp = ({ boardRef, storeKeys }: Pick<Lib.T.PostsPickUpProps, 'boardRef' | 'storeKeys'>) => {
  const setPickUp = useSetRecoilState(componentNapCreatorAtomFamilies.postsPickUp(storeKeys.popups.post))
  const setActiveOptions = useSetRecoilState(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const Inserters = Lib.H.useInserters({ boardRef, storeKeys })

  const handlePickUpClose = () => {
    const { current: board } = boardRef
    if (!board) {
      return
    }

    setPickUp(false)
    setActiveOptions('none')
  }

  const onPostSelect = (id: number) => {
    new Inserters().newPost(id)
    setPickUp(false)
  }

  const { current: pickUpProps } = useRef<Omit<PickUpUIKitLib.T.PickUpProps, 'visibility'>>({
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
