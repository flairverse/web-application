export const useDummyTexts = () => {
  return {
    text: {
      defaultText: 'Type Something here...',
    },
    question: {
      questionText: 'Ask me anything...',
      hint: 'Hint (optional)',
      replyButton: 'Answer this question',
    },
    quiz: {
      questionText: 'Which answer is correct?',
      hint: 'Hint (optional)',
      answersPlaceholder: 'Type the answer here...',
      firstAnswer: 'The first answer...',
      secondAnswer: 'The second answer...',
    },
    reminder: {
      name: 'Type Reminder Name...',
      endsOn: 'Ends on',
      twelveHour: '12-hour',
      remindMe: 'Remind me',
      at: 'At',
    },
    link: {
      defaultText: 'Type Description here...',
      defaultLink: 'https://example.com',
    },
  }
}
