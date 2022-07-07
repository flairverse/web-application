import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'
import * as Lib from '.'

export const PickUpContainer = styled.div<Pick<Lib.T.PickUpProps, 'boxHeight' | 'boxWidth'>>`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: transparent;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 90ms linear;

  &.false {
    transform: scale(1.05);
    visibility: hidden;
    opacity: 0;
  }

  > div {
    width: ${({ boxWidth }) => boxWidth || '800px'};
    height: ${({ boxHeight }) => boxHeight || '500px'};
    background-color: var(--layer-1);
    max-width: 98%;
    max-height: 95vh;
    border-radius: 10px;
    border: 2px solid var(--layer-1-border);
    display: flex;
    flex-direction: column;

    > .searchBox {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 2px solid var(--layer-1-border);

      > svg {
        opacity: 0.3;
      }

      > input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        background-color: inherit;
        color: var(--layer-2-text-3);
        padding: 0 15px;
        font-size: var(--f-4);
        height: 65px;
      }

      > button {
        display: flex;
        align-items: centers;

        > span {
          font-size: var(--f-4);
        }

        > svg,
        > span {
          height: 100%;
          display: flex;
          align-items: center;
        }

        &.cancel {
          width: 30px;
          height: 30px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      @media screen and (max-width: ${breakPoints.md}) {
        padding: 0 10px;

        > input {
          height: 40px;
          padding: 0 5px;
          font-size: var(--f-1);
        }

        > button {
          &.cancel {
            width: 25px;
            height: 25px;
          }
        }

        > svg {
          width: 20px;
        }
      }
    }

    > .body {
      width: 100%;
      flex: 1;
      overflow: hidden;
      flex-direction: column;
      display: flex;

      > div {
        > .filterBox {
          background-color: var(--layer-2);
          overflow: hidden;
          transition: all 150ms linear;
        }
      }

      > .content {
        flex: 1;
        overflow: auto;
        max-height: 100%;
      }
    }
  }
`
