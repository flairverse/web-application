import { NapCreatorUIKitLib } from '@/components/ui-kit/nap'
import { Modal } from 'antd'
import styled from 'styled-components'

const NAVIGATE_BUTTONS_WIDTH = 50

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
    background-color: rgba(0, 0, 0, 0.9);

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
      }
    }
  }
`

export const NapGroup = styled.div`
  width: ${NapCreatorUIKitLib.CO.BASE_BOARD_WIDTH}px;
  height: ${NapCreatorUIKitLib.CO.BASE_BOARD_HEIGHT}px;
  background-color: var(--layer-2);
  border: 1px solid var(--layer-2-border);
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: none;
  transition: all 150ms linear;
  z-index: 1;
  opacity: 0.5;

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
    transform: translateX(-10%) scale(0.95);
  }

  &.afterActive {
    transform: translateX(10%) scale(0.95);
  }
`

export const NavigateButton = styled.button`
  position: absolute;
  right: 0;
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

  &.backward {
    right: unset;
    left: 0;
    transform: rotate(180deg);
  }
`
