import { componentLayeredAtoms } from '@/store/atomFamilies'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import * as Lib from './lib'

export const Layered: FC<Lib.T.LayeredProps> = ({ children, layers, storeKeys, withHeader = true, ...rest }) => {
  const activeLayer = useRecoilValue(componentLayeredAtoms.activeLayer(storeKeys.activeLayer))

  return (
    <Lib.S.LayeredContainer {...rest}>
      <Lib.C.Layer storeKeys={storeKeys} layers={layers} withHeader={withHeader} />
      <div className={`${activeLayer !== null} content`}>{children}</div>
    </Lib.S.LayeredContainer>
  )
}
