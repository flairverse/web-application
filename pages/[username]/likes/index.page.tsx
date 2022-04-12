import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Likes: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Likes</h1>
}

Likes.layout = MainWrapper

export default Likes
