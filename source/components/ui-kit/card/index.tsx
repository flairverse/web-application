import { FC } from 'react'
import * as Lib from './lib'
import { Img } from '@/helpers/image.helper'
import Link from 'next/link'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdBookmark } from 'react-icons/md'
import { IoMdWallet } from 'react-icons/io'
import { Button } from 'antd'
import { ColumnarDate } from '../columnar-date'
import { AppIcons } from '../app-icons'
import { DetailedInfo } from '../detailed-info'
import { NapProfile } from '../nap-profile'

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
  return (
    <Lib.S.CardContainer>
      <data>
        <header>
          <Link href={`/${user.username}`}>
            <a>
              <NapProfile id={user.id} hasNap mode="horizontal" username={user.fullName} job={user.job} />
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

        <body>
          <Link href={slug}>
            <a>
              <img src={Img.random()} alt={title} />

              <h2>{title}</h2>

              <div>
                <ColumnarDate />

                <summary>{summary}</summary>
              </div>
            </a>
          </Link>
        </body>

        <span />

        <footer>
          {/* <IoMdWallet color="white" size={50} />

          <span>
            <AppIcons.Blog />
          </span> */}
        </footer>
      </data>
    </Lib.S.CardContainer>
  )
}
