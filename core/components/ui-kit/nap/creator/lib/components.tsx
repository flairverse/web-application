import { FC } from 'react'
import * as Lib from '.'
import { HiChevronRight } from 'react-icons/hi'
import { createNapAtoms } from '@/store/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FaPause, FaShare, FaEllipsisH } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { Button, Select, Radio, Space } from 'antd'
import * as mock from 'mock'
import { PickUp } from '@/components/ui-kit/pick-up'
import { CardPick } from '@/components/ui-kit/card'
import { NapProfile } from '../../profile'

export const Toolbox: FC<Lib.T.ToolboxProps> = ({ active, boardRef }) => {
  const [activeOption, setActiveOption] = useRecoilState(createNapAtoms.activeOption)

  return (
    <Lib.S.ToolboxContainer active={active}>
      <div className={`withTitle ${activeOption === 'none'}`}>
        <h1>Create Your Nap</h1>
        <ToolBoxNextBtn boardRef={boardRef} />
      </div>

      <div className={`toolsContainer ${activeOption !== 'none'}`}>
        <span className="backButton" onClick={() => setActiveOption('none')}>
          <MdOutlineClose color="var(--layer-2-text-3)" size={22} />
        </span>
        <div className="tools">
          <Tools selectedOption={activeOption} boardRef={boardRef} />
        </div>
        <ToolBoxNextBtn boardRef={boardRef} />
      </div>
    </Lib.S.ToolboxContainer>
  )
}

export const ToolBoxNextBtn: FC<Lib.T.ToolBoxNextBtnProps> = ({ boardRef }) => {
  const { compileAllUp } = Lib.H.useBoardCompileUp(boardRef)

  return (
    <Button type="primary" onClick={compileAllUp} className="nextBtn">
      <span>Next</span>
      <HiChevronRight color="var(--layer-2-text-3)" size={20} />
    </Button>
  )
}

export const Items: FC<Lib.T.ItemsProps> = ({ onOptionsClick, boardRef }) => {
  const showMoreOptions = useRecoilValue(createNapAtoms.showMoreOptions)
  const activeOption = useRecoilValue(createNapAtoms.activeOption)
  const { get, on } = Lib.H.useItems({ onOptionsClick, boardRef })

  return (
    <>
      <Lib.S.ItemsShadowing active={showMoreOptions} />

      <Lib.S.ItemsContainer className={`${showMoreOptions ? 'showMore' : 'showLess'}`}>
        <ul>
          {get.items.map(({ Icon, title, key }, index) => (
            <li key={index} title={showMoreOptions ? undefined : title} className={`${activeOption === key ? 'active' : ''}`} onClick={() => on.itemClicks(key)}>
              <span>
                <Icon color="var(--layer-2-text-3)" size={30} />
              </span>

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
    <Lib.S.GuideLines>
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
    </Lib.S.GuideLines>
  )
}

export const PostsPickUp: FC<Lib.T.PostsPickUpProps> = ({ boardRef }) => {
  const { pickUpProps, onPostSelect } = Lib.H.usePostsPickUp({ boardRef })
  const pickUp = useRecoilValue(createNapAtoms.postsPickUp)

  return (
    <PickUp {...pickUpProps} visibility={pickUp}>
      {Array.from(Array(mock.pickCard.length)).map((_, index) => {
        return <CardPick key={index} {...mock.pickCard[index]} onSelect={onPostSelect} />
      })}
    </PickUp>
  )
}

export const MentionPickUp: FC<Lib.T.MentionPickUpProps> = ({ boardRef }) => {
  const { pickUpProps, onUserSelect } = Lib.H.useMentionPickUp({ boardRef })
  const pickUp = useRecoilValue(createNapAtoms.mentionPickUp)

  return (
    <PickUp {...pickUpProps} visibility={pickUp}>
      <Lib.S.Mentions>
        {Array.from(Array(mock.mentions.length)).map((_, index) => (
          <Mention key={index} {...mock.mentions[index]} onClick={onUserSelect} />
        ))}
      </Lib.S.Mentions>
    </PickUp>
  )
}

export const Mention: FC<Lib.T.MentionProps> = ({ id, username, profile, hasNap, onClick }) => {
  return (
    <Lib.S.Mention onClick={() => onClick?.(id)}>
      <div>
        <NapProfile id={id} profile={profile} hasNap={hasNap} username={username} usernameWithAtSign size={0.8} />
      </div>
    </Lib.S.Mention>
  )
}

export const Tool: FC<Lib.T.ToolProps> = ({ disabled, Icon, type, onClick, title, index }) => {
  return (
    <Lib.S.Tool index={index} onClick={() => onClick(type)} className={`${disabled && 'disabled'}`}>
      <Button type="dashed">
        <Icon color="var(--layer-2-text-2)" size={17} />
        <span>{title}</span>
      </Button>
    </Lib.S.Tool>
  )
}

export const Tools: FC<Lib.T.ToolsProps> = ({ selectedOption, boardRef }) => {
  const tools = Lib.H.useTools({ selectedOption, boardRef })
  return <Lib.S.Tools>{tools}</Lib.S.Tools>
}

export const ToolsForTextInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef }) => {
  const { get, on } = Lib.H.useToolsForTextInserter({ boardRef })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForPostInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef }) => {
  const { get, on } = Lib.H.useToolsForPostInserter({ boardRef })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForMentionInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef }) => {
  const { get, on } = Lib.H.useToolsForMentionInserter({ boardRef })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}

export const ToolsForQuestionInserter: FC<Lib.T.ToolsForInserters> = ({ boardRef }) => {
  const { get, on } = Lib.H.useToolsForQuestionInserter({ boardRef })
  return (
    <>
      {get.tools.map((tool, index) => (
        <Tool {...tool} onClick={on.toolClick} key={index} index={index} />
      ))}
    </>
  )
}
