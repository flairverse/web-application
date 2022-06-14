import { SETTINGS } from '@/constants/settings.constant'
import { LocalStorage } from '@/helpers/local-storage'
import { hookFontAtoms } from '@/store/atoms'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as Lib from './lib'

export const useFont = () => {
  const [font, setFont] = useRecoilState(hookFontAtoms.fontState)

  const changeRoot = (property: Lib.T.FontWeightVariant, value: string) => {
    document.documentElement.style.setProperty(`--ff-${property}`, `var(--f-${value}-${property})`)
  }

  const changeFont = (newFont: Lib.T.Font) => {
    setFont(newFont)

    for (const i of Lib.CO.FONT_SIZE_VARIANT) {
      changeRoot(i, newFont)
    }

    LocalStorage.set('FONT', newFont)
  }

  const onMount = () => {
    const storedFont = LocalStorage.get<Lib.T.Font | null>('FONT')

    if (!storedFont || storedFont === SETTINGS.defaultFont) {
      return
    }

    changeFont(storedFont)
  }

  useEffect(onMount, [])

  return {
    font,
    setFont: changeFont,
    fonts: Lib.CO.FONTS,
  }
}
