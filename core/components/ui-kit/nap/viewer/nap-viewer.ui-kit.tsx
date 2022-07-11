import { mockedNaps } from 'mock/nap'
import { FC } from 'react'
import * as Lib from './lib'

export const NapViewer: FC = () => {
  const { close, modalProps, viewerVisibility, backward, forward, index } = Lib.H.useNapViewer()

  return (
    <Lib.S.NapViewerContainer {...modalProps} visible={viewerVisibility}>
      <div>
        {index !== 9 && <Lib.C.NavigateButton role="forward" onClick={forward} />}

        {Array.from(Array(10)).map((_, i) => (
          <Lib.C.NapGroup naps={mockedNaps} active={index === i} beforeActive={index === i + 1} afterActive={index === i - 1} />
        ))}

        {index !== 0 && <Lib.C.NavigateButton role="backward" onClick={backward} />}
      </div>
    </Lib.S.NapViewerContainer>
  )
}
