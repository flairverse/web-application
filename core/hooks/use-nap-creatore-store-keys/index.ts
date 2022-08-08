import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import * as storeKeys from '@/constants/store-keys.constants'

export const useNapCreatorsStoreKeys = () => {
  const inCreateNapPageAnGlobalViewer: NapCreatorUIKitLib.T.NapCreatorStoreKeys = {
    activeOption: storeKeys.PAGE__CREATE_NAP___ACTIVE_OPTION,
    activeItemID: storeKeys.PAGE__CREATE_NAP___ACTIVE_ITEM_ID,
    showMoreOptions: storeKeys.PAGE__CREATE_NAP___SHOW_MORE_OPTIONS,
    popups: {
      post: storeKeys.PAGE__CREATE_NAP___POSTS_PICK_UP_VISIBILITY,
      mention: storeKeys.PAGE__CREATE_NAP___MENTION_PICK_UP_VISIBILITY,
      giphy: storeKeys.PAGE__CREATE_NAP___GIPHY_PICK_UP_VISIBILITY,
      timePicker: storeKeys.PAGE__CREATE_NAP___TIME_PICKER_POPUP,
      answerQuestion: storeKeys.COMPONENT__NAP_VIEWER___ANSWER_QUESTION_VISIBILITY,
      editLink: storeKeys.PAGE__CREATE_NAP___EDIT_LINK_POPUP_VISIBILITY,
      editLinkDetail: storeKeys.PAGE__CREATE_NAP___EDIT_LINK_POPUP_TEXT_AND_REF,
    },
    searchQueries: {
      giphy: storeKeys.PAGE__CREATE_NAP___GIFS_PICKUP_SEARCH_QUERY,
    },
  }

  return { inCreateNapPageAnGlobalViewer }
}
