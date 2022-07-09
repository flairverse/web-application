import { NapBoardModel } from '@/models/nap.model'
import * as Lib from '..'

export const useToolBoxNextBtn = ({ boardRef }: Pick<Lib.T.ToolBoxNextBtnProps, 'boardRef'>) => {
  const { compileAndValidateAll } = Lib.H.useBoardCompileUp(boardRef)

  const finalizeBoard = () => {
    const elements = compileAndValidateAll()
    const { height, width } = Lib.HE.getBoardSize(boardRef)

    const boardElements: NapBoardModel = {
      boardSize: { width, height },
      boardScale: Lib.HE.calculateFrameScale(boardRef) || 1,
      gif: [],
      image: [],
      link: [],
      mention: [],
      post: [],
      question: [],
      quiz: [],
      reminder: [],
      text: [],
    }

    for (const element of elements) {
      const elementType = <Lib.T.ElementalOptions>element.type
      boardElements[elementType].push(<never>element)
    }

    console.log(boardElements)
  }

  return { finalizeBoard }
}
