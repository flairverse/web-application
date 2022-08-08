import { componentNapCreatorAtomFamilies } from '@/store'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForPostInserter = ({ boardRef, storeKeys }: Lib.T.ToolsForInserters) => {
  const activeItemID = useRecoilValue(componentNapCreatorAtomFamilies.activeItemID(storeKeys.activeItemID))
  const activeOption = useRecoilValue(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
    storeKeys,
  })

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: BiPalette,
      type: 'post-effect',
      title: 'Style',
      disabled: activeOption !== 'post' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'post-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'post' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'post-effect': {
        changeEffect('POST', 'article')
        break
      }

      case 'post-rotation': {
        changeRotation()
        break
      }
    }
  }

  return {
    get: {
      tools,
    },
    on: {
      toolClick,
    },
  }
}
