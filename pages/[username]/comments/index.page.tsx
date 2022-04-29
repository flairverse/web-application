import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Comments: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Comments</h1>
}

Comments.layout = MainWrapper

export default Comments
