import { FC } from 'react'
import * as Lib from '.'
import { HiMenuAlt2 } from 'react-icons/hi'

export const Toolbox: FC = () => {
  return (
    <Lib.S.ToolboxContainer>
      <span className="menuButton">
        <HiMenuAlt2 color="var(--layer-2-text-3)" size={20} />
      </span>

      <p className="guide">Select an item to see it's options</p>
    </Lib.S.ToolboxContainer>
  )
}

export const Items: FC<Lib.T.ItemsProps> = ({ items }) => {
  return (
    <Lib.S.ItemsContainer>
      <ul>
        {items.map(({ active, icon, title }, index) => (
          <li key={index} className={`${active}`}>
            <span>{icon}</span>

            <p>{title}</p>
          </li>
        ))}
      </ul>
    </Lib.S.ItemsContainer>
  )
}
