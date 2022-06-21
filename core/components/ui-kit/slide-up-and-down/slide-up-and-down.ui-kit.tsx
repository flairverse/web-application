import { FC } from 'react'
import * as Lib from './lib'

export const SlideUpAndDown: FC<Lib.T.SlideUpAndDownProps> = ({ children, visible, ...rest }) => {
  const containerRef = Lib.H.useSlideUpAndDown({ visible })

  return (
    <Lib.S.SlideUpAndDownContainer ref={containerRef} {...rest}>
      {children}
    </Lib.S.SlideUpAndDownContainer>
  )
}
