import styled from 'styled-components'
import * as Lib from '.'

export const BackDropContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  width: 100%;
  height: 100vh;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transition: all 150ms linear;

  &.true {
    opacity: 0.5;
    visibility: visible;
  }
`
