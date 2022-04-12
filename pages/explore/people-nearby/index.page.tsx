import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const ExploreNearByPeople: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>ExploreNearByPeople</h1>
}

ExploreNearByPeople.layout = MainWrapper

export default ExploreNearByPeople
