export class Scale {
  static image(size: number): string {
    const defaultImageSize = 65
    return size * defaultImageSize + 'px'
  }

  static username(size: number): string {
    if (size === 1) {
      return 'var(--f-2)'
    } else if (size < 1) {
      return 'var(--f-1)'
    } else {
      return 'var(--f-3)'
    }
  }

  static job(size: number): string {
    if (size === 1) {
      return 'var(--f-1)'
    } else if (size < 1) {
      return 'var(--f-0)'
    } else {
      return 'var(--f-2)'
    }
  }
}
