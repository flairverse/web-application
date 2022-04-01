import { useEffect } from 'react'
import * as Lib from '.'

export const useAcceleratorsProvider = () => {
  /**
   *
   *
   * reserves forward slash accelerator for focusing on navbar search box
   */
  const listenToNavbarSearchBox = (input: Lib.T.Input) => {
    if (!input) {
      return
    }

    input.focus()
  }

  /**
   *
   *
   * switch the pressed key and execute the associated listener
   */
  const checkThePressedKey = (code: string, foundedElements: Lib.T.FoundedElements) => {
    const { navbarSearchBox } = foundedElements

    switch (code) {
      case 'Slash': {
        return listenToNavbarSearchBox(navbarSearchBox)
      }
    }
  }

  /**
   *
   *
   * dispatch key up event listener to the browser if the process is on windows
   *
   * foundedElements object:
   * it's been decided to find all elements we need to subscribe accelerators when the app is mounted
   * it helps to do not query the document every time a key pressed
   */
  const onMount = () => {
    if (typeof window === 'undefined') {
      return
    }

    const foundedElements: Lib.T.FoundedElements = {
      navbarSearchBox: <Lib.T.Input>document.querySelector('.navbarSearchBox > input'),
    }

    addEventListener('keyup', ({ code }) => checkThePressedKey(code, foundedElements))
  }

  useEffect(onMount, [])
}
