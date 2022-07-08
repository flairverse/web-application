import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as Lib from '..'

export const useToolsForMentionInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const setPickUp = useSetRecoilState(pageCreateNapAtoms.mentionPickUp)
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({ boardRef })
  const Inserter = Lib.H.useInserters({ boardRef })
  const insert = new Inserter()

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    { Icon: IoAddCircleOutline, type: 'add-mention', title: 'Add new', disabled: !insert.canInsert('mention', false) },
    {
      Icon: BiPalette,
      type: 'mention-effect',
      title: 'Style',
      disabled: activeOption !== 'mention' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'mention-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'mention' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
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
