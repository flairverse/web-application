import * as Lib from '..'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { MdOutlineStyle } from 'react-icons/md'
import { IoAddCircleOutline } from 'react-icons/io5'

export const useToolsForPostInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const activeOption = useRecoilValue(createNapAtoms.activeOption)
  const activeItemID = useRecoilValue(createNapAtoms.activeItemID)
  const setPickUp = useSetRecoilState(createNapAtoms.postsPickUp)
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-post', title: 'Add new', disabled: false },
    { Icon: MdOutlineStyle, type: 'post-effect', title: 'Style', disabled: activeOption !== 'post' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'post-rotation', title: 'Rotate', disabled: activeOption !== 'post' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.PostTools) => {
    switch (type) {
      case 'add-post': {
        setPickUp(true)
        break
      }

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
