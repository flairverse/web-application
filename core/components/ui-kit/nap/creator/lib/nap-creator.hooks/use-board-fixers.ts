import * as Lib from '..'

export const useBoardFixers = () => {
  const dummyTexts = Lib.H.useDummyTexts()
  /**
   *
   *
   *
   * decides which fixer to be used
   */
  const fix = (item: Lib.T.Elements.All): Lib.T.Elements.All | null => {
    const { type } = item

    switch (type) {
      case 'text': {
        return fixText(<Lib.T.Elements.Text>item)
      }

      case 'post': {
        return fixPost(<Lib.T.Elements.Post>item)
      }

      case 'mention': {
        return fixMention(<Lib.T.Elements.Mention>item)
      }

      case 'question': {
        return fixQuestion(<Lib.T.Elements.Question>item)
      }

      case 'quiz': {
        return fixQuiz(<Lib.T.Elements.Quiz>item)
      }

      case 'reminder': {
        return fixReminder(<Lib.T.Elements.Reminder>item)
      }

      case 'gif': {
        return fixGif(<Lib.T.Elements.Gif>item)
      }

      case 'image': {
        return fixImage(<Lib.T.Elements.Image>item)
      }

      case 'link': {
        return fixLink(<Lib.T.Elements.Link>item)
      }

      case 'more|less': {
        return null
      }
    }
  }

  /**
   *
   *
   *
   * fix all shared properties between items
   */
  const fixSharedItemProps = <T extends Lib.T.Elements.All>(item: T, shouldBe: Lib.T.ElementalOptions): T => {
    const { effect, id, type } = item
    const possibleEffects = Lib.CO.EFFECTS[<Uppercase<Lib.T.ElementalOptions>>type.toUpperCase()] as unknown as string[]

    if (!id || id.length !== Lib.CO.ELEMENTS_ID_LENGTHS) {
      item.id = Lib.HE.makeElementID()
    }

    if (!possibleEffects.includes(effect)) {
      item.effect = 'no-effect'
    }

    if (type !== shouldBe) {
      item.type = shouldBe
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a text item
   */
  const fixText = (item: Lib.T.Elements.Text): Lib.T.Elements.Text => {
    item = fixSharedItemProps(item, 'text')

    if (!item.text.trim()) {
      item.text = dummyTexts.text.defaultText
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a post item
   */
  const fixPost = (item: Lib.T.Elements.Post): Lib.T.Elements.Post => {
    item = fixSharedItemProps(item, 'post')
    return item
  }

  /**
   *
   *
   *
   * fixes a mention item
   */
  const fixMention = (item: Lib.T.Elements.Mention): Lib.T.Elements.Mention => {
    item = fixSharedItemProps(item, 'mention')
    return item
  }

  /**
   *
   *
   *
   * fixes a question item
   */
  const fixQuestion = (item: Lib.T.Elements.Question): Lib.T.Elements.Question => {
    item = fixSharedItemProps(item, 'question')
    const { hint, question } = item

    if (!hint.trim()) {
      item.hintEnabled = false
    }

    if (!question.trim()) {
      item.question = dummyTexts.question.questionText
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a link item
   */
  const fixLink = (item: Lib.T.Elements.Link): Lib.T.Elements.Link => {
    item = fixSharedItemProps(item, 'link')
    const { href, link } = item

    if (!link.trim()) {
      item.link = dummyTexts.link.defaultText
    }

    if (!href.trim()) {
      item.href = dummyTexts.link.defaultLink
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a quiz item
   */
  const fixQuiz = (item: Lib.T.Elements.Quiz): Lib.T.Elements.Quiz => {
    item = fixSharedItemProps(item, 'quiz')
    const { answers, correctAnswer, hintText, questionText } = item
    const noneEmptyAnswers = answers.filter(answer => answer !== '')

    if (!noneEmptyAnswers[0]?.trim()) {
      noneEmptyAnswers[0] = dummyTexts.quiz.firstAnswer
    }

    if (!noneEmptyAnswers[1]?.trim()) {
      noneEmptyAnswers[1] = dummyTexts.quiz.secondAnswer
    }

    while (noneEmptyAnswers.length < 4) {
      noneEmptyAnswers.push('')
    }

    item.answers = noneEmptyAnswers

    if (!hintText.trim()) {
      item.hintTextEnabled = false
    }

    if (!questionText.trim()) {
      item.questionText = dummyTexts.quiz.questionText
    }

    if (correctAnswer < 0 || correctAnswer > 3) {
      item.correctAnswer = 0
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a reminder item
   */
  const fixReminder = (item: Lib.T.Elements.Reminder): Lib.T.Elements.Reminder => {
    item = fixSharedItemProps(item, 'reminder')
    const { reminderName } = item

    if (!reminderName.trim()) {
      item.reminderName = dummyTexts.reminder.name
    }

    return item
  }

  /**
   *
   *
   *
   * fixes a gif item
   */
  const fixGif = (item: Lib.T.Elements.Gif): Lib.T.Elements.Gif => {
    item = fixSharedItemProps(item, 'gif')
    return item
  }

  /**
   *
   *
   *
   * fixes an image item
   */
  const fixImage = (item: Lib.T.Elements.Image): Lib.T.Elements.Image => {
    item = fixSharedItemProps(item, 'image')
    return item
  }

  return { fix }
}
