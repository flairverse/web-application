import { useRecoilValue } from 'recoil'
import { navbarAtoms } from '@/store/atoms'

export const useNavbarLayout = () => {
  const onGapDBLClick = () => {
    window.scrollTo(0, 0)
  }

  return {
    onGapDBLClick,
  }
}

export const useNavbarSearchBox = () => {
  const searchQuery = useRecoilValue(navbarAtoms.searchQuery)
}
