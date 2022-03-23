import { FC } from 'react'
import * as Lib from '.'
import Link from 'next/link'
import { AppIcons } from '@/components/ui-kit/app-icons'
import { SuggestionBox } from '@/components/ui-kit/suggestion-box'
import * as mock from 'mock'

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

export const LeftAside: FC = () => {
  return (
    <Lib.S.TopThings>
      <SuggestionBox count={5} topic="article" title="Top articles" suggestions={mock.suggestionInBox1} />
      <SuggestionBox count={5} topic="blog" title="Top blog" suggestions={mock.suggestionInBox2} />
    </Lib.S.TopThings>
  )
}

export const RightAside: FC = () => {
  return (
    <Lib.S.TopThings>
      <SuggestionBox count={5} topic="job" title="Top job" suggestions={mock.suggestionInBox2} />
      <SuggestionBox count={5} topic="podcast" title="Top podcast" suggestions={mock.suggestionInBox1} />
    </Lib.S.TopThings>
  )
}
