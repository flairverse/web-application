import styled from 'styled-components'
import * as Lib from '.'

export const NapProfileContainer = styled.div<Pick<Lib.T.NapProfileProps, 'mode' | 'hasNap' | 'loading' | 'seen'>>`
  width: auto;
  height: auto;
  margin: 0 10px;
  max-width: ${({ mode }) => (mode === 'horizontal' ? '100%' : '80px')};
  min-width: 65px;
  text-align: center;
  display: flex;
  flex-direction: ${({ mode }) => (mode === 'horizontal' ? 'row' : 'column')};
  align-items: center;
  filter: ${({ seen }) => `grayscale(${seen ? 1 : 0})`};

  > div {
    width: 65px;
    min-width: 65px;
    height: 65px;
    position: relative;
    border-radius: ${({ loading }) => (loading ? 50 : 40)}%;
    transition: all 150ms linear;

    > div,
    > img {
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: inherit;
      position: absolute;
      margin: auto;
    }

    > div {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      animation: ${({ loading }) => (loading ? 'nap 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite' : 'none')};
      background: ${({ hasNap }) =>
        hasNap
          ? `-webkit-linear-gradient(
              45deg,
              var(--c-blog),
              var(--c-article),
              var(--c-job),
              var(--c-podcast))
          `
          : 'transparent'};
    }

    > img {
      width: ${({ hasNap }) => (hasNap ? 'calc(100% - 4px)' : '100%')};
      height: ${({ hasNap }) => (hasNap ? 'calc(100% - 4px)' : '100%')};
      -webkit-user-drag: none;
    }
  }

  > p {
    color: var(--layer-2-text-2);
    margin: ${({ mode }) => (mode === 'horizontal' ? '0 0 0 5px' : '5px 0 0 0')};
    font-size: var(--f-2);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    overflow: hidden;

    > span {
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &:nth-child(2) {
        font-size: var(--f-1);
      }
    }
  }
`
