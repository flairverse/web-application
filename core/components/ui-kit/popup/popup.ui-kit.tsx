import { FC } from 'react'
import * as Lib from './lib'

export const Popup: FC<Lib.T.PopupProps> = ({ onClose, visible, closable = true, children, header, ...rest }) => {
  return (
    <>
      <Lib.S.PopupBackdrop className={`${visible}`} onClick={() => closable && onClose()} />

      <Lib.S.PopupContainer {...rest} className={`${visible} ${rest.className}`}>
        {header && <div className="header">{header}</div>}

        <div className="body">{children}</div>
      </Lib.S.PopupContainer>
    </>
  )
}
