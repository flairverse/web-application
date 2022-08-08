import { componentNapViewerAtomFamilies } from '@/store'
import { mockedNaps } from 'mock/nap'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import * as Lib from './lib'

const napsLength = 10

export const NapViewer: FC<Lib.T.NapViewerProps> = ({ storeKeys, creatorStoreKeys }) => {
  const groupIndex = useRecoilValue(componentNapViewerAtomFamilies.napGroupIndex(storeKeys.napGroupIndex))
  const { close, viewerVisibility, backward, forward } = Lib.H.useNapViewer({ storeKeys })
  return (
    <>
      <Lib.S.NapViewerContainer
        title={null}
        footer={null}
        width="100%"
        visible={viewerVisibility}
        onCancel={close}
        maskStyle={{ background: 'rgba(0, 0, 0, 0.9)' }}
      >
        <div>
          <Lib.C.NavigateButton role="forward" onClick={forward} enabled={groupIndex !== napsLength - 1} />

          <div>
            {Array.from(Array(napsLength)).map((_, i) => (
              <Lib.C.NapGroup
                key={i}
                naps={mockedNaps}
                active={groupIndex === i}
                beforeActive={groupIndex === i + 1}
                afterActive={groupIndex === i - 1}
                onAchieveEnd={forward}
                onAchieveStart={backward}
                onAchieveAll={close}
                close={close}
                creatorStoreKeys={creatorStoreKeys}
                storeKeys={{
                  ...storeKeys,
                  napIndex: storeKeys.napIndex + i,
                }}
              />
            ))}
          </div>

          <Lib.C.NavigateButton role="backward" onClick={backward} enabled={groupIndex !== 0} />
        </div>
      </Lib.S.NapViewerContainer>

      <Lib.C.AnswerQuestionModal storeKeys={storeKeys} />
    </>
  )
}
