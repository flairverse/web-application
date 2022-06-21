import styled from 'styled-components'
import * as Lib from '.'

export const FloatButton = styled.div<Lib.T.FloatButtonProps>`
  left: ${({ position }) => position[0]}px;
  bottom: ${({ position }) => position[1]}px;
  position: fixed;
  cursor: pointer;
  background: #b23544;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`

export const DevtoolBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 400px;
  overflow: auto;
  max-height: 100vh;
  background-color: black;
  transform: translateY(15px) scale(1.02);
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease 0s;
  z-index: 999999;
  background-color: #0b1521;
  display: flex;
  flex-direction: column;

  &.true {
    transform: translateY(0px) scale(1);
    visibility: visible;
    opacity: 1;
  }

  > .header {
    background-color: #132337;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;

    > span {
      margin: 0 15px 0 0;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    > p {
      margin: 0;
      flex: 1;
      color: white;
      font-size: 12pt;
      display: flex;
      align-items: center;
    }
  }

  > .body {
    flex: 1;
    padding: 15px;

    > h2 {
      margin: 0;
      border-bottom: 1px solid #17283d;
      padding-bottom: 5px;
      color: white;
    }

    > p {
      color: white;
    }

    > div {
      > button {
        margin: 5px;
        color: white;
        font-family: Arial, Helvetica, sans-serif !important;
      }
    }
  }

  > .footer {
    padding: 10px;

    > button {
      color: white;
    }
  }
`
