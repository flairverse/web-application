import { PropsWithChildren } from 'react'
import * as Lib from './lib'

export function Menu<Keys = Lib.T.ItemKey, ClickReturn = void>({ children, items, ...rest }: PropsWithChildren<Lib.T.MenuProps<Keys, ClickReturn>>): JSX.Element {
  return (
    <>
      {children}

      <Lib.S.MenuShadow />

      <Lib.S.MenuContainer {...rest}>
        {items.map(({ icon, title, key, onClick }, index) => (
          <div key={index} onClick={() => onClick && onClick(key)}>
            {icon && <span className="icon">{icon}</span>}

            <span className="title">{title}</span>
          </div>
        ))}
      </Lib.S.MenuContainer>
    </>
  )
}
