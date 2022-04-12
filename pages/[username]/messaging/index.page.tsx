import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Messaging: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Messaging</h1>
}

Messaging.layout = MainWrapper

export default Messaging
