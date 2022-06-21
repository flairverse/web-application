import { FC } from 'react'
import * as Lib from '.'

export const ItemContent: FC<Pick<Lib.T.MenuItem, 'icon' | 'title' | 'breaker'>> = ({ icon, title, breaker }) => {
  return (
    <>
      {!breaker && (
        <>
          {icon && <span className="icon">{icon}</span>}

          <span className="title">{title}</span>
        </>
      )}
    </>
  )
}
