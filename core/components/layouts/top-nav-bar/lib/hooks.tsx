import { useRecoilValue } from 'recoil'
import { layoutTopNavbarAtoms } from '@/store/atoms'
import { MenuItem } from '@/components/ui-kit/menu/lib/types'
import * as Lib from '.'

import { FiUser } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { BiMessageAlt } from 'react-icons/bi'
import { MdOutlineNearMe } from 'react-icons/md'
import { RiBookmarkLine, RiGroupLine, RiSettingsLine } from 'react-icons/ri'
import { BsFilePlus, BsPlusSquare, BsEmojiSmile, BsSignpost } from 'react-icons/bs'

export const useNavbarLayout = () => {
  const onGapDBLClick = () => {
    window.scrollTo(0, 0)
  }

  return {
    onGapDBLClick,
  }
}

export const useNavbarSearchBox = () => {
  const searchQuery = useRecoilValue(layoutTopNavbarAtoms.searchQuery)
}

export const useProfile = ({ username }: Pick<Lib.T.ProfileProps, 'username'>) => {
  const menuItems: MenuItem<Lib.T.ProfileMenuKeys, void>[] = [
    {
      title: 'Your Profile',
      key: 'profile',
      href: `/${username}`,
      icon: <FiUser />,
    },
    {
      title: 'Create New Post',
      key: 'create-new-post',
      href: '/create-new/post',
      icon: <BsPlusSquare />,
    },
    {
      title: 'Make New Nap',
      key: 'make-new-nap',
      href: '/create-new/nap',
      icon: <BsFilePlus />,
    },
    {
      key: 'breaker',
      breaker: true,
    },
    {
      title: 'Bookmarks',
      key: 'bookmarks',
      href: `/${username}/bookmarks`,
      icon: <RiBookmarkLine />,
    },
    {
      title: 'Reactions',
      key: 'reactions',
      href: `/${username}/reactions`,
      icon: <BsEmojiSmile />,
    },
    {
      title: 'Comments',
      key: 'comments',
      href: `/${username}/comments`,
      icon: <BiMessageAlt />,
    },
    {
      title: 'Likes',
      key: 'likes',
      href: `/${username}/likes`,
      icon: <AiOutlineHeart />,
    },
    {
      key: 'breaker',
      breaker: true,
    },
    {
      title: 'Messaging',
      key: 'messaging',
      href: `/${username}/messaging`,
      icon: <AiOutlineMessage />,
    },
    {
      title: 'New Group',
      key: 'new-group',
      onClick: key => alert(key),
      icon: <RiGroupLine />,
    },
    {
      title: 'People Nearby',
      key: 'people-nearby',
      href: `/explore/people-nearby`,
      icon: <MdOutlineNearMe />,
    },
    {
      key: 'breaker',
      breaker: true,
    },
    {
      title: 'Preferences',
      key: 'preferences',
      href: `/${username}/preferences`,
      icon: <RiSettingsLine />,
    },
    {
      title: 'Flairverse FAQ',
      key: 'faq',
      href: `/guides/faq`,
      icon: <BsSignpost />,
    },
  ]

  return { menuItems }
}
