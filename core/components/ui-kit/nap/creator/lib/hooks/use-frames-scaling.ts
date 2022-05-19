import { useWindowSize } from '@/hooks/use-window-size'
import { RefObject } from 'react'
import * as Lib from '..'

export const useFramesScaling = (boardRef: RefObject<HTMLDivElement | null>) => {
  useWindowSize(() => {
    Lib.HE.getAllFrames(boardRef, frame => Lib.HE.changeFrameScale(boardRef, frame))
  }, [])
}
