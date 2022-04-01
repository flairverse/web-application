import { FC } from 'react'
import * as Lib from './lib'

export const NapProfile: FC<Lib.T.NapProfileProps> = ({ mode = 'vertical', username, hasNap, loading, id, onClick, seen, profile, size = 1, job, ...rest }) => {
  const clickHandler = () => {
    if (onClick) {
      onClick(id)
    }
  }

  return (
    <Lib.S.NapProfileContainer onClickCapture={clickHandler} seen={seen} mode={mode} hasNap={hasNap} loading={loading} size={size} {...rest}>
      <div className="picture">
        {hasNap && <div />}

        <img src={profile || '/removal/profile.jpg'} alt="user" draggable={false} />
      </div>

      <p className="detail">
        {username && <span>{username}</span>}
        {mode === 'horizontal' && job && <span>{job}</span>}
      </p>
    </Lib.S.NapProfileContainer>
  )
}
