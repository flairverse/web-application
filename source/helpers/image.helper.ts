import { Num } from './number.heler'

export class Img {
  /**
   *
   *
   * generates random image as a placeholder
   */
  static random(width?: number, height?: number) {
    const w = width || Num.random(300, 700)
    const h = height || Num.random(300, 700)

    return `https://picsum.photos/${w}/${h}`
  }
}
