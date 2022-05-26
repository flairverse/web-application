import { FC } from 'react'
import * as Lib from './lib'
import { useRecoilValue } from 'recoil'
import { componentsAtoms } from '@/store/atoms'
import { Button } from 'antd'

export const TimePicker: FC<Lib.T.TimePickerProps> = props => {
  const { visibilityStoreKey, valuesStoreKey, minimumDate, maximumDate, columnsStoreKeys } = props
  const { get } = Lib.H.useTimePicker(props)
  const visibility = useRecoilValue(componentsAtoms.timePickerPopupVisibility(visibilityStoreKey))

  return (
    <Lib.S.TimePickerContainer visible={visibility} {...get.modalProps}>
      <div className="content">
        <div className="columns">
          <Lib.C.Column
            rangeStoreKey={columnsStoreKeys.yearsStoreKey}
            columnsStoreKeys={columnsStoreKeys}
            valuesStoreKey={valuesStoreKey}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            prefixes={get.prefixes}
            ranges={get.ranges}
            title="Year"
            type="year"
          />

          <Lib.C.Column
            rangeStoreKey={columnsStoreKeys.monthsStoreKey}
            columnsStoreKeys={columnsStoreKeys}
            valuesStoreKey={valuesStoreKey}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            prefixes={get.prefixes}
            ranges={get.ranges}
            title="Month"
            type="month"
          />

          <Lib.C.Column
            rangeStoreKey={columnsStoreKeys.daysStoreKey}
            columnsStoreKeys={columnsStoreKeys}
            valuesStoreKey={valuesStoreKey}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            prefixes={get.prefixes}
            ranges={get.ranges}
            title="Day"
            type="day"
          />

          <Lib.C.Column
            rangeStoreKey={columnsStoreKeys.hoursStoreKey}
            columnsStoreKeys={columnsStoreKeys}
            valuesStoreKey={valuesStoreKey}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            prefixes={get.prefixes}
            ranges={get.ranges}
            title="Hour"
            type="hour"
          />

          <Lib.C.Column
            rangeStoreKey={columnsStoreKeys.minutesStoreKey}
            columnsStoreKeys={columnsStoreKeys}
            valuesStoreKey={valuesStoreKey}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            prefixes={get.prefixes}
            ranges={get.ranges}
            title="Minute"
            type="minute"
          />
        </div>

        <div className="actions">
          <Lib.C.Info valuesStoreKey={valuesStoreKey} minimumDate={minimumDate} />
          <Button type="link">Discard</Button>
          <Button type="primary">OK</Button>
        </div>
      </div>
    </Lib.S.TimePickerContainer>
  )
}
