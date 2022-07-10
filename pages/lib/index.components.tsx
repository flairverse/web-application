import { AppIcons } from '@/components/ui-kit/app-icons'
import { CardMain } from '@/components/ui-kit/card'
import { Horizontal, HorizontalUIKitLib } from '@/components/ui-kit/horizontal'
import { NapProfile } from '@/components/ui-kit/nap'
import { SuggestionBox } from '@/components/ui-kit/suggestion-box'
import { Button } from 'antd'
import * as staticMocks from 'mock/static'
import Link from 'next/link'
import { FC } from 'react'
import * as Lib from '.'

export const Topic: FC<Lib.T.TopicProps> = ({ counter, title, TopicIcon, topic, href, ...rest }) => {
  return (
    <Link href={href}>
      <Lib.S.Topic href={href} className="col-lg-3 col-md-3 col-sm-3 col-xs-6" backColor={`var(--c-${topic})`} {...rest}>
        <div>
          <span>
            <TopicIcon />
          </span>

          <div>
            <p>{title}</p>

            <span>View all {counter} Posts</span>
          </div>
        </div>
      </Lib.S.Topic>
    </Link>
  )
}

export const Topics: FC<Lib.T.TopicsProps> = ({ ...rest }) => {
  return (
    <Lib.S.Topics {...rest} className={`topics ${rest.className}`}>
      <Topic title="Authors' Blogs" topic="blog" counter={1000} TopicIcon={AppIcons.Blog} href="/" />
      <Topic title="Orators' Podcasts" topic="podcast" counter={1000} TopicIcon={AppIcons.Podcast} href="/" />
      <Topic title="Scribers' Articles" topic="article" counter={1000} TopicIcon={AppIcons.Article} href="/" />
      <Topic title="Companies' Jobs" topic="job" counter={1000} TopicIcon={AppIcons.Job} href="/" />
    </Lib.S.Topics>
  )
}

export const LeftAside: FC = () => {
  return (
    <Lib.S.TopThings>
      <SuggestionBox topic="article" title="Top articles" suggestionsItems={staticMocks.suggestionInBox1} />
      <SuggestionBox
        topic="article"
        title="We are proud of your valuable articles and read them with interest."
        suggestionContent={{ href: '/', buttonText: 'Publish now' }}
      />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsFlairs={staticMocks.suggestionFlair2} />
      <SuggestionBox topic="blog" title="Top blog" suggestionsItems={staticMocks.suggestionInBox2} />
      <SuggestionBox topic="blog" title="We cant't wait to read what you write." suggestionContent={{ href: '/', buttonText: 'Write now' }} />
    </Lib.S.TopThings>
  )
}

export const RightAside: FC = () => {
  return (
    <Lib.S.TopThings>
      <SuggestionBox topic="job" title="Top job" suggestionsItems={staticMocks.suggestionInBox2} />
      <SuggestionBox
        topic="job"
        title="People with flair are waiting for your company jobs."
        suggestionContent={{ href: '/', buttonText: 'Make now' }}
      />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsItems={staticMocks.suggestionInBox1} />
      <SuggestionBox
        topic="podcast"
        title="Do you have any amazing things to say? We listen to them."
        suggestionContent={{ href: '/', buttonText: 'Speak now' }}
      />
      <SuggestionBox topic="podcast" title="Top podcast" suggestionsFlairs={staticMocks.suggestionFlair1} />
    </Lib.S.TopThings>
  )
}

export const NapsList: FC = () => {
  const items: HorizontalUIKitLib.T.HorizontalItemProps[] = [
    ...Array.from(Array(50)).map((item, index) => {
      return {
        id: index,
        children: (
          <Lib.S.NapProfileContainer className="nap">
            <NapProfile id={0} loading={false} username="tw4kt5hwpwxbffg33ckesrq78bmd3s" hasNap job="Computer Engineering" />
          </Lib.S.NapProfileContainer>
        ),
      }
    }),
  ]

  return (
    <Lib.S.NapsList className="napList">
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
      {Array.from(Array(20)).map((item, index) => {
        return <CardMain key={index} post={staticMocks.blog1.post} user={staticMocks.blog1.user} />
      })}
    </Lib.S.CardsContainer>
  )
}

export const LoadMore: FC = () => {
  return (
    <Lib.S.LoadMore>
      <Button type="primary">Load more posts</Button>
    </Lib.S.LoadMore>
  )
}
