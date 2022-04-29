import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'

const Reactions: MainPage = () => {
  return <h1 style={{ color: 'white', fontWeight: 900 }}>Reactions</h1>
}

Reactions.layout = MainWrapper

export default Reactions
