import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily, SerializableParam } from 'recoil'

export const napIndex = atomFamily<number, SerializableParam>({
  key: AtomFamilies.napIndex,
  default: 0,
})
