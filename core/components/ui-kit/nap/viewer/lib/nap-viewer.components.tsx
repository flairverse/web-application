import { Button, Mentions } from 'antd'
import moment from 'moment'
import { FC } from 'react'
import { FaEllipsisH, FaPause, FaShare } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import { RiSendPlane2Fill } from 'react-icons/ri'
import * as Lib from '.'

const { Option } = Mentions

export const NapGroup: FC<Lib.T.NapGroupProps> = ({ active, naps, afterActive, beforeActive }) => {
  const { classNames } = Lib.H.useNapGroup({ active, naps, afterActive, beforeActive })
  return (
    <Lib.S.NapGroup className={classNames}>
      <Lib.S.NapBar>
        {naps.map((_, index) => (
          <span key={index} />
        ))}
      </Lib.S.NapBar>

      {naps.map((nap, index) => (
        <Nap {...nap} key={index} shouldRender={true} />
      ))}
    </Lib.S.NapGroup>
  )
}

export const Nap: FC<Lib.T.NapProps> = nap => {
  const { creator } = nap

  return (
    <Lib.S.Nap>
      {nap.shouldRender && (
        <>
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

          <div className="mainBoard"></div>

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
        </>
      )}
    </Lib.S.Nap>
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
