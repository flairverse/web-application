import { NapModel } from '@/models/nap.model'
import { UserModel } from '@/models/user.model'

export type RandomKeys = 'JOBS' | 'FIRST_NAMES' | 'LAST_NAMES' | 'USERNAME_SPLITTER'
export type RandomGeneratorTypes = RandomKeys | 'USERNAME' | 'DATE_STRING' | 'ID' | 'PROFILE_IMAGE'
export type Randoms = {
  [key in RandomKeys]: string[]
}

export type StaticRandomReturnType = string | number | undefined

type PossibleDynamicRandoms = UserModel | NapModel
export interface DynamicRandom<T extends Partial<PossibleDynamicRandoms>> {
  length?: number
  args?: T
}

export type GenerateRandomUsersArgs = DynamicRandom<Pick<UserModel, 'naps'>>
export type GenerateRandomNapsArgs = DynamicRandom<Pick<NapModel, 'creator'>>
