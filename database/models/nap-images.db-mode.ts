import { NapCreatorUIKitLib } from '@/components/ui-kit/nap/creator'
import { NapElementsBaseDBModel } from './nap-elements-base.db-model'

export interface NapImagesDBModel extends NapElementsBaseDBModel, Omit<NapCreatorUIKitLib.T.Elements.Image, 'id'> {}
