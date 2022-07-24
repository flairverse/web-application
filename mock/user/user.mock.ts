import { UserModel } from '@/models/user.model'
import { NapMockLib } from 'mock/nap'
import * as Lib from './lib'

export const mockedUsers = (): UserModel[] => {
  return [
    ...Lib.HE.randomUsers({ length: 3 }),

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    ...Lib.HE.randomUsers({ length: 5 }),

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    ...Lib.HE.randomUsers({ length: 1 }),

    Lib.HE.randomUsers({
      length: 1,
      args: {
        naps: NapMockLib.HE.randomNaps({ length: 4 }),
      },
    })[0],

    ...Lib.HE.randomUsers({ length: 20 }),
  ]
}
