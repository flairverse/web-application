import styled from 'styled-components'
import * as Lib from '.'

export const InformationContainer = styled.div<
  Pick<Lib.T.InformationProps, 'colorTheme' | 'icon' | 'loading'>
>`
  background: ${({ colorTheme }) =>
    colorTheme ? `var(--c-${colorTheme}-trans-2)` : 'var(--layer-1)'};
  color: ${({ colorTheme }) => (colorTheme ? `var(--c-${colorTheme})` : 'var(--layer-2-text-2)')};
  display: inline-flex;
  width: auto;
  align-items: center;
  padding: ${({ loading }) => (loading ? '0' : '0 6px')};
  border-radius: 6px;
  font-size: var(--f-2);
  margin: 0 2px;
  cursor: default;
  user-select: none;

  > svg {
    width: ${({ icon }) => (icon ? '18px' : '0px')};
    height: 18px;
    margin: 4px 1px 5px 1px;
  }

  > span {
    margin: 4px 1px 5px 1px;
  }

  > .ant-skeleton {
    > span {
      width: 45px;
      min-width: unset;
      height: 30px;
    }
  }
`
