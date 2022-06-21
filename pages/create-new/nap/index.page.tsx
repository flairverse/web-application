import { MainWrapper } from '@/components/layouts/main-wrapper'
import { NapCreator } from '@/components/ui-kit/nap'
import type { MainPage } from '@/types/next-page.type'

const CreateNewNap: MainPage = () => {
  return (
    <>
      <NapCreator />
    </>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
