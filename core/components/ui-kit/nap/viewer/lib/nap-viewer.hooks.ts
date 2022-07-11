import { useClassNames } from '@/hooks/use-class-names'
import { componentNapViewerAtoms } from '@/store'
import { ModalProps } from 'antd'
import { useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as Lib from '.'

export const useNapViewer = () => {
  const [viewerVisibility, setViewer] = useRecoilState(componentNapViewerAtoms.napViewerVisibility)
  const [index, setIndex] = useState(0)

  const close = () => {
    setViewer(false)
  }

  const modalProps = useMemo<ModalProps>(
    () => ({
      destroyOnClose: false,
      title: null,
      footer: null,
      closable: false,
      width: '100%',
      mask: false,
    }),
    [],
  )

  const forward = () => {
    setIndex(currentVal => (currentVal + 1 < 10 ? currentVal + 1 : currentVal))
  }

  const backward = () => {
    setIndex(currentVal => (currentVal - 1 >= 0 ? currentVal - 1 : currentVal))
  }

  return {
    close,
    viewerVisibility,
    modalProps,
    forward,
    backward,
    index,
  }
}

export const useNapGroup = ({ active, afterActive, beforeActive, naps }: Lib.T.NapGroupProps) => {
  const { createClass } = useClassNames()

  const classNames = createClass('', { active, afterActive, beforeActive })

  return { classNames }
}
