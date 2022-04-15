import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const PostReview: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>PostReview</h1>
}

PostReview.layout = MainWrapper

export default PostReview
