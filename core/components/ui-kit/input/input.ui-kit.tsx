import { Input as AntInput } from 'antd'
import { FC } from 'react'
import * as Lib from './lib'

export const Input: FC<Lib.T.InputProps> = ({ error, ...rest }) => {
  return (
    <Lib.S.InputContainer>
      <AntInput {...rest} status={error ? 'error' : undefined} />
      {error && <span>{error}</span>}
    </Lib.S.InputContainer>
  )
}
