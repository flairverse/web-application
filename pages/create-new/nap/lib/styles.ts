import styled from 'styled-components'
import * as Lib from '.'

export const CreateNewNapContainer = styled.div`
  display: block;
  height: auto;
  padding: 5px;

  > .boardContainer {
    display: flex;
    flex-direction: row-reverse;

    > .board {
      width: 100%;
      padding-top: 56.25%;
      background-color: var(--layer-2);
      border: 2px solid var(--layer-2-border);
      border-radius: 8px;
      flex: 1;

      &.true {
        transform: rotate(90deg);
      }
    }
  }
`

export const ToolboxContainer = styled.div`
  width: 100%;
  height: 40px;
  background: var(--layer-2);
  border: 1px solid var(--layer-2-border);
  border-radius: 8px;
  margin: 0 0 7px 0;
  display: flex;

  > .guide {
    color: var(--layer-2-text-3);
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: var(--f-2);
    user-select: none;
  }

  > .menuButton {
  }
`

export const ItemsContainer = styled.div`
  height: auto;

  > ul {
    padding: 0;
    margin: 0;
    list-style: none;

    > li {
      display: flex;
      height: 20px;

      > p {
        color: var(--layer-2-text-3);
        margin: 0;
        flex: 1;
        height: 100%;
      }

      > span {
        width: 30px;
        height: 30px;
        padding: 5px;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
