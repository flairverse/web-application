import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import * as Lib from './lib'

const Profile: MainPage = () => {
  const {} = Lib.H.useProfilePage()

  return <h1 style={{ color: 'white', fontWeight: 900 }}>Profile</h1>
}

Profile.layout = MainWrapper

export default Profile
