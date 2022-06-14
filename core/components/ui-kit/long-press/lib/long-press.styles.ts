import styled from 'styled-components'
import * as Lib from '.'

export const LongPressContainer = styled.div<Pick<Lib.T.LongPressProps, 'disabled'>>`
  user-select: none;
  /* pointer-events: ${({ disabled }) => (disabled ? 'none' : 'unset')}; */
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
