import { Link } from 'next-i18next.config'
import { FC, PropsWithChildren } from 'react'
import * as Lib from './lib'

export function Menu<Keys = Lib.T.ItemKey, ClickReturn = void>({
  children,
  items,
  position,
  openMenuEffect,
  minWidth,
  compact,
  ...rest
}: PropsWithChildren<Lib.T.MenuProps<Keys, ClickReturn>>): JSX.Element {
  return (
    <>
      <Lib.S.MenuButton>
        {children}

        <Lib.S.MenuShadow className="menuShadow" />

        <Lib.S.MenuContainer position={position} compact={compact} minWidth={minWidth} {...rest} className={`menuContainer ${rest.className}`} openMenuEffect={openMenuEffect}>
          {items.map(({ icon, title, key, onClick, href, breaker }, index) => (
            <li key={index}>
              {breaker && <div className="breaker" />}

              {!breaker && (
                <>
                  {href ? (
                    <Link href={href}>
                      <a>
                        <Lib.C.ItemContent title={title} icon={icon} breaker={breaker} />
                      </a>
                    </Link>
                  ) : (
                    <span onClick={() => onClick && onClick(key)}>
                      <Lib.C.ItemContent title={title} icon={icon} breaker={breaker} />
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </Lib.S.MenuContainer>
      </Lib.S.MenuButton>
    </>
  )
}
