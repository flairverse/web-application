import { MainWrapper } from '@/components/layouts/main-wrapper'
import type { MainPage } from '@/types/next-page.type'
import { NapCreator } from '@/components/ui-kit/nap'

const CreateNewNap: MainPage = () => {
  return (
    <>
      <NapCreator />
    </>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
