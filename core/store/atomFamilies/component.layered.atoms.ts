import { atomFamily, SerializableParam } from 'recoil'
import { AtomFamilies } from '@/enums/store-families.enum'

export const activeLayer = atomFamily<null | number, SerializableParam>({
  key: AtomFamilies.activeLayer,
  default: null,
})
