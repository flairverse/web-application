import * as alertKeys from '@/constants/alert-keys.constant'
import * as notificationKeys from '@/constants/notification-keys.constant'
import { useCloseAntAlert } from '@/hooks/use-close-ant-alert'
import { Button, notification } from 'antd'
import { DB } from 'database'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useDraftMessage = () => {
  const { closeAntAlert } = useCloseAntAlert()
  const router = useRouter()
  const db = new DB()
  const [hasReadDraftAlert, setHasReadDraftAlert] = useState<boolean>(true)

  const manageDraftAlertStatus = async (customStatus?: boolean) => {
    setHasReadDraftAlert(customStatus || (await db.getNapDraftFeatureAlert()))
  }

  const onCloseMessage = async () => {
    await db.readNapDraftFeatureAlert()
  }

  const goToSettings = () => router.push('/')

  const closeNotification = () => notification.close(notificationKeys.CREATE_NAP___RE_ENABLE_DRAFTED_NAP_BOARD)

  const onConfirmDisable = async () => {
    await db.disableDraftedNapBoard()
    closeAntAlert(alertKeys.CREATE_NAP___DRAFTED_NAP_BOARD_ALERT)
    notification.open({
      message: 'Disabled',
      description: 'You can go to your settings and re-enable this feature',
      placement: 'bottomRight',
      type: 'success',
      key: notificationKeys.CREATE_NAP___RE_ENABLE_DRAFTED_NAP_BOARD,
      btn: (
        <>
          <Button type="link" onClick={closeNotification}>
            Later
          </Button>
          <Button type="primary" onClick={goToSettings}>
            Go to settings
          </Button>
        </>
      ),
    })
  }

  useEffect(() => {
    manageDraftAlertStatus()
  }, [])

  return { onCloseMessage, onConfirmDisable, hasReadDraftAlert }
}
