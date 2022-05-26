import { Modal } from 'antd'
import styled from 'styled-components'
import * as Lib from '.'
import { ITEM_HEIGHT } from './constants'

export const TimePickerContainer = styled(Modal)`
  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
    background-color: var(--layer-1);
  }

  .content {
    padding: 5px;
    background-color: inherit;

    > .columns {
      display: flex;
      width: 100%;
      background-color: inherit;
    }

    > .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 10px 0 0 0;
      padding: 6px;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  color: var(--layer-2-text-1);
  padding: 8px;
  border-radius: 5px;
`

export const ColumnContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > h6 {
    color: var(--layer-2-text-3);
    font-size: var(--f-1);
    margin: 0;
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  > span {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 20px;
    user-select: none;
    cursor: pointer;
    opacity: 0.5;
    transition: all 150ms linear;

    &:hover {
      opacity: 1;
    }
  }

  > ul {
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    height: ${ITEM_HEIGHT * 6}px;
    max-height: 180px;
    overflow: auto;
    padding: ${ITEM_HEIGHT * 2}px 0 ${ITEM_HEIGHT * 3}px 0;
    touch-action: none;

    > li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      color: var(--layer-2-text-3);
      font-size: var(--f-1);
      min-height: ${ITEM_HEIGHT}px;

      &.active {
        transform: scale(1.5);
        color: var(--c-accent);
        position: relative;

        &::after,
        &::before {
          content: '';
          width: 60%;
          height: 1px;
          position: absolute;
          background-color: var(--layer-1-border);
          margin: auto;
          left: 0;
          right: 0;
        }

        &::before {
          top: 4px;
        }

        &::after {
          bottom: 4px;
        }
      }
    }
  }
`
