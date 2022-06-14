import { layoutBottomNavbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const useProfilePage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(layoutBottomNavbarAtoms.activeItem)

  const onMount = () => {
    setBottomNavbarActiveItem('profile')
  }

  useEffect(onMount, [])

  return {}
}
