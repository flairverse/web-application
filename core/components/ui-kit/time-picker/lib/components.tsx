import { LONG_MONTHS } from '@/helpers/dates/lib/constants'
import { Str } from '@/helpers/string'
import { Button } from 'antd'
import { FC, Fragment } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import * as Lib from '.'
import { LongPress } from '../../long-press'

const TimePickerInput: FC<Lib.T.TimePickerInputProps> = ({ target, storeKeys, maximumDate, dayEndIsMax }) => {
  const { value, handleInputChange } = Lib.H.useTimePickerInput({ target, storeKeys, maximumDate, dayEndIsMax })
  return <Lib.S.TimePickerInput onWheel={handleInputChange}>{value.toString().padStart(2, '0')}</Lib.S.TimePickerInput>
}

const TimePickerButton: FC<Lib.T.TimePickerButtonProps> = ({ target, action, storeKeys, maximumDate, dayEndIsMax }) => {
  const { Icon, handleButtonClicks, shouldDisableAction, value } = Lib.H.useTimePickerButton({ target, action, storeKeys, maximumDate, dayEndIsMax })
  return (
    <Lib.S.TimePickerButton>
      <LongPress callback={handleButtonClicks} disabled={shouldDisableAction(target, action, value)} timeout={50}>
        <Icon color="var(--layer-2-text-2)" size={20} />
      </LongPress>
    </Lib.S.TimePickerButton>
  )
}

export const TimePicker: FC<Lib.T.TimePickerProps> = ({ storeKeys, maximumDate, dayEndIsMax }) => {
  return (
    <Lib.S.TimePicker>
      <div className="handles">
        <TimePickerButton target="hour" action="increase" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
        <TimePickerButton target="minute" action="increase" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
      </div>

      <div className="values">
        <TimePickerInput target="hour" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
        <span>:</span>
        <TimePickerInput target="minute" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
      </div>

      <div className="handles">
        <TimePickerButton target="hour" action="decrease" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
        <TimePickerButton target="minute" action="decrease" storeKeys={storeKeys} maximumDate={maximumDate} dayEndIsMax={dayEndIsMax} />
      </div>
    </Lib.S.TimePicker>
  )
}

const DatePickerItem: FC<Lib.T.DatePickerItemProps> = ({ target, storeKeys, maximumDate }) => {
  const { value, formattedValue, onButtonsClick } = Lib.H.useDatePickerItem({ storeKeys, target })

  return (
    <Lib.S.DatePickerItem>
      <span>{Str.toTitleCase(target)}</span>

      {(target === 'month' || target === 'day') && (
        <Button className={target} onClick={onButtonsClick}>
          {formattedValue}
          <i>({(value + 1).toString().padStart(2, '0')})</i>
          <FiChevronRight color="var(--layer-2-text-2)" size={15} />
        </Button>
      )}

      {target === 'year' && <Years storeKeys={storeKeys} maximumDate={maximumDate} />}
    </Lib.S.DatePickerItem>
  )
}

export const DatePicker: FC<Lib.T.DatePickerProps> = ({ storeKeys, maximumDate }) => {
  return (
    <Lib.S.DatePicker>
      <DatePickerItem target="day" storeKeys={storeKeys} maximumDate={maximumDate} />
      <DatePickerItem target="month" storeKeys={storeKeys} maximumDate={maximumDate} />
      <DatePickerItem target="year" storeKeys={storeKeys} maximumDate={maximumDate} />
    </Lib.S.DatePicker>
  )
}

const Years: FC<Lib.T.YearsProps> = ({ storeKeys, maximumDate }) => {
  const { years, changeYear, selectedYear } = Lib.H.useYears({ storeKeys, maximumDate })
  return (
    <Fragment>
      {years.map((year, index) => (
        <Button key={index} type={selectedYear === year ? 'primary' : 'default'} onClick={() => changeYear(year)}>
          {year}
        </Button>
      ))}
    </Fragment>
  )
}

export const Months: FC<Lib.T.MonthsProps> = ({ storeKeys, maximumDate, dayEndIsMax }) => {
  const isMonthDisabled = Lib.H.useDisabledMonths({ dayEndIsMax, maximumDate, storeKeys })
  const { changeMonth, selectedMonth } = Lib.H.useMonths({ storeKeys })

  return (
    <Lib.S.MonthsAndDays className="month">
      {LONG_MONTHS.map((month, index) => (
        <Button key={index} type={index === selectedMonth ? 'primary' : 'default'} onClick={() => changeMonth(index)} disabled={isMonthDisabled(index)}>
          {month}
        </Button>
      ))}
    </Lib.S.MonthsAndDays>
  )
}

export const Days: FC<Lib.T.DaysProps> = ({ storeKeys, maximumDate, dayEndIsMax }) => {
  const isDayDisabled = Lib.H.useDisabledDays({ maximumDate, storeKeys, dayEndIsMax })
  const { changeDay, selectedDay, daysInMonth } = Lib.H.useDays({ storeKeys })

  return (
    <Lib.S.MonthsAndDays className="day">
      {Array.from(Array(daysInMonth())).map((_, index) => (
        <Button key={index} type={selectedDay === index ? 'primary' : 'default'} onClick={() => changeDay(index)} disabled={isDayDisabled(index)}>
          {(index + 1).toString().padStart(2, '0')}
        </Button>
      ))}
    </Lib.S.MonthsAndDays>
  )
}

export const Actions: FC<Lib.T.Actions> = ({ closeOnConfirm, onConfirm, storeKeys, autoHideEarliest }) => {
  const { goToEarliestDate, discard, confirm, isEarliestDisabled } = Lib.H.useActions({ closeOnConfirm, onConfirm, storeKeys, autoHideEarliest })

  return (
    <Lib.S.Actions>
      {!isEarliestDisabled && <Button onClick={goToEarliestDate}>Earliest</Button>}

      <div>
        <Button type="link" onClick={discard}>
          Discard
        </Button>

        <Button type="primary" onClick={confirm}>
          Ok
        </Button>
      </div>
    </Lib.S.Actions>
  )
}
