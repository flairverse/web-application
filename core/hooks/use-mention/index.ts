import { KeyboardEvent } from 'react'

export const useMention = (formSubmitter?: () => void) => {
  const onMentionKeyDown = ({ code, ctrlKey }: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((code === 'NumpadEnter' || code === 'Enter') && ctrlKey && formSubmitter) {
      formSubmitter()
    }
  }

  return { onMentionKeyDown }
}
