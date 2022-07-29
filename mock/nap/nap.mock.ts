import { NapModel } from '@/models/nap.model'
import { UserMockLib } from 'mock/user'
import * as Lib from './lib'

export const mockedNaps: NapModel[] = [
  ...Lib.HE.randomNaps({ length: 3 }),

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1, args: { naps: Lib.HE.randomNaps({ length: 3 }) } })[0],
    },
  })[0],

  ...Lib.HE.randomNaps({ length: 3 }),

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  ...Lib.HE.randomNaps({ length: 2 }),

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({
        length: 1,
        args: { naps: Lib.HE.randomNaps({ length: 3 }) },
      })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  Lib.HE.randomNaps({
    length: 1,
    args: {
      creator: UserMockLib.HE.randomUsers({ length: 1 })[0],
    },
  })[0],

  ...Lib.HE.randomNaps({ length: 2 }),
]
