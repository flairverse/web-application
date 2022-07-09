import { RegExes } from '@/constants/reg-exes.constant'
import * as Lib from './lib'

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

  static range(start: number, end: number, step = 1) {
    const rangeArray = []

    for (let i = start; i <= end; i += step) {
      rangeArray.push(i)
    }
    return rangeArray
  }

  static iterateRange(start: number, end: number, step = 1) {
    return {
      [Symbol.iterator]() {
        return this
      },

      next() {
        if (start < end) {
          start = start + step
          return { value: start, done: false }
        }
        return { value: end, done: true }
      },
    }
  }

  static extract<ReturnType extends string[] | number[] = number[]>(string: string, parse = true): ReturnType {
    return <ReturnType>string.match(RegExes.digits)?.map(item => (parse ? parseFloat(item) : item)) || []
  }
}
