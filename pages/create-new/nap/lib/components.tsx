import { FC } from 'react'
import * as Lib from '.'
import { HiChevronLeft } from 'react-icons/hi'
import { createNapAtoms } from '@/store/atoms'
import { useRecoilValue } from 'recoil'
import { FaPause, FaShare, FaEllipsisH } from 'react-icons/fa'

export const Toolbox: FC<Lib.T.ToolboxProps> = ({ active }) => {
  return (
    <Lib.S.ToolboxContainer active={active}>
      {/* <span className="menuButton">
        <HiChevronLeft color="var(--layer-2-text-3)" size={20} />
      </span> */}
    </Lib.S.ToolboxContainer>
  )
}

export const Items: FC<Lib.T.ItemsProps> = ({ onOptionsClick }) => {
  const showMoreOptions = useRecoilValue(createNapAtoms.showMoreOptions)
  const activeOption = useRecoilValue(createNapAtoms.activeOption)
  const { get } = Lib.H.useItems()

  return (
    <>
      <Lib.S.ItemsShadowing active={showMoreOptions} />

      <Lib.S.ItemsContainer className={`${!showMoreOptions && 'showLess'}`}>
        <ul>
          {get.items.map(({ icon, title, key }, index) => (
            <li key={index} title={showMoreOptions || activeOption === key ? undefined : title} className={`${activeOption === key ? 'active' : ''}`} onClick={() => onOptionsClick(key)}>
              <span>{icon}</span>

              <p>{title}</p>
            </li>
          ))}
        </ul>
      </Lib.S.ItemsContainer>
    </>
  )
}

export const GuidLines: FC = () => {
  return (
    <Lib.S.GuidLines>
      <div className="left">
        <div className="top">
          <span className="profile" />

          <div className="name">
            <span className="username" />
            <span className="job" />
          </div>

          <div className="gap" />

          <span className="action">
            <FaShare size={20} />
          </span>

          <span className="action">
            <FaPause size={20} />
          </span>

          <span className="action">
            <FaEllipsisH size={20} />
          </span>
        </div>

        <div className="gap" />

        <div className="bottom">
          <span className="input">Reply to this nap...</span>
        </div>
      </div>

      <div className="right">
        <span className="timer" />
      </div>
    </Lib.S.GuidLines>
  )
}
