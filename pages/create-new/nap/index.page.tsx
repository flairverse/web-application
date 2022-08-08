import { MainWrapper } from '@/components/layouts/main-wrapper'
import { NapCreator } from '@/components/ui-kit/nap'
import { useNapCreatorsStoreKeys } from '@/hooks/use-nap-creatore-store-keys'
import type { MainPage } from '@/types/next-page.type'

const CreateNewNap: MainPage = () => {
  const { inCreateNapPageAnGlobalViewer } = useNapCreatorsStoreKeys()

  return (
    <>
      <NapCreator storeKeys={inCreateNapPageAnGlobalViewer} />
    </>
  )
}

CreateNewNap.layout = MainWrapper

export default CreateNewNap
