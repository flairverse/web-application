import { NapCreatorUIKitLib } from '@/components/ui-kit/nap/creator'
import { NapElementsBaseDBModel } from './nap-elements-base.db-model'

export interface NapLinksDBModel extends NapElementsBaseDBModel, Omit<NapCreatorUIKitLib.T.Elements.Link, 'id'> {}
