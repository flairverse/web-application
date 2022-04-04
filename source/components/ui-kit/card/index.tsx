import { FC, useEffect, useState } from 'react'
import * as Lib from './lib'
import { Img } from '@/helpers/image.helper'
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
import { Topic, TOPICS } from '@/types/topics'
import { Num } from '@/helpers/number.heler'

const title = 'How To Manage You Time And Get More Done? Is It Realy Helps You Tobe More Carefull aAbout Times?'
const summary =
  'It may not possible to squeeze more time in the day without sacrificing sleep. So how do you achieve It may not possible to squeeze more time in the day without sacrificing sleep. So how do you achieve...'
const slug = '/'
const user = {
  fullName: 'HamidReza Qafoori',
  username: 'qafoori',
  job: 'Computer Engineering',
  profile: '/removal/profile.jpg',
  id: 0,
}
const loading = false

export const Card: FC<Lib.T.CardProps> = ({}) => {
  const [topic, setTopic] = useState<Topic>('blog')

  useEffect(() => {
    const theTopic = TOPICS[Num.random(0, 4)]
    if (theTopic) {
      setTopic(theTopic)
    }
  }, [])

  return (
    <Lib.S.CardContainer loading={loading}>
      <data>
        <header>
          <Link href={`/${user.username}`}>
            <a>
              <NapProfile loading={loading} id={user.id} hasNap mode="horizontal" username={user.fullName} job={user.job} size={0.6} className="flairDetail" />
            </a>
          </Link>

          <span>
            <Button>
              <HiOutlineDotsHorizontal />
            </Button>

            <Button>
              <MdBookmark />
            </Button>
          </span>
        </header>

        <div>
          <Link href={slug}>
            <a>
              {loading ? <Skeleton.Image /> : <img src={Img.random()} alt={title} />}

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
            12.5k
          </Information>

          <Information loading={loading} icon={<FiMessageSquare />} title="Comments">
            12.5k
          </Information>

          <Information loading={loading} title="Required time to read">
            55 "
          </Information>
        </footer>
      </data>
    </Lib.S.CardContainer>
  )
}
