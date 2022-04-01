export class Font {
  CSSRoot: string = ''

  constructor() {
    this.CSSRoot = `
      :root {
        --ff-0: red;
        --ff-1: red;
        --ff-2: red;
        --ff-3: red;
      }
    `
  }
}
