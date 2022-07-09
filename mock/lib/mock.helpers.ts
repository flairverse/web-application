import { Img } from '@/helpers/image'
import { Num } from '@/helpers/number'
import { NapModel } from '@/models/nap.model'
import { UserModel } from '@/models/user.model'
import * as Lib from '.'

/**
 *
 *
 *
 * generates none dynamic relational data
 */
export const randomStatic = <ReturnType extends Lib.T.StaticRandomReturnType = string>(type: Lib.T.RandomGeneratorTypes): ReturnType => {
  switch (type) {
    case 'USERNAME': {
      const firstName = randomStatic('FIRST_NAMES')
      const lastName = randomStatic('LAST_NAMES')
      const splitter = randomStatic('USERNAME_SPLITTER')
      const username = `${firstName.toLowerCase()}${splitter}${lastName.toLowerCase()}`
      return <ReturnType>(username.length <= 30 ? username : username.substring(0, 30))
    }
    case 'DATE_STRING': {
      return <ReturnType>new Date(+new Date() - Num.random(0, 9999999999)).toISOString()
    }
    case 'ID': {
      return <ReturnType>Num.random(1, 500)
    }
    case 'PROFILE_IMAGE': {
      const useUndefined = Num.random(0, 5) === 0
      return <ReturnType>(useUndefined ? undefined : Img.random(300, 300))
    }
    default: {
      const array = Lib.CO.RANDOMS[type]
      return <ReturnType>array[Num.random(0, array.length)]
    }
  }
}

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
      id: Lib.HE.randomStatic('ID'),
      username: Lib.HE.randomStatic('USERNAME'),
      createAt: Lib.HE.randomStatic('DATE_STRING'),
      updateAt: Lib.HE.randomStatic('DATE_STRING'),
      firstName: Lib.HE.randomStatic('FIRST_NAMES'),
      lastName: Lib.HE.randomStatic('LAST_NAMES'),
      job: Lib.HE.randomStatic('JOBS'),
      profileImage: Lib.HE.randomStatic('PROFILE_IMAGE'),
      naps: args?.naps || [],
    })
  }
  return array
}

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
      id: Lib.HE.randomStatic('ID'),
      createAt: Lib.HE.randomStatic('DATE_STRING'),
      updateAt: Lib.HE.randomStatic('DATE_STRING'),
      creator: args?.creator || randomUsers({ length: 1 })[0],
      boardScale: 1,
      gif: [],
      image: [],
      link: [],
      mention: [],
      post: [],
      question: [],
      quiz: [],
      reminder: [],
      text: [],
    })
  }
  return array
}
