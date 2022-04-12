import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const ExplorePosts: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>ExplorePosts</h1>
}

ExplorePosts.layout = MainWrapper

export default ExplorePosts
