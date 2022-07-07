import styled from 'styled-components'

export const LongTapContainer = styled.div`
  user-select: none;
  position: relative;

  > .longTapPopup {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -111;
  }
`
