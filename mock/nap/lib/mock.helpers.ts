import { Num } from '@/helpers/number'
import { NapModel } from '@/models/nap.model'
import { StaticMockLib } from 'mock/static'
import { UserMockLib } from 'mock/user'
import * as Lib from '.'

/**
 *
 *
 *
 * generates random naps base on NapModel
 */
export const randomNaps = ({ args, length = 10 }: Lib.T.GenerateRandomNapsArgs): NapModel[] => {
  const array: NapModel[] = []
  for (let i = 0; i < length; i++) {
    array.push({
      id: StaticMockLib.HE.randomStatic('ID'),
      createAt: StaticMockLib.HE.randomStatic('DATE_STRING'),
      updateAt: StaticMockLib.HE.randomStatic('DATE_STRING'),
      creator: args?.creator || UserMockLib.HE.randomUsers({ length: 1 })[0],
      ...Lib.CO.NAP_BOARDS[Num.random(0, Lib.CO.NAP_BOARDS.length - 1)],
    })
  }
  return array
}
