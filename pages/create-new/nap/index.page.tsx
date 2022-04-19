import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { useState } from 'react'
import * as Lib from './lib'

const CreateNewNap: MainPage = () => {
  const { get } = Lib.H.useCreateNewNapPage()

  return (
    <Lib.S.CreateNewNapContainer>
      <Lib.C.Toolbox />

      <div className="boardContainer">
        <div className={`board`} />

        <Lib.C.Items items={get.items} />
      </div>
    </Lib.S.CreateNewNapContainer>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
