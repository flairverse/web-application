import Dexie, { Table } from 'dexie'
import { CollectionNames } from '../enums'
import {
  DraftSettingsDBModel,
  NapGifsDBModel,
  NapImagesDBModel,
  NapLinksDBModel,
  NapMentionsDBModel,
  NapPostsDBModel,
  NapQuestionsDBModel,
  NapQuizzesDBModel,
  NapTextsDBModel,
} from '../models'

export class DraftableCollection extends Dexie {
  draftSettings!: Table<DraftSettingsDBModel>
  napGifs!: Table<NapGifsDBModel>
  napImages!: Table<NapImagesDBModel>
  napLinks!: Table<NapLinksDBModel>
  napMentions!: Table<NapMentionsDBModel>
  napPosts!: Table<NapPostsDBModel>
  napQuestions!: Table<NapQuestionsDBModel>
  napQuizzes!: Table<NapQuizzesDBModel>
  napTexts!: Table<NapTextsDBModel>

  constructor() {
    super(CollectionNames.draftable)
    this.version(1).stores({
      draftSettings: '++id, draftedNapBoard',
      napGifs: '++id, &elementID',
      napImages: '++id, &elementID',
      napLinks: '++id, &elementID',
      napMentions: '++id, &elementID',
      napPosts: '++id, &elementID',
      napQuestions: '++id, &elementID',
      napQuizzes: '++id, &elementID',
      napTexts: '++id, &elementID',
    })
  }

  static get use(): DraftableCollection {
    return new this()
  }
}
