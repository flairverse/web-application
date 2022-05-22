import * as Lib from '..'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { MdOutlineStyle } from 'react-icons/md'
import { IoAddCircleOutline } from 'react-icons/io5'

export const useToolsForMentionInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const activeOption = useRecoilValue(createNapAtoms.activeOption)
  const activeItemID = useRecoilValue(createNapAtoms.activeItemID)
  const setPickUp = useSetRecoilState(createNapAtoms.mentionPickUp)
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-mention', title: 'Add new', disabled: false },
    { Icon: MdOutlineStyle, type: 'mention-effect', title: 'Style', disabled: activeOption !== 'mention' || activeItemID === null },
    { Icon: AiOutlineRotateRight, type: 'mention-rotation', title: 'Rotate', disabled: activeOption !== 'mention' || activeItemID === null },
  ]

  const toolClick = (type: Lib.T.MentionTools) => {
    switch (type) {
      case 'add-mention': {
        setPickUp(true)
        break
      }

      case 'mention-effect': {
        changeEffect('MENTION', '.mention')
        break
      }

      case 'mention-rotation': {
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
