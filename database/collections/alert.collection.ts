import Dexie, { Table } from 'dexie'
import { CollectionNames } from '../enums'
import { NapAlertsDBModel } from '../models'

export class AlertCollection extends Dexie {
  napAlerts!: Table<NapAlertsDBModel>

  constructor() {
    super(CollectionNames.alert)
    this.version(1).stores({
      napAlerts: '++id, draftFeature',
    })
  }

  static get use(): AlertCollection {
    return new this()
  }
}
