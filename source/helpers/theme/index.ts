import * as Lib from './lib'

export class Theme {
  CSSRoot: string = ''

  constructor() {
    this.CSSRoot = `
      :root {
        ${this.makeCSSRoot(Lib.CO.themes.light)}
      }
    `
  }

  /**
   *
   *
   * makes a css root object
   * @Returns css root from given theme
   */
  makeCSSRoot({ settings, values }: Lib.T.Theme): string {
    let root = `color-scheme:${settings.mode};`
    const keys = Object.keys(values)
    for (const key of keys) {
      root += `--${key}:${values[key]};`
    }
    return root
  }

  /**
   *
   *
   * defining all provided themes to appending them to the document stylesheet
   */
  defineThemes() {
    const themes = <Lib.T.ThemeNames[]>Object.keys(Lib.CO.themes)

    for (const theme of themes) {
      const { settings, values } = Lib.CO.themes[theme]

      this.CSSRoot += `
        [data-theme='${theme}'] {
          ${this.makeCSSRoot({ settings, values })}
        }
      `
    }
  }

  static use() {
    const theming = new this()
    theming.defineThemes()
    return theming.CSSRoot
  }
}
