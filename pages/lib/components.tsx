import { FC } from 'react'
import * as Lib from '.'
import Link from 'next/link'
import { AppIcons } from '@/components/ui-kit/app-icons'

export const Topic: FC<Lib.T.TopicProps> = ({ counter, title, TopicIcon, topic, href, ...rest }) => {
  return (
    <Lib.S.Topic className="col-lg-3 col-md-3 col-sm-6" backColor={`var(--c-${topic})`} {...rest}>
      <div>
        <span>
          <TopicIcon />
        </span>

        <div>
          <p>{title}</p>
          
          <Link href={href}>
            <a href="">View all {counter} Posts</a>
          </Link>
        </div>
      </div>
    </Lib.S.Topic>
  )
}

export const Topics: FC = () => {
  return (
    <div>
      <Topic title="Authors' Blogs" topic="blog" counter={1000} TopicIcon={AppIcons.Blog} href="/" />
      <Topic title="Orators' Podcasts" topic="podcast" counter={1000} TopicIcon={AppIcons.Podcast} href="/" />
      <Topic title="Scribers' Articles" topic="article" counter={1000} TopicIcon={AppIcons.Article} href="/" />
      <Topic title="Companies' Jobs" topic="job" counter={1000} TopicIcon={AppIcons.Job} href="/" />
    </div>
  )
}
