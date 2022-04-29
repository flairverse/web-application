import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const GuidesFAQ: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>GuidesFAQ</h1>
}

GuidesFAQ.layout = MainWrapper

export default GuidesFAQ
