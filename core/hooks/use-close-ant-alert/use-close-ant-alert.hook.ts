import { AlertKeys } from '@/types/alert-keys.type'

export const useCloseAntAlert = () => {
  const closeAntAlert = (key: AlertKeys) => {
    const alertContainer = document.getElementsByClassName(key)?.[0]
    if (!alertContainer || !alertContainer.classList.contains('ant-alert')) {
      return
    }

    const closeButton = <HTMLButtonElement | null>alertContainer.querySelector('.ant-alert-close-icon')
    if (!closeButton) {
      return
    }

    closeButton.click()
  }

  return { closeAntAlert }
}
