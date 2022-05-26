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

  static createArrayFromRange = ({ prefix, range, suffix, fixesType }: Lib.T.CreateArrayFromRangeArgs) => {
    const [from, to] = range
    const ranged: Lib.T.CreateArrayFromRangeReturn[] = []
    const diff = to - from

    for (let i = 0; i <= diff; i++) {
      let full: number | string = from + i

      if (fixesType) {
        const { placement, type } = fixesType
        full = placement === 'prefix' ? 'Jan, ' + full : full + ', Jan'
      }

      if (suffix) {
        full = full + ' ' + suffix
      }

      if (prefix) {
        full = prefix + ' ' + full
      }

      ranged.push({
        full: full.toString(),
        integer: parseFloat(full.toString()),
      })
    }

    return ranged
  }

  static extract(string: string, parse?: boolean) {
    const result = string.match(/\d+/g)?.join('') || ''
    return parse ? parseInt(result) : result
  }
}
