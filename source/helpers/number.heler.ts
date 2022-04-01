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
}
