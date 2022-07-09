import { UserModel } from '@/models/user.model'
import * as Lib from './lib'

export const mockedUsers: UserModel[] = [
  ...Lib.HE.randomUsers({ length: 3 }),

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  ...Lib.HE.randomUsers({ length: 5 }),

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  ...Lib.HE.randomUsers({ length: 1 }),

  Lib.HE.randomUsers({
    length: 1,
    args: {
      naps: [],
    },
  })[0],

  ...Lib.HE.randomUsers({ length: 20 }),
]
