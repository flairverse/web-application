import { componentNapCreatorAtomFamilies } from '@/store'
import { AiOutlineRotateRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import * as Lib from '..'

export const useToolsForReminderInserter = ({ boardRef, storeKeys }: Lib.T.ToolsForInserters) => {
  const { changeRotation, changeEffect } = Lib.H.useToolsForAllInserters({
    boardRef,
    storeKeys,
  })
  const activeItemID = useRecoilValue(componentNapCreatorAtomFamilies.activeItemID(storeKeys.activeItemID))
  const activeOption = useRecoilValue(componentNapCreatorAtomFamilies.activeOption(storeKeys.activeOption))

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
