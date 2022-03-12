import * as Lib from '.'

export type Themes = {
  [name in ThemeNames]: Theme
}

export type Theme = {
  settings: ThemeSettings
  values: ThemeValues
}

export type ThemeSettings = {
  mode: 'light' | 'dark'
  displayName: string
  id: string
}

export type ThemeValues = {
  [key: string]: string
}

export type ThemeNames = typeof Lib.CO.themeNames[number]
