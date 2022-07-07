import { message } from 'antd'
import { RefObject } from 'react'
import * as Lib from '..'

export const useShowErrors = (boardRef: RefObject<HTMLDivElement>) => {
  const getErrorMessage = (error: Lib.E.ValidatorErrorEnum): string => {
    switch (error) {
      case Lib.E.ValidatorErrorEnum.shared_incorrectID: {
        return 'The ID of the focused item is incorrect. Did you change that manually?'
      }

      case Lib.E.ValidatorErrorEnum.shared_incorrectEffect: {
        return 'The effect of the focused item is incorrect. Did you change that manually?'
      }

      case Lib.E.ValidatorErrorEnum.shared_incorrectType: {
        return 'The type of the focused item is incorrect. Did you change that manually?'
      }

      case Lib.E.ValidatorErrorEnum.textBased_emptyText: {
        return 'The focused item is empty'
      }

      case Lib.E.ValidatorErrorEnum.question_emptyHint: {
        return 'The focused question has no hint'
      }

      case Lib.E.ValidatorErrorEnum.question_emptyQuestion: {
        return 'The focused question is empty'
      }

      case Lib.E.ValidatorErrorEnum.link_incorrectLinkHref: {
        return 'The focused link has an incorrect URL'
      }

      case Lib.E.ValidatorErrorEnum.quiz_incorrectAnswersLength: {
        return 'The focused quiz should have at least two answers'
      }

      case Lib.E.ValidatorErrorEnum.quiz_incorrectHint: {
        return 'The focused quiz ha no hint'
      }

      case Lib.E.ValidatorErrorEnum.quiz_incorrectCorrectAnswer: {
        return 'Select a correct answer for the focused quiz'
      }

      case Lib.E.ValidatorErrorEnum.quiz_incorrectQuestionText: {
        return 'The focused quiz has no question'
      }

      case Lib.E.ValidatorErrorEnum.reminder_incorrectReminderName: {
        return 'The focused reminder has no name'
      }

      case Lib.E.ValidatorErrorEnum.reminder_lessThanThirtyMinute: {
        return 'The end date of the reminder must be at least one hour later'
      }
    }
  }

  const showError = ({ elementID, error }: Lib.T.ValidatorResultReason) => {
    const messageKey = Math.random()
    message.open({
      type: 'warning',
      content: getErrorMessage(error),
      onClick: () => message.destroy(messageKey),
      key: messageKey,
    })
    Lib.HE.getFrameById(boardRef, elementID)?.focus()
  }

  const mapErrors = (errors: Lib.T.ValidatorResult[]) => {
    const firstError = errors[0]?.reasons[0]

    if (firstError && firstError.elementID && firstError.error) {
      showError(firstError)
    }
  }

  return { mapErrors }
}
