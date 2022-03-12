/**
 * import all themes:
 * imported modules with the _ prefix are referring to the theme JSON files in the public folder
 */
import _darkDefault from 'public/themes/dark-default.json'
import _lightDefault from 'public/themes/light-default.json'
import _darkHighContrast from 'public/themes/dark-high-contrast.json'
import _darkOcean from 'public/themes/dark-ocean.json'
import { Theme } from '../theme'
import { themes } from '../theme/lib/constants'

describe('Testing [helpers] => theme', () => {
  /**
   *
   * All themes must be matched.
   * All themes are supposed to be similar to the default light theme
   * We could use a typed object in TS. But we did not.Just to make it lightweight. Reason:
   * (Static file serving is lighter: https://nextjs.org/docs/basic-features/static-file-serving)
   * If you think it's not the best way and typed objects are better,
   * then feel free to make a pull request by mentioning your reason.
   */
  it('should verify all themes are matched', () => {
    const baseObjectKeys = Object.keys(_lightDefault)
    expect(Object.keys(_darkDefault)).toStrictEqual(baseObjectKeys)
    expect(Object.keys(_darkHighContrast)).toMatchObject(baseObjectKeys)
    expect(Object.keys(_darkOcean)).toMatchObject(baseObjectKeys)
  })

  it('should give a css root containing `color-scheme` keyword', () => {
    const theme = new Theme()
    const CSSRoot = theme.makeCSSRoot(themes.dark)
    expect(CSSRoot).toContain('color-scheme')
  })

  it('should give defined themes containing `data-theme` keyword', () => {
    const theme = new Theme()
    theme.defineThemes()
    expect(theme.CSSRoot).toContain('data-theme')
  })

  it('should initialize Theme instance and return CSSRoot containing `data-theme` & `color-scheme` keywords', () => {
    const CSSRoot = Theme.use()
    expect(CSSRoot).toContain('data-theme')
    expect(CSSRoot).toContain('color-scheme')
  })
})
