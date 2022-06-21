import { FC } from 'react'
import { NapProfile } from '../../nap'
import * as Lib from './lib'

export const CardPick: FC<Lib.T.CardPickProps> = ({ author, post, onSelect, ...rest }) => {
  const { id: postId, title, cover, slug } = post
  const { fullName, id: authorId, username, profile } = author

  return (
    <Lib.S.CardPickContainer {...rest} onClick={() => onSelect?.(postId)}>
      <div className="detail">
        <div className="author">
          <NapProfile
            linked
            hasNap
            usernameWithAtSign
            profile={profile}
            username={username}
            id={authorId}
            size={0.5}
            mode="horizontal"
            className="napProfile"
          />

          <ul>
            <li>•</li>
            <li>{fullName}</li>
          </ul>
        </div>

        <h3>{title}</h3>
      </div>

      <div className="cover">{cover && <img src={cover} alt="" draggable={false} />}</div>
    </Lib.S.CardPickContainer>
  )
}
