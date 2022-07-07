import { AlertCollection } from 'database/collections'
import { AlertCollectionEnum } from 'database/enums'
import { NapAlertsDBModel } from 'database/models'
import { IndexableType, Table } from 'dexie'

const alertCollection = AlertCollection.use

export class AlertMixin {
  napAlerts: Table<NapAlertsDBModel, IndexableType> = alertCollection.napAlerts

  async readNapDraftFeatureAlert(): Promise<this> {
    await this.napAlerts.put({ draftFeature: true, id: AlertCollectionEnum.napAlertsDraftFeature })
    return this
  }
  async unreadNapDraftFeatureAlert(): Promise<this> {
    await this.napAlerts.put({ draftFeature: false, id: AlertCollectionEnum.napAlertsDraftFeature })
    return this
  }
  async getNapDraftFeatureAlert(): Promise<boolean> {
    const napAlerts = await this.getAllNapAlerts()
    if (napAlerts) {
      return napAlerts.draftFeature
    } else {
      return false
    }
  }

  async getAllNapAlerts(): Promise<NapAlertsDBModel | undefined> {
    return await this.napAlerts.get(AlertCollectionEnum.napAlertsDraftFeature)
  }
}
