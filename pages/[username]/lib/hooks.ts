import { navbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const useProfilePage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(navbarAtoms.bottomNavbarActiveItem)

  const onMount = () => {
    setBottomNavbarActiveItem('profile')
  }

  useEffect(onMount, [])

  return {}
}
