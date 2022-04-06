import { FC } from 'react'
import * as Lib from './lib'
import Link from 'next/link'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdBookmark } from 'react-icons/md'
import { IoMdWallet } from 'react-icons/io'
import { Button, Skeleton } from 'antd'
import { ColumnarDate } from '../columnar-date'
import { AppIconByTopic } from '../app-icons'
import { NapProfile } from '../nap-profile'
import { Information } from '../information'
import { FiMessageSquare } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { Num } from '@/helpers/number'
import { Menu } from '@/components/menu'

export const Card: FC<Lib.T.CardProps> = ({ post, user, loading }) => {
  const { menuItems } = Lib.H.useCard()
  const { slug: postSlug, summary, title, topic, comments, likes, cover } = post
  const { fullName, job, profile, slug: userSlug, id: userID } = user

  return (
    <Lib.S.CardContainer loading={loading}>
      <data>
        <header>
          <Link href={userSlug}>
            <a>
              <NapProfile profile={profile} loading={loading} id={userID} hasNap mode="horizontal" username={fullName} job={job} size={0.6} className="flairDetail" />
            </a>
          </Link>

          <span>
            <Menu<Lib.T.MenuItemKeys, void> items={menuItems}>
              <Button>
                <HiOutlineDotsHorizontal />
              </Button>
            </Menu>

            <Button>
              <MdBookmark />
            </Button>
          </span>
        </header>

        <div>
          <Link href={postSlug}>
            <a>
              {loading ? <Skeleton.Image /> : cover ? <img src={cover} alt={title} /> : null}

              {loading ? <Skeleton active className="title" /> : <h2>{title}</h2>}

              {loading ? (
                <div className="descSkeleton">
                  <Skeleton.Button active className="date" />

                  <div className="descriptions">
                    <Skeleton active className="description" />
                    <Skeleton active className="description" />
                  </div>
                </div>
              ) : (
                <div className="description">
                  <ColumnarDate dateTime="2018-05-08" topic={topic} />

                  <summary>{summary}</summary>
                </div>
              )}
            </a>
          </Link>
        </div>

        <span />

        <footer>
          <Information loading={loading} icon={<IoMdWallet />} colorTheme={topic} title="Payment Required" />

          <Information loading={loading} icon={<AppIconByTopic topic={topic} transparent />} title={`An ${topic}`} />

          <Information loading={loading} icon={<FaRegHeart />} title="Likes">
            {Num.stringify(likes)}
          </Information>

          <Information loading={loading} icon={<FiMessageSquare />} title="Comments">
            {Num.stringify(comments)}
          </Information>

          <Information loading={loading} title="Required time to read">
            55 "
          </Information>
        </footer>
      </data>
    </Lib.S.CardContainer>
  )
}
