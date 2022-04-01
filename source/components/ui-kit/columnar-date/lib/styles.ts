import styled from 'styled-components'
import * as Lib from '.'

export const ColumnarDateContainer = styled.time<Pick<Lib.T.ColumnarDateProps, 'topic' | 'size'>>`
  background: ${({ topic }) => `var(--c-${topic}-trans-1)`};
  color: ${({ topic }) => `var(--c-${topic})`};
  display: flex;
  flex-direction: column;

  > span {
    &.month {
      font-size: ${({ size }) => Lib.HE.Sizing.font(size!).month};
    }

    &.year {
      font-size: ${({ size }) => Lib.HE.Sizing.font(size!).year};
    }

    &.day {
      font-size: ${({ size }) => Lib.HE.Sizing.font(size!).day};
    }
  }
`
