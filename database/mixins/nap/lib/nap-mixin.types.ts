import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import {
  NapGifsDBModel,
  NapImagesDBModel,
  NapLinksDBModel,
  NapMentionsDBModel,
  NapPostsDBModel,
  NapQuestionsDBModel,
  NapQuizzesDBModel,
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
  | NapTextsDBModel

export type ElementType = Exclude<NapCreatorUIKitLib.T.ElementalOptions, 'reminder'>
