import { AppIcons } from '@/components/ui-kit/app-icons'
import { Menu } from '@/components/ui-kit/menu'
import { layoutTopNavbarAtoms } from '@/store/atoms'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import Link from 'next/link'
import FullDynamicLogo from 'public/app-logos/full-dynamic.svg'
import { FC } from 'react'
import { BsSlashSquare } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { MdAddCircleOutline, MdQueryBuilder } from 'react-icons/md'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Lib from '.'

/**
 *
 *
 *
 * Flairverse Logo
 */
export const Logo: FC = () => (
  <Link href="/" shallow>
    <a className="logo">
      <FullDynamicLogo />
    </a>
  </Link>
)

/**
 *
 *
 *
 * user profile
 */
export const Profile: FC<Lib.T.ProfileProps> = ({ username }) => {
  const { menuItems } = Lib.H.useProfile({ username })

  return (
    <div className="profile">
      <Menu<Lib.T.ProfileMenuKeys, void>
        items={menuItems}
        minWidth="270px"
        position={['33px', '3px', 'unset', 'unset']}
        openMenuEffect="scale-out"
      >
        <button>
          <img src="/removal/profile.jpg" alt="" />
        </button>
      </Menu>
    </div>
  )
}

/**
 *
 *
 *
 * Search box
 */
export const SearchInput: FC = () => {
  Lib.H.useNavbarSearchBox()
  const setSearchQuery = useSetRecoilState(layoutTopNavbarAtoms.searchQuery)
  const [searchBarFocused, setSearchBarFocused] = useRecoilState(
    layoutTopNavbarAtoms.searchBoxFocused,
  )
  const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <div className={`input ${searchBarFocused ? 'focused' : ''}`}>
      <Input
        className="navbarSearchBox"
        placeholder="Search for amazing..."
        aria-label="Search for amazing..."
        size="middle"
        allowClear
        type="search"
        data-testid="navbarSearchBox"
        onPressEnter={e => console.log(e)}
        onChange={e => setSearchQuery(e.target.value)}
        onFocus={() => setSearchBarFocused(true)}
        onBlur={() => setSearchBarFocused(false)}
        suffix={<BsSlashSquare color="var(--layer-2-text-1)" className="slashIcon" />}
      />

      <div
        className={`suggestions ${searchBarFocused ? 'visible' : 'hidden'}`}
        data-testid="searchSuggestion"
      >
        {/* <Spin indicator={spinner} className="loading" /> */}

        <ul>
          <SearchSuggest actionType="article" href="/" text="Lorem ipsum dolor sit amet" />
          <SearchSuggest actionType="blog" href="/" text="Lorem ipsum" />
          <SearchSuggest
            actionType="job"
            href="/"
            text="Lorem ipsum dolor sit amet Lorem ipsum Lorem ipsum dolor sit amet Lorem ipsum"
          />
          <SearchSuggest actionType="podcast" href="/" text="Lorem ipsum dolor sit" />
          <SearchSuggest actionType="query" href="/" text="Lorem" />
        </ul>
      </div>
    </div>
  )
}

/**
 *
 *
 * suggested item inside "SearchInput" component
 */
export const SearchSuggest: FC<Lib.T.SearchSuggestProps> = ({ text, actionType, ...linkProps }) => (
  <Lib.S.SearchSuggest>
    <Link {...linkProps}>
      <a>
        <SuggestionActions actionType={actionType} />
        <span>{text}</span>
      </a>
    </Link>

    <span>
      <FaTimes />
    </span>
  </Lib.S.SearchSuggest>
)

/**
 *
 *
 * suggested item icon inside "SearchSuggest" component
 */
export const SuggestionActions: FC<Lib.T.SuggestionActionsProps> = ({ actionType }) => {
  switch (actionType) {
    case 'article': {
      return <AppIcons.ArticleTransparent fillColor="var(--layer-2-text-3)" />
    }

    case 'blog': {
      return <AppIcons.BlogTransparent fillColor="var(--layer-2-text-3)" />
    }

    case 'job': {
      return <AppIcons.JobTransparent fillColor="var(--layer-2-text-3)" />
    }

    case 'podcast': {
      return <AppIcons.PodcastTransparent fillColor="var(--layer-2-text-3)" />
    }

    case 'query': {
      return <MdQueryBuilder size={20} color="var(--layer-2-text-3)" />
    }
  }
}

/**
 *
 *
 *
 * (sign in & create account || create post) buttons
 */
export const Buttons: FC = () => (
  <div className="buttons">
    <Link href="/auth/sign-in">
      <Button type="link" href="/auth/sign-in">
        Sign In
      </Button>
    </Link>

    <Link href="/auth/create-account">
      <Button type="primary" href="/auth/create-account">
        Create Account
      </Button>
    </Link>
  </div>
)

/**
 *
 *
 *
 * create new post button in mobile view (min 768px)
 */
export const AdderButton: FC = () => (
  <div className="adder">
    <MdAddCircleOutline color="var(--layer-2-text-2)" size={30} />
  </div>
)
