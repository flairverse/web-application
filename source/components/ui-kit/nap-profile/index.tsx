import { FC } from 'react'
import { Skeleton } from 'antd'
import * as Lib from './lib'

export const NapProfile: FC<Lib.T.NapProfileProps> = ({ mode = 'vertical', username, hasNap, opening, loading, id, onClick, seen, profile, size = 1, job, ...rest }) => {
  const clickHandler = () => {
    if (onClick) {
      onClick(id)
    }
  }

  return (
    <Lib.S.NapProfileContainer onClickCapture={clickHandler} seen={seen} mode={mode} loading={loading} hasNap={hasNap} opening={opening} size={size} {...rest}>
      <div className="picture">
        {loading ? (
          <Skeleton.Avatar active />
        ) : (
          <>
            {hasNap && <div />}

            <img src={profile || '/removal/profile.jpg'} alt="user" draggable={false} />
          </>
        )}
      </div>

      <p className="detail">
        {loading ? <Skeleton.Button active className="username" /> : username && <span>{username}</span>}

        {mode === 'horizontal' ? loading ? <Skeleton.Button active className="job" /> : job && <span>{job}</span> : null}
      </p>
    </Lib.S.NapProfileContainer>
  )
}
