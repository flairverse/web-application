import * as Lib from './lib'
import { RegExes } from '@/constants/reg-exes'

export class Num {
  /**
   *
   *
   * returns a random number between "min" and "max"
   * @defaults { min: 0, max: 10 }
   */
  static random(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   *
   *
   * rounds and stringifies a number
   * @param num number to stringify
   * @param digits decimals
   * @returns rounded and stringified number
   */
  static stringify = (num: number, digits: number = 1) => {
    const { roundSymbols } = Lib.CO
    let i: number

    for (i = roundSymbols.length - 1; i > 0; i--) {
      if (num >= roundSymbols[i].value) {
        break
      }
    }

    return (num / roundSymbols[i].value).toFixed(digits).replace(RegExes.round, '$1') + roundSymbols[i].symbol
  }
}
