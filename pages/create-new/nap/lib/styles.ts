import styled from 'styled-components'
import * as Lib from '.'

export const CreateNewNapContainer = styled.div`
  display: block;
  height: auto;
  padding: 5px;

  > .board {
    width: 100%;
    padding-top: 56.25%;
    background-color: var(--layer-2);
    border: 2px solid var(--layer-2-border);
    border-radius: 8px;
    transition: all 150ms linear;

    &.true {
      transform: rotate(90deg);
    }
  }
`
