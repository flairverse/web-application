import { FC } from 'react'
import * as Lib from './lib'

export const BackDrop: FC<Lib.T.BackDropProps> = ({ visibility, ...rest }) => {
  return (
    <Lib.S.BackDropContainer
      {...rest}
      className={`${rest.className ? rest.className : ''} ${visibility}`}
    />
  )
}
