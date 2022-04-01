import * as Lib from './lib'
import { useRecoilState } from 'recoil'
import { fontAtoms } from '@/store/atoms'
import { LocalStorage } from '@/helpers/localstorage.helper'
import { useEffect, useState } from 'react'
import { SETTINGS } from '@/constants/settings.constant'

export const useFont = () => {
  const [font, setFont] = useRecoilState(fontAtoms.fontState)

  const changeRoot = (property: Lib.T.FontWeightVariant, value: string) => {
    console.log(`--ff-${property}`, value)
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
