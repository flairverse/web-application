import { Img } from '@/helpers/image'
import { Num } from '@/helpers/number'
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
