import { Modal } from 'antd'
import styled, { keyframes } from 'styled-components'

const INFO_HEIGHT = 70

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
    height: calc(270px + ${INFO_HEIGHT}px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid var(--layer-1-border);
    border-radius: 5px;

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

    > .info {
      margin: 0;
      color: var(--layer-2-text-1);
      height: ${INFO_HEIGHT - 3}px;
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

      > span {
        flex: 1;
      }
    }
  }
`
