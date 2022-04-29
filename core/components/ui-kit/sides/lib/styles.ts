import styled from 'styled-components'
import * as Lib from '.'

const DEFAULT_ASIDE_WIDTH = 250
const DEFAULT_ASIDE_WIDTH_1200 = 200

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
    padding: 2px 5px;
    max-width: ${({ left, right, sizes }) =>
      `calc(100% - ${Lib.HE.calculateCentralDivSize({
        left,
        right,
        defaultSize: DEFAULT_ASIDE_WIDTH,
        leftSize: sizes?.left || DEFAULT_ASIDE_WIDTH,
        rightSize: sizes?.right || DEFAULT_ASIDE_WIDTH,
      })}px)`};
  }

  @media screen and (max-width: 1199px) {
    > div > .aside {
      &.left {
        width: ${({ sizes }) => sizes?.left_1200 ?? DEFAULT_ASIDE_WIDTH_1200}px;
      }

      &.right {
        width: ${({ sizes }) => sizes?.right_1200 ?? DEFAULT_ASIDE_WIDTH_1200}px;
      }
    }

    > .main {
      max-width: ${({ left, right, sizes }) =>
        `calc(100% - ${Lib.HE.calculateCentralDivSize({
          left,
          right,
          defaultSize: DEFAULT_ASIDE_WIDTH_1200,
          leftSize: sizes?.left_1200 || DEFAULT_ASIDE_WIDTH_1200,
          rightSize: sizes?.right_1200 || DEFAULT_ASIDE_WIDTH_1200,
        })}px)`};
    }
  }

  @media screen and (max-width: 767px) {
    > div > .aside {
      display: none;
    }

    > .main {
      max-width: 100%;
    }
  }
`
