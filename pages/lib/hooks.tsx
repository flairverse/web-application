import { Tab } from '@/components/ui-kit/tabs/lib/types'
import { layoutBottomNavbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import * as Lib from '.'

export const useIndexPage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(layoutBottomNavbarAtoms.activeItem)

  const onMount = () => {
    setBottomNavbarActiveItem('home')
  }

  const categories: Tab[] = [
    {
      content: <Lib.C.ForYouContent />,
      key: 'for-you',
      title: 'For you',
    },
    {
      content: <Lib.C.FollowingsContent />,
      key: 'followings',
      title: 'Followings',
    },
  ]

  useEffect(onMount, [])

  return {
    get: {
      categories,
    },
  }
}
