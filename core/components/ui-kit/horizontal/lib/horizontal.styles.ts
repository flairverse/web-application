import styled from 'styled-components'

import * as Lib from '.'

export const items = styled.div<Pick<Lib.T.HorizontalProps, 'central'>>`
  width: 100%;
  transition: all 0.2s;
  transform: scale(0.98);
  user-select: none;
  cursor: default;
  overflow: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: auto;

  &.active {
    cursor: grabbing;
    transform: scale(1);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  padding-left: ${({ central }) => (central ? '50%' : 0)};
  padding-right: ${({ central }) => (central ? '50%' : 0)};
`

export const item = styled.div<Pick<Lib.T.HorizontalItemProps, 'spaceX' | 'spaceY'>>`
  display: inline-block;
  margin: ${({ spaceX, spaceY }) => `${spaceY} ${spaceX}`};
  cursor: pointer;
`
