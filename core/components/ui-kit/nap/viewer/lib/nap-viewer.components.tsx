import { Button, Mentions } from 'antd'
import moment from 'moment'
import { FC, useRef } from 'react'
import { FaEllipsisH, FaPause, FaShare } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import { RiSendPlane2Fill } from 'react-icons/ri'
import * as Lib from '.'

const { Option } = Mentions

export const NapGroup: FC<Lib.T.NapGroupProps> = props => {
  const { active, naps, storeKeys } = props
  const { classNames, backward, forward, napIndex } = Lib.H.useNapGroup(props)

  return (
    <Lib.S.NapGroup className={classNames}>
      {active && (
        <>
          <Lib.S.NapBar>
            {naps.map((_, index) => (
              <span key={index} className={napIndex >= index ? 'active' : undefined} />
            ))}
          </Lib.S.NapBar>

          <Nap
            {...naps[napIndex]}
            napLength={naps.length}
            onBackward={backward}
            onForward={forward}
            key={napIndex}
            storeKeys={{ compiledElements: `${storeKeys.compiledElements}_${napIndex}` }}
          />
        </>
      )}
    </Lib.S.NapGroup>
  )
}

export const NavigateButton: FC<Lib.T.NavigateButtonProps> = ({ role, onClick, enabled }) => {
  const { classNames } = Lib.H.useNavigateButton({ enabled, role })
  return (
    <Lib.S.NavigateButton className={classNames} onClick={onClick} enabled={enabled}>
      <HiChevronRight size={30} color="var(--layer-2-text-2)" />
    </Lib.S.NavigateButton>
  )
}

export const Nap: FC<Lib.T.NapProps> = nap => {
  const { creator, onBackward, onForward } = nap

  return (
    <Lib.S.Nap>
      <span className="navigator forward" onClick={onForward} />
      <span className="navigator backward" onClick={onBackward} />

      <div className="topContent">
        <div className="profile">
          <img src={creator.profileImage} alt="User profile" />
          <div className="info">
            <p className="nameAndTime">
              {creator.firstName} {creator.lastName} ● {moment(nap.createAt).fromNow()}
            </p>
            <p className="username">@{creator.username}</p>
          </div>
        </div>

        <div className="actions">
          <span title="Share with friends">
            <FaShare size={20} />
          </span>

          <span title="Pause sliding">
            <FaPause size={20} />
          </span>

          <span title="More options">
            <FaEllipsisH size={20} />
          </span>
        </div>
      </div>

      <CompiledDownNap {...nap} />

      {/* <div className="gap" /> */}

      <div className="bottomContent">
        <div className="input">
          <Mentions placeholder="Reply to this nap... You can @mention people" autoSize={{ maxRows: 10 }}>
            <Option value="afc163">afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
          </Mentions>

          <Button type="primary" disabled>
            <RiSendPlane2Fill />
          </Button>
        </div>
      </div>
    </Lib.S.Nap>
  )
}

export const CompiledDownNap: FC<Lib.T.CompiledDownNapProps> = nap => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { storeKeys } = nap
  const {} = Lib.H.useCompiledDownNap({ ...nap, containerRef })

  return <Lib.S.MainBoard style={{ ...nap.boardSize }} ref={containerRef} />
}
