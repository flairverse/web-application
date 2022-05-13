import { atom } from 'recoil'
import { RecoilWithDynamicKey } from '@/types/recoil.type'

export const pickUpFiltersVisibility: RecoilWithDynamicKey<boolean> = key => {
  return atom<boolean>({
    key,
    default: false,
  })
}

export const pickUpSearchQuery: RecoilWithDynamicKey<string> = key => {
  return atom<string>({
    key,
    default: '',
  })
}
