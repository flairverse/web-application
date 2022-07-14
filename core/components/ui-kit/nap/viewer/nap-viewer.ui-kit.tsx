import { mockedNaps } from 'mock/nap'
import { FC } from 'react'
import * as Lib from './lib'

const napsLength = 10

export const NapViewer: FC = () => {
  const { close, viewerVisibility, backward, forward, index } = Lib.H.useNapViewer()

  return (
    <Lib.S.NapViewerContainer
      title={null}
      footer={null}
      width="100%"
      visible={viewerVisibility}
      onCancel={close}
      closable={false}
      maskStyle={{ background: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div>
        <Lib.C.NavigateButton role="forward" onClick={forward} enabled={index !== napsLength - 1} />

        <div>
          {Array.from(Array(napsLength)).map((_, i) => (
            <Lib.C.NapGroup naps={mockedNaps} active={index === i} beforeActive={index === i + 1} afterActive={index === i - 1} />
          ))}
        </div>

        <Lib.C.NavigateButton role="backward" onClick={backward} enabled={index !== 0} />
      </div>
    </Lib.S.NapViewerContainer>
  )
}
