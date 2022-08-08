import { AtomFamilies } from '@/enums/store-families.enum'
import { atomFamily, SerializableParam } from 'recoil'
import * as Lib from '../lib'

export const napIndex = atomFamily<number, SerializableParam>({
  key: AtomFamilies.napIndex,
  default: 0,
})

export const napGroupIndex = atomFamily<number, SerializableParam>({
  key: AtomFamilies.napGroupIndex,
  default: 0,
})

export const napViewerVisibility = atomFamily<boolean, SerializableParam>({
  key: AtomFamilies.napViewerVisibility,
  default: false,
})

export const answerQuestionModal = atomFamily<Lib.T.AnswerQuestionModal, SerializableParam>({
  key: AtomFamilies.answerQuestionModal,
  default: Lib.CO.ANSWER_QUESTION_MODAL_DEFAULTS,
})
