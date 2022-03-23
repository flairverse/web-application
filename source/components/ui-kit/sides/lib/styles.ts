import styled from 'styled-components'
import * as Lib from '.'

const DEFAULT_ASIDE_WIDTH = 250

export const Container = styled.div<Pick<Lib.T.SidesProps, 'sizes' | 'left' | 'right'>>`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  width: 100%;

  > div > .aside {
    padding: 4px;

    &.left {
      width: ${({ sizes }) => sizes?.left ?? DEFAULT_ASIDE_WIDTH}px;
    }

    &.right {
      width: ${({ sizes }) => sizes?.right ?? DEFAULT_ASIDE_WIDTH}px;
    }
  }

  > .main {
    flex: 1 1 0%;
    padding: 4px;
    max-width: ${({ sizes, left, right }) =>
      `calc(100% - ${Lib.HE.calculateCentralDivSize({
        sizes,
        left,
        right,
        defaultSize: DEFAULT_ASIDE_WIDTH
      })}px)`};
  }
`
