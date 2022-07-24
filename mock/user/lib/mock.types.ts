import { UserModel } from '@/models/user.model'
import { MockLib } from 'mock'

export type GenerateRandomUsersArgs = MockLib.T.DynamicRandom<Pick<UserModel, 'naps'>>
