import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { useState } from 'react'
import * as Lib from './lib'

const CreateNewNap: MainPage = () => {
  return (
    <Lib.S.CreateNewNapContainer>
      <div className={`board`} />
    </Lib.S.CreateNewNapContainer>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
