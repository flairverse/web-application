import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { createNapAtoms } from '@/store/atoms'
import * as Lib from '.'

export const useAcceleratorsProvider = () => {
  const setPostsPickUpInCreateNapPage = useSetRecoilState(createNapAtoms.postsPickUp)
  const setMentionPickUpInCreateNapPage = useSetRecoilState(createNapAtoms.mentionPickUp)
  const setActiveOptionInCreateNapPage = useSetRecoilState(createNapAtoms.activeOption)

  /**
   *
   *
   * reserves forward slash accelerator for focusing on navbar search box
   */
  const focusNavbarSearchBox = (input: Lib.T.Input) => {
    if (!input) {
      return
    }

    input.focus()
  }

  /**
   *
   *
   * blur any focused element by pressing the escape key
   */
  const blurTheFocusedElement = () => {
    /**
     * "activeElement" is not always a Div element,
     * but i cased "HTMLDivElement" to the "activeElement" because
     * by default it was "Element" and ".blur()" method does not exist on type "Element",
     * but we know that whatever "activeElement" is, the ".blur()" method will be exist on that.
     * For preventing common errors, i used "?" before ".blur()"
     */
    const activeElement = <HTMLDivElement>document.activeElement

    if (activeElement) {
      activeElement?.blur()
    }
  }

  /**
   *
   *
   * closes all opened pickups components
   */
  const closeOpenedPickUps = () => {
    setPostsPickUpInCreateNapPage(false)
    setMentionPickUpInCreateNapPage(false)
  }

  /**
   *
   *
   * Things that can not be placed in a specific category,
   *    but need to be run when the Escape button is pressed.
   */
  const doCustomEventsOnEscape = () => {
    setActiveOptionInCreateNapPage('none')
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
        focusNavbarSearchBox(navbarSearchBox)
        break
      }

      case 'Escape': {
        blurTheFocusedElement()
        closeOpenedPickUps()
        doCustomEventsOnEscape()
        break
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

    addEventListener('keydown', ({ code }) => checkThePressedKey(code, foundedElements))
  }

  useEffect(onMount, [])
}
