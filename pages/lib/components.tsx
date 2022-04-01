import { FC, useState } from 'react'
import * as Lib from '.'
import Link from 'next/link'
import { AppIcons } from '@/components/ui-kit/app-icons'
import { SuggestionBox } from '@/components/ui-kit/suggestion-box'
import { Horizontal } from '@/components/ui-kit/horizontal'
import { NapProfile } from '@/components/ui-kit/nap-profile'
import * as mock from 'mock'
import { HorizontalItemProps } from '@/components/ui-kit/horizontal/lib/types'
import { Card } from '@/components/ui-kit/card'

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
      <SuggestionBox topic="article" title="Top articles" suggestionsItems={mock.suggestionInBox1} />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsFlairs={mock.suggestionFlair2} />
      <SuggestionBox topic="blog" title="Top blog" suggestionsItems={mock.suggestionInBox2} />
    </Lib.S.TopThings>
  )
}

export const RightAside: FC = () => {
  return (
    <Lib.S.TopThings>
      <SuggestionBox topic="job" title="Top job" suggestionsItems={mock.suggestionInBox2} />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsItems={mock.suggestionInBox1} />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsFlairs={mock.suggestionFlair1} />
    </Lib.S.TopThings>
  )
}

export const NapsList: FC = () => {
  const items: HorizontalItemProps[] = [
    ...Array.from(Array(50)).map((item, index) => {
      return {
        id: index,
        children: (
          <div className="nap">
            <NapProfile id={0} username="tw4kt5hwpwxbffg33ckesrq78bmd3s" hasNap job="Computer Engineering" />
          </div>
        ),
      }
    }),
  ]

  return (
    <Lib.S.NapsList>
      <Horizontal speed={2} items={items} onItemsClick={id => alert(id * 2)} />
    </Lib.S.NapsList>
  )
}

export const FollowingsContent: FC = () => {
  return (
    <Lib.S.CardsContainer>
      <p style={{ color: 'gray' }}>FollowingsContent</p>
    </Lib.S.CardsContainer>
  )
}

export const ForYouContent: FC = () => {
  return (
    <Lib.S.CardsContainer>
      {Array.from(Array(50)).map((item, index) => {
        return <Card key={index} />
      })}
    </Lib.S.CardsContainer>
  )
}
