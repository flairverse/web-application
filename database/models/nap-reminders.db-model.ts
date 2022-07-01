import { NapCreatorUIKitLib } from '@/components/ui-kit/nap/creator'
import { NapElementsBaseDBModel } from './nap-elements-base.db-model'

export interface NapRemindersDBModel extends NapElementsBaseDBModel, Omit<NapCreatorUIKitLib.T.Elements.Reminder, 'id'> {}
