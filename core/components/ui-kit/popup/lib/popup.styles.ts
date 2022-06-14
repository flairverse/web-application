import styled from 'styled-components'

const TRANSITION = 'all 100ms linear'

export const PopupBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-bg-trans-8);
  z-index: 3;
  transition: ${TRANSITION};

  &.false {
    opacity: 0;
    visibility: hidden;
  }
`

export const PopupContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 30px;
  width: calc(100% - 50px);
  height: auto;
  background-color: var(--layer-1);
  margin: auto;
  z-index: 3;
  border: 3px solid var(--layer-1-border);
  border-radius: 20px;
  padding: 10px;
  transition: ${TRANSITION};

  &.false {
    transform: translateY(100%);
    visibility: hidden;
    opacity: 0;
  }

  > .body {
    width: 100%;
    height: auto;
    max-height: calc(100vh - 200px);
    overflow: auto;
  }
`
