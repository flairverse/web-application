import { FC, useState } from 'react'
import * as Lib from './lib'
import { useRecoilValue } from 'recoil'
import { componentsAtoms } from '@/store/atoms'
import { Button } from 'antd'

export const TimePicker: FC<Lib.T.TimePickerProps> = ({ visibilityStoreKey, minimumDate, maximumDate, valueStoreKey, onConfirm, closeOnConfirm = true }) => {
  const [showContent, setShowContent] = useState<boolean>(false)
  const { get, handleEarliestClick, closeModal } = Lib.H.useTimePicker({ visibilityStoreKey, minimumDate, valueStoreKey, setShowContent })
  const visibility = useRecoilValue(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))

  return (
    <Lib.S.TimePickerContainer visible={visibility} {...get.modalProps}>
      <div className="content">
        {showContent && (
          <div className="contentChild">
            <Lib.C.DatePicker minimumDate={minimumDate} valueStoreKey={valueStoreKey} maximumDate={maximumDate} />

            <span className="gap" />

            <div className="actions">
              <Button type="default" onClick={handleEarliestClick}>
                Earliest
              </Button>

              <div>
                <Button type="link" onClick={closeModal}>
                  Discard
                </Button>

                {onConfirm && (
                  <Lib.C.ConfirmButton
                    // prettier-ignore
                    onConfirm={onConfirm}
                    closeOnConfirm={closeOnConfirm}
                    minimumDate={minimumDate}
                    valueStoreKey={valueStoreKey}
                    closeModal={closeModal}
                  />
                )}
              </div>
            </div>

            <Lib.C.Distance valueStoreKey={valueStoreKey} minimumDate={minimumDate} />
          </div>
        )}
      </div>
    </Lib.S.TimePickerContainer>
  )
}
