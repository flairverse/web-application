import { useEffect, useRef, useState } from 'react'
import * as Lib from '.'

export const useSlideUpAndDown = ({ visible }: Pick<Lib.T.SlideUpAndDownProps, 'visible'>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<undefined | string>(undefined)

  /**
   *
   *
   *
   * checks container and if was present, calls the callback function
   * @param callback the stuff you wanna call when `containerRef.current` was present
   */
  const checkContainerAndDo = (callback: (container: HTMLDivElement) => void) => {
    const { current: container } = containerRef
    if (!container) {
      return
    }
    callback(container)
  }

  /**
   *
   *
   *
   * finds container, gets its computed height, stores the height to the store
   */
  const getContainerHeight = () => {
    if (!height) {
      checkContainerAndDo(container => {
        setHeight(window.getComputedStyle(container).height)
      })
    }
  }

  /**
   *
   *
   *
   * runs when component mounts and stores the container height and
   *    hides the container if `true` value passed for the `defaultVisible`
   */
  useEffect(() => {
    getContainerHeight()

    if (!visible) {
      setTimeout(() => {
        checkContainerAndDo(container => {
          container.style.height = '0px'
        })
      }, 0)
    }
  }, [])

  /**
   *
   *
   *
   * runs each time the `visible` changes and
   *    toggles the container height
   */
  useEffect(() => {
    checkContainerAndDo(container => {
      getContainerHeight()

      if (!height) {
        return
      }

      if (visible) {
        container.style.height = height
      } else {
        container.style.height = '0px'
      }
    })
  }, [visible])

  return containerRef
}
