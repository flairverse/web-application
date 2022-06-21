import { FC } from 'react'
import * as Lib from './lib'

export const LongPress: FC<Lib.T.LongPressProps> = ({ children, timeout, callback, disabled, ...rest }) => {
  const { handleMouseDown, handleMouseUpOrLeave, handleClick, handleMouseUp } = Lib.H.useLongPress({
    timeout,
    callback,
    disabled,
  })
  return (
    <Lib.S.LongPressContainer
      {...rest}
      disabled={disabled}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUpOrLeave}
    >
      {children}
    </Lib.S.LongPressContainer>
  )
}
