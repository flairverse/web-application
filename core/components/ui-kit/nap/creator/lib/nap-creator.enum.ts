export enum ValidatorErrorEnum {
  // schema: <Lib.T.ElementalOptions | shared | <Lib.T.ElementalOptions>Based>_uniqueError
  shared_incorrectID,
  shared_incorrectEffect,
  shared_incorrectType,

  textBased_emptyText,

  question_emptyHint,
  question_emptyQuestion,

  link_incorrectLinkHref,

  quiz_incorrectAnswersLength,
  quiz_incorrectHint,
  quiz_incorrectCorrectAnswer,
  quiz_incorrectQuestionText,

  reminder_incorrectReminderName,
  reminder_lessThanThirtyMinute,
}
