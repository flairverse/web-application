import { RecoilState } from 'recoil'
import * as storeTypes from '@/constants/store-types.constants'

export type RecoilWithDynamicKey<T> = (key: StoreKeys, defaultValue?: T) => RecoilState<T>

export type StoreKeys = keyof typeof storeTypes
