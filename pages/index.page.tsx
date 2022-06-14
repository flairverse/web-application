import { MainWrapper } from '@/components/layouts/main-wrapper'
import { Sides } from '@/components/ui-kit/sides'
import { Tabs } from '@/components/ui-kit/tabs'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import type { MainPage } from '@/types/next-page.type'
import * as Lib from './lib'

const Homepage: MainPage = () => {
  const { get } = Lib.H.useIndexPage()
  const [isGreaterThan768] = useBreakpoint(768, true)

  return (
    <Lib.S.Container>
      <Lib.C.Topics className="top" />

      <Sides
        left={isGreaterThan768 ? <Lib.C.LeftAside /> : null}
        right={isGreaterThan768 ? <Lib.C.RightAside /> : null}
      >
        <Lib.S.NapListAndTopics>
          <Lib.C.Topics className="bottom" />
          <Lib.C.NapsList />
        </Lib.S.NapListAndTopics>

        <Tabs tabs={get.categories} onChange={console.log} className="categories" />

        <Lib.C.LoadMore />
      </Sides>
    </Lib.S.Container>
  )
}

Homepage.layout = MainWrapper

export default Homepage
