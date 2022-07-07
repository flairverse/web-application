import { RegExes } from '@/constants/reg-exes.constant'
import moment from 'moment'
import * as Lib from '..'

export const useBoardValidate = () => {
  /**
   *
   *
   *
   * decides which validator to be used
   */
  const validate = (item: Lib.T.Elements.All): Lib.T.ValidatorResult => {
    const { type } = item

    switch (type) {
      case 'text': {
        return validateText(<Lib.T.Elements.Text>item)
      }

      case 'post': {
        return validatePost(<Lib.T.Elements.Post>item)
      }

      case 'mention': {
        return validateMention(<Lib.T.Elements.Mention>item)
      }

      case 'question': {
        return validateQuestion(<Lib.T.Elements.Question>item)
      }

      case 'quiz': {
        return validateQuiz(<Lib.T.Elements.Quiz>item)
      }

      case 'reminder': {
        return validateReminder(<Lib.T.Elements.Reminder>item)
      }

      case 'gif': {
        return validateGif(<Lib.T.Elements.Gif>item)
      }

      case 'image': {
        return validateImage(<Lib.T.Elements.Image>item)
      }

      case 'link': {
        return validateLink(<Lib.T.Elements.Link>item)
      }

      case 'more|less': {
        return { isValid: true, reasons: [] }
      }
    }
  }

  const validateAll = (items: Lib.T.Elements.All[]): Lib.T.ValidatorResult[] => {
    const failedValidations: Lib.T.ValidatorResult[] = []

    for (const item of items) {
      const { isValid, reasons } = validate(item)

      if (!isValid) {
        failedValidations.push({ isValid, reasons })
      }
    }

    return failedValidations
  }

  /**
   *
   *
   *
   * validate all shared properties between items
   */
  const validateSharedItemProps = (item: Lib.T.Elements.BaseElement, shouldBe: Lib.T.ElementalOptions): Lib.T.ValidatorResult => {
    const { effect, id, type } = item
    let isValid = true
    const reasons: Lib.T.ValidatorResultReason[] = []
    const possibleEffects = Lib.CO.EFFECTS[<Uppercase<Lib.T.ElementalOptions>>type.toUpperCase()] as unknown as string[]

    // validate id
    if (id.length !== Lib.CO.ELEMENTS_ID_LENGTHS) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.shared_incorrectID, elementID: id })
    }

    // validate effect
    if (!possibleEffects.includes(effect)) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.shared_incorrectEffect, elementID: id })
    }

    // validate type
    if (type !== shouldBe) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.shared_incorrectType, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a text item
   */
  const validateText = (item: Lib.T.Elements.Text): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'text')
    const { id, text } = item
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons

    // validate text
    if (!text.trim()) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.textBased_emptyText, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a post item
   */
  const validatePost = (item: Lib.T.Elements.Post): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'post')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a mention item
   */
  const validateMention = (item: Lib.T.Elements.Mention): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'mention')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a question item
   */
  const validateQuestion = (item: Lib.T.Elements.Question): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'question')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    const { hint, hintEnabled, question, id } = item

    // validate hint
    if (hintEnabled) {
      if (!hint.trim()) {
        isValid = false
        reasons.push({ error: Lib.E.ValidatorErrorEnum.question_emptyHint, elementID: id })
      }
    }

    // validate question
    if (!question.trim()) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.question_emptyQuestion, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a link item
   */
  const validateLink = (item: Lib.T.Elements.Link): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'link')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    const { id, href, link } = item

    // validate link text
    if (!link.trim()) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.textBased_emptyText, elementID: id })
    }

    // validate link href
    if (!RegExes.url.test(href)) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.link_incorrectLinkHref, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a quiz item
   */
  const validateQuiz = (item: Lib.T.Elements.Quiz): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'quiz')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    const { answers, correctAnswer, hintText, hintTextEnabled, id, questionText } = item

    // validate answers
    if (answers.filter(answer => answer !== '').length < 2) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.quiz_incorrectAnswersLength, elementID: id })
    }

    // validate hint
    if (hintTextEnabled) {
      if (!hintText.trim()) {
        isValid = false
        reasons.push({ error: Lib.E.ValidatorErrorEnum.quiz_incorrectHint, elementID: id })
      }
    }

    // validate questionText
    if (!questionText.trim()) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.quiz_incorrectQuestionText, elementID: id })
    }

    // validate correct answer
    if (correctAnswer < 0 || correctAnswer > 3) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.quiz_incorrectCorrectAnswer, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a reminder item
   */
  const validateReminder = (item: Lib.T.Elements.Reminder): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'reminder')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    const { endTime, id, reminderName } = item

    // validate reminderName
    if (!reminderName.trim()) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.reminder_incorrectReminderName, elementID: id })
    }

    // validate endDate
    const thirtyMinute = 30 * 60 * 1000
    if (moment(endTime).diff(moment()) < thirtyMinute) {
      isValid = false
      reasons.push({ error: Lib.E.ValidatorErrorEnum.reminder_lessThanThirtyMinute, elementID: id })
    }

    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates a gif item
   */
  const validateGif = (item: Lib.T.Elements.Gif): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'gif')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    return { isValid, reasons }
  }

  /**
   *
   *
   *
   * validates an image item
   */
  const validateImage = (item: Lib.T.Elements.Image): Lib.T.ValidatorResult => {
    const sharedValidation = validateSharedItemProps(item, 'image')
    let isValid = sharedValidation.isValid
    const reasons: Lib.T.ValidatorResultReason[] = sharedValidation.reasons
    return { isValid, reasons }
  }

  return { validate, validateAll }
}
