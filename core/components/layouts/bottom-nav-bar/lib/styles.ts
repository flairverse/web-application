import styled from 'styled-components'
import * as Lib from '.'

export const BottomNavBarContainer = styled.div`
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45px;
  background: var(--layer-2);
  border-top: 3px solid var(--layer-2-border);
  z-index: 1;

  > ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > li {
      flex: 1;
      list-style: none;
      height: 100%;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`
