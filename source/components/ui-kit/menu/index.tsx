import { PropsWithChildren } from 'react'
import * as Lib from './lib'

export function Menu<Keys = Lib.T.ItemKey, ClickReturn = void>({ children, items, position, openMenuEffect, ...rest }: PropsWithChildren<Lib.T.MenuProps<Keys, ClickReturn>>): JSX.Element {
  return (
    <>
      <Lib.S.MenuButton>
        {children}

        <Lib.S.MenuShadow className="menuShadow" />

        <Lib.S.MenuContainer position={position} {...rest} className={`menuContainer ${rest.className}`} openMenuEffect={openMenuEffect}>
          {items.map(({ icon, title, key, onClick }, index) => (
            <li key={index} onClick={() => onClick && onClick(key)}>
              {icon && <span className="icon">{icon}</span>}

              <span className="title">{title}</span>
            </li>
          ))}
        </Lib.S.MenuContainer>
      </Lib.S.MenuButton>
    </>
  )
}
