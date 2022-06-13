import { useRecoilState } from 'recoil'
import * as Lib from '.'
import { componentLayeredAtoms } from '@/store/atomFamilies'

export const useLayer = ({ storeKeys }: Lib.T.UseLayerArgs) => {
  const [activeLayer, setActiveLayer] = useRecoilState(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))

  const closeLayer = () => setActiveLayer(null)

  return { activeLayer, closeLayer }
}
