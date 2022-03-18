import * as Lib from './lib'
import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Homepage: MainPage = () => {
  return (
    <Lib.S.Container>
      <Lib.C.Topics />
    </Lib.S.Container>
  )
}

Homepage.layout = MainWrapper

export default Homepage
