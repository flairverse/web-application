import styled from 'styled-components'
import * as Lib from '.'

const TRANSITION = 'all 150ms linear'

export const LayeredContainer = styled.div`
  position: relative;

  > .content {
    transform: translateX(0);
    transition: ${TRANSITION};

    &.true {
      transform: translateX(-50px);
    }
  }
`

export const Layer = styled.div<Pick<Lib.T.LayerProps, 'withHeader'>>`
  position: absolute;
  background-color: var(--layer-1);
  z-index: 1;
  top: 0;
  right: calc(-100% - 20px);
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  transition: ${TRANSITION};

  &.true {
    right: 0;
  }

  > .header {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 6px 9px;

    > button {
      padding: 0;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > h6 {
      margin: 0;
      flex: 1;
      color: var(--layer-2-text-2);
      font-size: var(--f-3);
      text-align: center;
    }
  }

  > .body {
    padding: 7px;
  }
`
