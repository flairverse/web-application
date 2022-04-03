import { FC, useEffect, useState } from 'react'
import * as Lib from './lib'
import { Img } from '@/helpers/image.helper'
import Link from 'next/link'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdBookmark } from 'react-icons/md'
import { IoMdWallet } from 'react-icons/io'
import { Button } from 'antd'
import { ColumnarDate } from '../columnar-date'
import { AppIconByTopic } from '../app-icons'
import { NapProfile } from '../nap-profile'
import { Information } from '../information'
import { RiHeart2Line } from 'react-icons/ri'
import { FiMessageSquare } from 'react-icons/fi'
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

export const Card: FC<Lib.T.CardProps> = ({}) => {
  const [topic, setTopic] = useState<Topic>('blog')

  useEffect(() => {
    const theTopic = TOPICS[Num.random(0, 4)]
    if (theTopic) {
      setTopic(theTopic)
    }
  }, [])

  return (
    <Lib.S.CardContainer>
      <data>
        <header>
          <Link href={`/${user.username}`}>
            <a>
              <NapProfile id={user.id} hasNap mode="horizontal" username={user.fullName} job={user.job} size={0.6} className="flairDetail" />
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
              <img src={Img.random()} alt={title} />

              <h2>{title}</h2>

              <div>
                <ColumnarDate dateTime="2018-05-08" topic={topic} />

                <summary>{summary}</summary>
              </div>
            </a>
          </Link>
        </div>

        <span />

        <footer>
          <Information icon={<IoMdWallet />} colorTheme={topic} title="Payment Required" />
          <Information icon={<AppIconByTopic topic={topic} transparent />} title={`An ${topic}`} />
          <Information icon={<RiHeart2Line />} title="Likes">
            12.5k
          </Information>
          <Information icon={<FiMessageSquare />} title="Comments">
            12.5k
          </Information>
          <Information title="Required time to read">55 "</Information>
        </footer>
      </data>
    </Lib.S.CardContainer>
  )
}
