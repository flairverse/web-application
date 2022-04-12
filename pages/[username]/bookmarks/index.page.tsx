import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Bookmarks: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Bookmarks</h1>
}

Bookmarks.layout = MainWrapper

export default Bookmarks
