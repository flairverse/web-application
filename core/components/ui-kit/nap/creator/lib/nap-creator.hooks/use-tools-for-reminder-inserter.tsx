import { pageCreateNapAtoms } from '@/store/atoms'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForReminderInserter = ({ boardRef }: Lib.T.ToolsForInserters) => {
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
  })
  const activeItemID = useRecoilValue(pageCreateNapAtoms.activeItemID)
  const activeOption = useRecoilValue(pageCreateNapAtoms.activeOption)

  const tools: Pick<Lib.T.ToolProps, 'Icon' | 'type' | 'title' | 'disabled'>[] = [
    {
      Icon: BiPalette,
      type: 'reminder-effect',
      title: 'Effect',
      disabled: activeOption !== 'reminder' || activeItemID === null,
    },
    {
      Icon: AiOutlineRotateRight,
      type: 'reminder-rotation',
      title: 'Rotate',
      disabled: activeOption !== 'reminder' || activeItemID === null,
    },
  ]

  const toolClick = (type: Lib.T.Tool) => {
    switch (type) {
      case 'reminder-effect': {
        changeEffect('REMINDER', '.reminder', false)
        break
      }

      case 'reminder-rotation': {
        changeRotation(false)
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
