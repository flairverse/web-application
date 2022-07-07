import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily, SerializableParam } from 'recoil'
import * as Lib from '../lib'

export const currentWindowBreakpoint = atomFamily<Lib.T.CurrentWindowBreakpoint, SerializableParam>({
  key: AtomFamilies.currentWindowBreakpoint,
  default: {
    breakpoint: 1200,
    stringifiedBreakpoint: '1200px',
    windowWidth: 1200,
  },
})
