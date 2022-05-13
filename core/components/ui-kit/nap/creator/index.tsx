import { createNapAtoms } from '@/store/atoms'
import { FC, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as Lib from './lib'

export const NapCreator: FC = () => {
  const { on } = Lib.H.useNapCreator()
  const mainBoardRef = useRef<HTMLDivElement>(null)
  const [pickUp, setPickUp] = useRecoilState(createNapAtoms.postsPickUp)

  return (
    <Lib.S.NapCreatorContainer>
      <Lib.C.Toolbox active={true} boardRef={mainBoardRef} />
      <button onClick={() => setPickUp(true)}>pick</button>

      <div className="board">
        <div className="initialContent">
          <Lib.C.GuidLines />

          <Lib.C.Popups />

          <Lib.C.Items onOptionsClick={on.optionsClick} boardRef={mainBoardRef} />
        </div>

        <Lib.S.MainBoard id="mainBoard" ref={mainBoardRef} />
      </div>
    </Lib.S.NapCreatorContainer>
  )
}
