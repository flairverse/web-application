import type { UseFontHookLib } from '@/hooks/use-font'

export class Setting {
  defaultFont: UseFontHookLib.T.Font = 'open-sans'

  static get use() {
    return new Setting()
  }

  get font() {
    return this.defaultFont
  }

  set font(_font: UseFontHookLib.T.Font) {
    this.defaultFont = _font
  }
}
