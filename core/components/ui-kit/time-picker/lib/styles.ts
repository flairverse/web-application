import { Modal } from 'antd'
import styled, { keyframes } from 'styled-components'

const ACTIONS_HEIGHT = 50
const PICKER_HEIGHT = 270
const DISTANCE_HEIGHT = 40

const infoAnimation = keyframes`
  from {
    padding-bottom: 5px;
    opacity: 0;
  }
  to {
    padding-bottom: 0;
    opacity: 1;
  }
`

export const TimePickerContainer = styled(Modal)`
  padding: 0;

  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
    background-color: var(--layer-1);
  }

  .content {
    padding: 0;
    background-color: inherit;
    height: ${PICKER_HEIGHT + ACTIONS_HEIGHT + DISTANCE_HEIGHT}px;
    border: 1px solid var(--layer-1-border);
    border-radius: 5px;
    overflow: hidden;

    > .contentChild {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 100%;

      > .ant-picker {
        padding: 0;
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 0;
        border: none;
        visibility: hidden;

        > * {
          display: none;
        }
      }

      > .gap {
        flex: 1;
      }

      > .actions {
        margin: 0;
        height: ${ACTIONS_HEIGHT - 3}px;
        display: flex;
        align-items: center;
        font-family: var(--ff-2);
        border-top: 1px solid var(--layer-2-border);
        padding: 0 10px 5px 10px;
        opacity: 0;
        animation-name: ${infoAnimation};
        animation-duration: 300ms;
        animation-delay: 170ms;
        animation-fill-mode: forwards;

        > div {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
    }
  }
`

export const Distance = styled.span`
  display: flex;
  height: ${DISTANCE_HEIGHT}px;
  color: var(--layer-2-text-1);
  padding: 0 10px;
  align-items: center;
  border-top: 1px solid var(--layer-2-border);
  opacity: 0;
  animation-name: ${infoAnimation};
  animation-duration: 300ms;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
`
