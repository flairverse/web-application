import { navbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const useMessagingPage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(navbarAtoms.bottomNavbarActiveItem)

  const onMount = () => {
    setBottomNavbarActiveItem('messaging')
  }

  useEffect(onMount, [])

  return {}
}
