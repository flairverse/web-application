import Dexie, { Table } from 'dexie'
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
} from '../models'

export class DraftableCollection extends Dexie {
  napGifs!: Table<NapGifsDBModel>
  napImages!: Table<NapImagesDBModel>
  napLinks!: Table<NapLinksDBModel>
  napMentions!: Table<NapMentionsDBModel>
  napPosts!: Table<NapPostsDBModel>
  napQuestions!: Table<NapQuestionsDBModel>
  napQuizzes!: Table<NapQuizzesDBModel>
  napReminders!: Table<NapRemindersDBModel>
  napTexts!: Table<NapTextsDBModel>

  constructor() {
    super('FlairVerseDraftable')
    this.version(1).stores({
      napGifs: '++id, &elementID',
      napImages: '++id, &elementID',
      napLinks: '++id, &elementID',
      napMentions: '++id, &elementID',
      napPosts: '++id, &elementID',
      napQuestions: '++id, &elementID',
      napQuizzes: '++id, &elementID',
      napReminders: '++id, &elementID',
      napTexts: '++id, &elementID',
    })
  }

  static get use(): DraftableCollection {
    return new this()
  }
}
