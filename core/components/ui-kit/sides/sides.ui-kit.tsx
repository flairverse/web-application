import { FC } from 'react'
import StickyBox from 'react-sticky-box'
import * as Lib from './lib'

export const Sides: FC<Lib.T.SidesProps> = ({ children, left, right, offset, sizes, ...rest }) => {
  return (
    <Lib.S.Container sizes={sizes} left={left} right={right} {...rest}>
      {right && (
        <StickyBox offsetTop={offset?.top ?? 60} offsetBottom={offset?.bottom ?? 0}>
          <aside className="aside right">{right}</aside>
        </StickyBox>
      )}

      <div className="main">{children}</div>

      {left && (
        <StickyBox offsetTop={offset?.top ?? 60} offsetBottom={offset?.bottom ?? 0}>
          <aside className="aside left">{left}</aside>
        </StickyBox>
      )}
    </Lib.S.Container>
  )
}
