import { BaseDBModel } from './base.db-model'

export interface DraftSettingsDBModel extends BaseDBModel {
  draftedNapBoard: boolean
}
