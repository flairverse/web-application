import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily } from 'recoil'

export const pickUpFiltersVisibility = atomFamily({
  key: AtomFamilies.pickUpFiltersVisibility,
  default: false,
})

export const pickUpSearchQuery = atomFamily({
  key: AtomFamilies.pickUpSearchQuery,
  default: '',
})
