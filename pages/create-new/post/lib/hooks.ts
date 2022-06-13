import { layoutBottomNavbarAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const useCreateNewPage = () => {
  const setBottomNavbarActiveItem = useSetRecoilState(layoutBottomNavbarAtoms.activeItem)

  const onMount = () => {
    setBottomNavbarActiveItem('create-new-post')
  }

  useEffect(onMount, [])

  return {}
}
