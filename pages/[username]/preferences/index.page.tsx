import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Preferences: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Preferences</h1>
}

Preferences.layout = MainWrapper

export default Preferences
