import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { useClassNames } from '@/hooks/use-class-names'
import { componentNapViewerAtomFamilies, componentNapViewerAtoms } from '@/store'
import { useEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Lib from '.'

const napsLength = 10

/**
 *
 *
 *
 *
 * functionalities for the NapViewer component
 */
export const useNapViewer = () => {
  const [viewerVisibility, setViewer] = useRecoilState(componentNapViewerAtoms.napViewerVisibility)
  const setNapGroupIndex = useSetRecoilState(componentNapViewerAtoms.napGroupIndex)
  const close = () => setViewer(false)
  const forward = () => setNapGroupIndex(currentVal => (currentVal + 1 < napsLength ? currentVal + 1 : currentVal))
  const backward = () => setNapGroupIndex(currentVal => (currentVal - 1 >= 0 ? currentVal - 1 : currentVal))

  return { close, viewerVisibility, forward, backward }
}

/**
 *
 *
 *
 *
 * functionalities for the NapGroup component
 */
export const useNapGroup = ({ active, afterActive, beforeActive, naps, storeKeys, onAchieveEnd, onAchieveStart }: Lib.T.NapGroupProps) => {
  const { createClass } = useClassNames()
  const classNames = createClass('', { active, afterActive, beforeActive })
  const [napIndex, setNapIndex] = useRecoilState(componentNapViewerAtomFamilies.napIndex(storeKeys.napIndex))

  const forward = () => {
    if (napIndex + 1 < naps.length) {
      setNapIndex(napIndex + 1)
    } else {
      onAchieveEnd()
    }
  }

  const backward = () => {
    if (napIndex - 1 >= 0) {
      setNapIndex(napIndex - 1)
    } else {
      onAchieveStart()
    }
  }

  return { classNames, forward, backward, napIndex }
}

/**
 *
 *
 *
 *
 * functionalities for the NavigationButton component
 */
export const useNavigateButton = ({ enabled, role }: Pick<Lib.T.NavigateButtonProps, 'enabled' | 'role'>) => {
  const { createClass } = useClassNames()
  const classNames = createClass(role, { enabled })

  return { classNames }
}

/**
 *
 *
 *
 *
 * functionalities for the CompiledDownNap component
 */
export const useCompiledDownNap = (nap: Lib.T.UseCompiledDownNapProps) => {
  const { containerRef } = nap
  const fakeBoardRef = useRef<HTMLDivElement>(null)
  const { compileDown } = NapCreatorUIKitLib.H.useBoardCompileDown(fakeBoardRef)

  const compileDownOptions: NapCreatorUIKitLib.T.CompileDownOptions = {
    readonly: true,
    scale: nap.boardScale,
  }

  const compileDownOnMount = () => {
    const { current: container } = containerRef
    if (!container) {
      return
    }

    const elements: HTMLElement[] = []

    for (const text of nap.text) {
      elements.push(compileDown(text, compileDownOptions))
    }

    for (const post of nap.post) {
      elements.push(compileDown(post, compileDownOptions))
    }

    for (const mention of nap.mention) {
      elements.push(compileDown(mention, compileDownOptions))
    }

    for (const question of nap.question) {
      elements.push(compileDown(question, compileDownOptions))
    }

    for (const quiz of nap.quiz) {
      elements.push(compileDown(quiz, compileDownOptions))
    }

    for (const reminder of nap.reminder) {
      elements.push(compileDown(reminder, compileDownOptions))
    }

    for (const gif of nap.gif) {
      elements.push(compileDown(gif, compileDownOptions))
    }

    for (const image of nap.image) {
      elements.push(compileDown(image, compileDownOptions))
    }

    for (const link of nap.link) {
      elements.push(compileDown(link, compileDownOptions))
    }

    // setElements(elements)
    for (const element of elements) {
      container.appendChild(element)
    }
  }

  useEffect(compileDownOnMount, [])
}
