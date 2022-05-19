import { FC, useRef } from 'react'
import * as Lib from './lib'

export const NapCreator: FC = () => {
  const mainBoardRef = useRef<HTMLDivElement>(null)
  const mainBoardParentRef = useRef<HTMLDivElement>(null)
  const { on } = Lib.H.useNapCreator(mainBoardRef)

  return (
    <>
      <Lib.C.PostsPickUp boardRef={mainBoardRef} />

      <Lib.C.MentionPickUp boardRef={mainBoardRef} />

      <Lib.S.NapCreatorContainer>
        <Lib.C.Toolbox active={true} boardRef={mainBoardRef} />

        <div className="board" ref={mainBoardParentRef}>
          <div className="initialContent">
            <Lib.C.GuidLines />
            <Lib.C.Items onOptionsClick={on.optionsClick} boardRef={mainBoardRef} />
          </div>

          <Lib.S.MainBoard id="mainBoard" ref={mainBoardRef} />
        </div>
      </Lib.S.NapCreatorContainer>
    </>
  )
}
