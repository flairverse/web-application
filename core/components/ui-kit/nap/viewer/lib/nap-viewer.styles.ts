import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { breakPoints } from '@/constants/style-variables.constant'
import { BoardSize } from '@/models/nap.model'
import { Modal } from 'antd'
import styled, { keyframes } from 'styled-components'
import * as Lib from '.'

const NAVIGATE_BUTTONS_WIDTH = 35
const NAP_BAR_WIDTH = 5

export const NapViewerContainer = styled(Modal)`
  margin: auto;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  max-width: unset;

  > .ant-modal-content {
    height: 100%;
    background-color: transparent;

    > .ant-modal-body {
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: ${NapCreatorUIKitLib.CO.BASE_BOARD_WIDTH + (NAVIGATE_BUTTONS_WIDTH * 2 + 20)}px;

        > div {
          max-width: ${NapCreatorUIKitLib.CO.BASE_BOARD_WIDTH}px;
          max-height: calc(100vh - 50px);
          width: calc(100% - ${NAVIGATE_BUTTONS_WIDTH * 2 + 20}px);
          height: ${NapCreatorUIKitLib.CO.BASE_BOARD_HEIGHT}px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;

          @media screen and (max-width: ${breakPoints.sm}) {
            width: calc(100% - ${NAVIGATE_BUTTONS_WIDTH + 20}px);
          }
        }
      }
    }
  }
`

export const NapGroup = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: var(--layer-2);
  border: 1px solid var(--layer-2-border);
  border-radius: 8px;
  display: none;
  transition: all 150ms linear;
  z-index: 1;
  opacity: 0.5;
  overflow: auto;
  /* -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  } */

  &.active,
  &.beforeActive,
  &.afterActive {
    display: block;
  }

  &.active {
    z-index: 2;
    opacity: 1;
  }

  &.beforeActive {
    transform: translateX(-5%) scale(0.95);
  }

  &.afterActive {
    transform: translateX(5%) scale(0.95);
  }

  @media screen and (max-width: ${breakPoints.md}) {
    &.beforeActive {
      transform: translateX(-9%) scale(0.95);
    }

    &.afterActive {
      transform: translateX(9%) scale(0.95);
    }
  }
`

export const NavigateButton = styled.button<Pick<Lib.T.NavigateButtonProps, 'enabled'>>`
  position: absolute;
  right: 5px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  max-width: ${NAVIGATE_BUTTONS_WIDTH}px;
  height: ${NAVIGATE_BUTTONS_WIDTH}px;
  background-color: var(--layer-2);
  border-radius: 40%;
  border: 1px solid var(--layer-2-border);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 150ms linear;
  opacity: 0;
  visibility: hidden;

  &.enabled {
    opacity: 1;
    visibility: visible;
  }

  &.backward {
    right: unset;
    left: 5px;
    transform: rotate(180deg);
  }

  @media screen and (max-width: ${breakPoints.sm}) {
    right: ${NAVIGATE_BUTTONS_WIDTH - 20}px;

    &.backward {
      left: ${NAVIGATE_BUTTONS_WIDTH - 20}px;
    }
  }
`

export const napBarAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`

export const NapBar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: ${NAP_BAR_WIDTH * 3}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  > span {
    width: ${NAP_BAR_WIDTH}px;
    background-color: var(--layer-2-dash);
    flex: 1;
    border-radius: 100px;
    margin: 2px 0;
    position: relative;
    overflow: hidden;

    &.active {
      &::after {
        content: '';
        background-color: var(--layer-2-text-1);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;
        animation: ${napBarAnimation} 5s linear;
      }
    }
  }
`

export const Nap = styled(NapCreatorUIKitLib.S.MainBoard)<{ size: BoardSize }>`
  width: calc(100% - ${NAP_BAR_WIDTH * 3}px);
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: inherit;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  min-width: ${({ size: { width } }) => width}px;
  min-height: ${({ size: { height } }) => height}px;

  > .navigator {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 0;
    cursor: pointer;

    @media screen and (max-width: ${breakPoints.md}) {
      width: 50px;
    }

    @media screen and (max-width: ${breakPoints.sm}) {
      width: 30px;
    }

    &:hover {
      background: black;

      &.forward {
        background: linear-gradient(-90deg, #00000033, transparent);
      }

      &.backward {
        background: linear-gradient(90deg, #00000033, transparent);
      }
    }

    &.forward {
      right: -15px;
    }

    &.backward {
      left: 0;
    }
  }

  > .topContent {
    height: 40px;
    width: 100%;
    display: flex;
    position: relative;

    > .profile {
      flex: 1;
      display: flex;

      > img {
        height: 100%;
        width: 40px;
        border-radius: 40%;
      }

      > .info {
        color: var(--layer-2-text-3);
        padding: 0 0 0 10px;
        display: flex;
        flex-direction: column;

        > .nameAndTime {
          margin: 0;
          font-size: var(--f-2);
        }

        > .username {
          margin: 0;
          font-size: var(--f-1);
        }
      }
    }

    > .actions {
      height: 100%;
      display: flex;
      padding: 0 10px 0 0;

      > span {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;

        path {
          transition: all 150ms linear;
          fill: var(--layer-2-dash);
        }

        &:hover {
          cursor: pointer;

          path {
            fill: var(--layer-2-text-1);
          }
        }
      }
    }
  }

  /* > .gap {
    width: 1px;
    pointer-events: none;
  } */

  > .bottomContent {
    width: 100%;
    height: 40px;

    > .input {
      width: 50%;
      position: absolute;
      bottom: 15px;
      display: flex;

      @media screen and (max-width: ${breakPoints.md}) {
        width: calc(100% - 60px);
      }

      > .ant-mentions {
        width: 100%;
        background-color: transparent;
        border: none;

        > .rc-textarea {
          width: 100%;
          color: var(--layer-2-text-3);
          background-color: var(--layer-2-hover);
        }
      }

      > .ant-btn {
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: -35px;
        bottom: 0;

        &[disabled] {
          filter: grayscale(1);
        }
      }
    }
  }
`
