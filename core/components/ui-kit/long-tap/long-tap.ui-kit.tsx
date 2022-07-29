import { Popover } from 'antd'
import { FC, useRef } from 'react'
import * as Lib from './lib'

export const LongTap: FC<Lib.T.LongTapProps> = ({ children, timeout, callback, popup, ...rest }) => {
  const popupRef = useRef<HTMLSpanElement>(null)
  const { handleMouseDown, handleMouseUp } = Lib.H.useLongTap({
    timeout,
    callback,
    popup,
    popupRef,
  })

  return (
    <Lib.S.LongTapContainer
      {...rest}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      tabIndex={1}
    >
      {children}

      {popup && (
        <Popover placement="top" {...popup} trigger="click">
          <span className="longTapPopup" ref={popupRef} />
        </Popover>
      )}
    </Lib.S.LongTapContainer>
  )
}
