import styled from 'styled-components'
import * as Lib from '.'

export const NapProfileContainer = styled.div<
  Pick<Lib.T.NapProfileProps, 'mode' | 'hasNap' | 'opening' | 'seen' | 'size' | 'loading'>
>`
  width: auto;
  height: auto;
  margin: 0 10px;
  max-width: ${({ mode }) => (mode === 'horizontal' ? '100%' : '80px')};
  min-width: ${({ size }) => Lib.HE.Scale.image(size!)};
  filter: ${({ seen }) => `grayscale(${seen ? 1 : 0})`};

  > span,
  > a {
    display: flex;
    flex-direction: ${({ mode }) => (mode === 'horizontal' ? 'row' : 'column')};
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;

    > div {
      width: ${({ size }) => Lib.HE.Scale.image(size!)};
      min-width: ${({ size }) => Lib.HE.Scale.image(size!)};
      height: ${({ size }) => Lib.HE.Scale.image(size!)};
      position: relative;
      border-radius: ${({ opening }) => (opening ? 50 : 40)}%;
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
        animation: ${({ opening }) =>
          opening ? 'nap 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite' : 'none'};
        background: ${({ hasNap, loading }) =>
          !loading && hasNap
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
        width: ${({ hasNap }) => (hasNap ? 'calc(100% - 6px)' : '100%')};
        height: ${({ hasNap }) => (hasNap ? 'calc(100% - 6px)' : '100%')};
        /* border: 5px solid var(--layer-2); */
        -webkit-user-drag: none;
      }

      > .ant-skeleton {
        > span {
          width: 100%;
          height: 100%;
        }
      }
    }

    > p {
      color: var(--layer-2-text-2);
      margin: ${({ mode }) => (mode === 'horizontal' ? '0 0 0 5px' : '5px 0 0 0')};
      font-size: ${({ size }) => Lib.HE.Scale.username(size!)};
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

        &:nth-child(1) {
          color: var(--layer-2-text-3);
        }

        &:nth-child(2) {
          font-size: ${({ size }) => Lib.HE.Scale.job(size!)};
        }
      }

      > .ant-skeleton {
        width: 100%;
        text-align: left;
        flex: 1;
        display: flex;

        &.username {
          align-items: flex-end;

          > span {
            height: 12px;
            margin: 0 0 5px 0;
            width: 80px;
            min-width: unset;
            max-width: 95%;
          }
        }

        &.job {
          > span {
            height: 6px;
            margin: 0;
            width: 130px;
            min-width: unset;
            max-width: 95%;
          }
        }
      }
    }
  }
`
