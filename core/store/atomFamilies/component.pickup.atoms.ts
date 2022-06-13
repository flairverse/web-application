import { atomFamily } from 'recoil'
import { AtomFamilies } from '@/enums/store-families.enum'

export const pickUpFiltersVisibility = atomFamily({
  key: AtomFamilies.pickUpFiltersVisibility,
  default: false,
})

export const pickUpSearchQuery = atomFamily({
  key: AtomFamilies.pickUpSearchQuery,
  default: '',
})
