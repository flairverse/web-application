import { Modal } from 'antd'
import styled from 'styled-components'

const TIME_PICKER_WIDTH = 150
const TIME_PICKER_COLON_WIDTH = 20

export const DateTimePicker = styled(Modal)`
  padding: 0;

  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
    background-color: var(--layer-1);

    > .content {
      background-color: inherit;
      border: 1px solid var(--layer-1-border);
      border-radius: 5px;
      overflow: hidden;

      > .content {
        padding: 10px 15px;
      }
    }
  }
`

export const TimePicker = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: ${TIME_PICKER_WIDTH + 2}px;

    &.values {
      background-color: var(--layer-2);
      border: 1px solid var(--layer-2-border);
      border-radius: 5px;
      font-family: var(--ff-3);
      font-size: 20pt;
      height: 50px;
      color: var(--layer-2-text-3);
      margin: 5px 0;

      > span {
        width: ${TIME_PICKER_COLON_WIDTH}px;
        display: inline-flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        user-select: none;
      }
    }

    &.handles {
      display: flex;
    }
  }
`

export const TimePickerInput = styled.div`
  display: inline-block;
  width: ${(TIME_PICKER_WIDTH - TIME_PICKER_COLON_WIDTH) / 2}px;
  border: none;
  height: 100%;
  border-radius: 0;
  outline: none;
  background-color: transparent;
  text-align: center;
  padding: 0;
  margin: 0;
  user-select: none;
`

export const TimePickerButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 75ms linear;
    border: 1px dashed transparent;

    &[disabled] {
      cursor: default;
    }

    &:hover {
      &:not([disabled]) {
        border-color: var(--layer-2-border);
      }
    }
  }
`

export const DatePicker = styled.div`
  width: 100%;
  border: 1px solid var(--layer-2-border);
  border-radius: 8px;
  overflow: hidden;
`

export const DatePickerItem = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--layer-2-border);
  padding: 0 10px;

  &:last-child {
    border: none;
  }

  > span {
    color: var(--layer-2-text-2);
    flex: 1;
  }

  > button {
    display: flex;
    align-items: center;

    &.month,
    &.day {
      padding: 0 10px;
      min-width: 90px;

      > span {
        flex: 1;
      }

      > i {
        font-size: var(--f-1);
        font-style: normal;
      }
    }
  }
`
export const MonthsAndDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > button {
    flex: 1 0 calc(100% / 4);
    margin: 5px;
  }

  &.day {
    justify-content: unset;

    > button {
      flex: 1 0 calc(100% / 50);
    }
  }
`

export const Actions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 25px 0 5px 0;

  > div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`
