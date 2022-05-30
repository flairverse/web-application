import { FC } from 'react'
import moment from 'moment'
import { Button, DatePicker as AntDatePicker } from 'antd'
import * as Lib from '.'

export const DatePicker: FC<Lib.T.DatePickerProps> = ({ minimumDate, valueStoreKey, maximumDate }) => {
  const { get, handleChanges } = Lib.H.useDatePicker({ minimumDate, valueStoreKey, maximumDate })

  return (
    <AntDatePicker
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
      value={get.parsedValue()}
      onSelect={handleChanges}
    />
  )
}

export const Distance: FC<Lib.T.DistanceProps> = ({ valueStoreKey, minimumDate }) => {
  const distance = Lib.H.useDistance({ valueStoreKey, minimumDate })
  return <Lib.S.Distance>Ends in {distance}</Lib.S.Distance>
}

export const ConfirmButton: FC<Lib.T.ConfirmButtonProps> = ({ onConfirm, minimumDate, valueStoreKey, closeOnConfirm, closeModal }) => {
  const confirm = Lib.H.useConfirmButton({ onConfirm, minimumDate, valueStoreKey, closeOnConfirm, closeModal })
  return (
    <Button type="primary" onClick={confirm}>
      Ok
    </Button>
  )
}
