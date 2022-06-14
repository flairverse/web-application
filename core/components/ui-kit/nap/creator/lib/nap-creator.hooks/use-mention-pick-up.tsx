import { PickUpProps } from '@/components/ui-kit/pick-up/lib/pick-up.types'
import { pageCreateNapAtoms } from '@/store/atoms'
import { useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useMentionPickUp = ({ boardRef }: Pick<Lib.T.MentionPickUpProps, 'boardRef'>) => {
  const setPickUp = useSetRecoilState(pageCreateNapAtoms.mentionPickUp)
  const setActiveOptions = useSetRecoilState(pageCreateNapAtoms.activeOption)
  const Inserters = Lib.H.useInserters(boardRef)

  const handlePickUpClose = () => {
    const { current: board } = boardRef
    if (!board) {
      return
    }

    setPickUp(false)
    setActiveOptions('none')
  }

  const onUserSelect = (id: number) => {
    new Inserters(boardRef).newMention(id)
    setPickUp(false)
  }

  const { current: pickUpProps } = useRef<Omit<PickUpProps, 'visibility'>>({
    cancelButton: true,
    onClose: handlePickUpClose,
    searchBox: {
      storeKey: 'PAGE__CREATE_NAP___MENTIONS_PICKUP_SEARCH_QUERY',
      delay: 500,
      onChange: query => console.log(query),
    },
  })

  return { pickUpProps, onUserSelect }
}
