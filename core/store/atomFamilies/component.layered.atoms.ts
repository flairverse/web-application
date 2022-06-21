import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily, SerializableParam } from 'recoil'

export const activeLayer = atomFamily<null | number, SerializableParam>({
  key: AtomFamilies.activeLayer,
  default: null,
})
