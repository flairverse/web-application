import { FC } from 'react'
import * as Lib from './lib'
import { useRecoilValue } from 'recoil'
import { componentsAtoms } from '@/store/atoms'
import moment from 'moment'
import { Button, DatePicker } from 'antd'

export const TimePicker: FC<Lib.T.TimePickerProps> = ({ visibilityStoreKey, minimumDate, maximumDate }) => {
  const { get } = Lib.H.useTimePicker({ visibilityStoreKey, minimumDate, maximumDate })
  const visibility = useRecoilValue(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))

  return (
    <Lib.S.TimePickerContainer visible={visibility} {...get.modalProps}>
      <div className="content">
        <DatePicker
          size="small"
          dropdownClassName="noFooter"
          inputReadOnly
          defaultOpen
          open
          format="YYYY/M/DD HH:mm"
          showSecond={false}
          disabledDate={get.disabledDates}
          // @ts-ignore
          disabledTime={get.disabledTimes}
          showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
          showNow={false}
          defaultValue={moment(minimumDate)}
        />

        <span className="gap" />

        <div className="info">
          <span>Ends in 2 hours, 3 minutes and 52 seconds</span>
          <div>
            <Button type="link">Discard</Button>
            <Button type="primary">Ok</Button>
          </div>
        </div>
      </div>
    </Lib.S.TimePickerContainer>
  )
}
