/**
 * import all themes:
 * imported modules with the _ prefix are referring to the theme JSON files in the public folder
 */
import _lightDefault from 'public/themes/light-default.json'
import _darkDefault from 'public/themes/dark-default.json'
import _darkHighContrast from 'public/themes/dark-high-contrast.json'
import _darkOcean from 'public/themes/dark-ocean.json'

import * as Lib from '.'

export const themeNames = ['light', 'dark', 'darkHighContrast', 'darkOcean'] as const

export const themes: Lib.T.Themes = {
  light: {
    values: _lightDefault,
    settings: {
      mode: 'light',
      displayName: 'Default light',
      id: 'light'
    }
  },
  dark: {
    values: _darkDefault,
    settings: {
      mode: 'dark',
      displayName: 'Default dark',
      id: 'dark'
    }
  },
  darkHighContrast: {
    values: _darkHighContrast,
    settings: {
      mode: 'dark',
      displayName: 'Dark Hugh Contrast',
      id: 'dark/h'
    }
  },
  darkOcean: {
    values: _darkOcean,
    settings: {
      mode: 'dark',
      displayName: 'Dark Ocean',
      id: 'ocean/d'
    }
  }
}
