import { UserModel } from '@/models/user.model'
import { StaticMockLib } from 'mock/static'
import * as Lib from '.'

/**
 *
 *
 *
 * generates random user base on UserModel
 */
export const randomUsers = ({ args, length = 10 }: Lib.T.GenerateRandomUsersArgs): UserModel[] => {
  const array: UserModel[] = []
  for (let i = 0; i < length; i++) {
    array.push({
      id: StaticMockLib.HE.randomStatic('ID'),
      username: StaticMockLib.HE.randomStatic('USERNAME'),
      createAt: StaticMockLib.HE.randomStatic('DATE_STRING'),
      updateAt: StaticMockLib.HE.randomStatic('DATE_STRING'),
      firstName: StaticMockLib.HE.randomStatic('FIRST_NAMES'),
      lastName: StaticMockLib.HE.randomStatic('LAST_NAMES'),
      job: StaticMockLib.HE.randomStatic('JOBS'),
      profileImage: StaticMockLib.HE.randomStatic('PROFILE_IMAGE'),
      naps: args?.naps || [],
    })
  }
  return array
}
