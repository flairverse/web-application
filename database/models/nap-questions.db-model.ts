import { NapCreatorUIKitLib } from '@/components/ui-kit/nap/creator'
import { NapElementsBaseDBModel } from './nap-elements-base.db-model'

export interface NapQuestionsDBModel extends NapElementsBaseDBModel, Omit<NapCreatorUIKitLib.T.Elements.Question, 'id'> {}
