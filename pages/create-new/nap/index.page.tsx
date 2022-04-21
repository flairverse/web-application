import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { useState } from 'react'
import * as Lib from './lib'

const CreateNewNap: MainPage = () => {
  const { on } = Lib.H.useCreateNewNapPage()

  return (
    <Lib.S.CreateNewNapContainer>
      <Lib.C.Toolbox active={true} />

      <div className={`board`}>
        <div className="initialContent">
          <Lib.C.GuidLines />

          <Lib.C.Items onOptionsClick={on.optionsClick} />
        </div>
      </div>
    </Lib.S.CreateNewNapContainer>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
