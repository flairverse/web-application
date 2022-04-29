import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { useRef } from 'react'
import * as Lib from './lib'

const CreateNewNap: MainPage = () => {
  const { on } = Lib.H.useCreateNewNapPage()
  const mainBoardRef = useRef<HTMLDivElement>(null)

  return (
    <Lib.S.CreateNewNapContainer>
      <Lib.C.Toolbox active={true} />

      <div className={`board`}>
        <div className="initialContent">
          <Lib.C.GuidLines />
          <Lib.C.Items onOptionsClick={on.optionsClick} boardRef={mainBoardRef} />
        </div>

        <Lib.S.MainBoard id="mainBoard" ref={mainBoardRef} />
      </div>
    </Lib.S.CreateNewNapContainer>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
