import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const CreateNewPost: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>CreateNewPost</h1>
}

CreateNewPost.layout = MainWrapper

export default CreateNewPost
