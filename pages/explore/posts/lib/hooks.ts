import { navbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const useExplorePostsPage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(navbarAtoms.bottomNavbarActiveItem)

  const onMount = () => {
    setBottomNavbarActiveItem('explore')
  }

  useEffect(onMount, [])

  return {}
}
