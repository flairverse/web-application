import {
  NapGifsDBModel,
  NapImagesDBModel,
  NapLinksDBModel,
  NapMentionsDBModel,
  NapPostsDBModel,
  NapQuestionsDBModel,
  NapQuizzesDBModel,
  NapRemindersDBModel,
  NapTextsDBModel,
} from 'database/models'

export type AllNapDBModels =
  | NapGifsDBModel
  | NapImagesDBModel
  | NapLinksDBModel
  | NapMentionsDBModel
  | NapPostsDBModel
  | NapQuestionsDBModel
  | NapQuizzesDBModel
  | NapRemindersDBModel
  | NapTextsDBModel
