import { DraftableCollection } from 'database/collections'
import { DraftableCollectionEnum } from 'database/enums'
import { DraftSettingsDBModel } from 'database/models'
import { IndexableType, Table } from 'dexie'

const draftableCollection = DraftableCollection.use

export class DraftSettingsMixin {
  draftSettings: Table<DraftSettingsDBModel, IndexableType> = draftableCollection.draftSettings

  async disableDraftedNapBoard(): Promise<this> {
    await this.draftSettings.put({ draftedNapBoard: false, id: DraftableCollectionEnum.napDraftMessage })
    return this
  }
  async enableDraftedNapBoard(): Promise<this> {
    await this.draftSettings.put({ draftedNapBoard: true, id: DraftableCollectionEnum.napDraftMessage })
    return this
  }
  async getDraftedNapBoard(): Promise<boolean> {
    const napDraftMessage = await this.draftSettings.get(DraftableCollectionEnum.napDraftMessage)
    if (napDraftMessage === undefined) {
      return true
    }
    return napDraftMessage.draftedNapBoard
  }
}
