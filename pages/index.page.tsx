import * as Lib from './lib'
import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { Sides } from '@/components/ui-kit/sides'
import { Tabs } from '@/components/ui-kit/tabs'

const Homepage: MainPage = () => {
  const { get } = Lib.H.useIndexPage()

  return (
    <Lib.S.Container>
      <Lib.C.Topics />

      <Sides left={<Lib.C.LeftAside />} right={<Lib.C.RightAside />}>
        <Lib.C.NapsList />

        <Tabs tabs={get.categories} onChange={console.log} className="categories" />
      </Sides>
    </Lib.S.Container>
  )
}

Homepage.layout = MainWrapper

export default Homepage
