import * as Lib from '.'
import { Tab } from '@/components/ui-kit/tabs/lib/types'

export const useIndexPage = () => {
  const categories: Tab[] = [
    {
      content: <Lib.C.ForYouContent />,
      key: 'for-you',
      title: 'For you',
    },
    {
      content: <Lib.C.FollowingsContent />,
      key: 'followings',
      title: 'Followings',
    },
  ]

  return {
    get: {
      categories,
    },
  }
}
