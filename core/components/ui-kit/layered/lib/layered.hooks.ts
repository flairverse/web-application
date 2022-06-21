import { componentLayeredAtoms } from '@/store/atomFamilies'
import { useRecoilState } from 'recoil'
import * as Lib from '.'

export const useLayer = ({ storeKeys }: Lib.T.UseLayerArgs) => {
  const [activeLayer, setActiveLayer] = useRecoilState(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))

  const closeLayer = () => setActiveLayer(null)

  return { activeLayer, closeLayer }
}
