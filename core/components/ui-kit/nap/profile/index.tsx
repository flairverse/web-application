import { FC } from 'react'
import { Skeleton } from 'antd'
import * as Lib from './lib'
import Link from 'next/link'

export const NapProfile: FC<Lib.T.NapProfileProps> = ({ mode = 'vertical', username, hasNap, opening, loading, id, onClick, seen, profile, size = 1, job, linked, ...rest }) => {
  const clickHandler = () => {
    if (onClick) {
      onClick(id)
    }
  }

  const content = (
    <>
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
    </>
  )

  return (
    <Lib.S.NapProfileContainer onClick={clickHandler} seen={seen} mode={mode} loading={loading} hasNap={hasNap} opening={opening} size={size} {...rest}>
      {linked ? (
        <Link href={`/${username}`}>
          <a>{content}</a>
        </Link>
      ) : (
        <span>{content}</span>
      )}
    </Lib.S.NapProfileContainer>
  )
}
