import styled from 'styled-components'
import * as Lib from '.'

export const CardContainer = styled.article`
  width: 100%;
  height: auto;
  background-color: var(--layer-2);
  border-radius: 15px;
  padding: 5px;
  overflow: hidden;

  > data {
    width: 100%;
    height: 100%;

    > header {
      width: 100%;
      display: flex;

      > a {
        display: block;
        width: 100%;
        height: 100%;
      }

      > span {
        display: flex;
        align-items: center;

        > button {
          background-color: transparent;
          border: none;
          color: var(--layer-2-text-2);
          padding: 0;
          font-size: 20pt;
          margin: 0 0 0 5px;
        }
      }
    }

    > body {
      width: 100%;
      height: auto;
      background-color: transparent;

      > a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 10px 0 0 0;

        > img {
          width: 100%;
          border-radius: 15px;
        }

        > h2 {
          color: var(--layer-2-text-1);
          font-size: var(--f-4);
          padding: 0 8px;
          margin: 5px 0;
        }

        > div {
          padding: 0 8px;

          > time {
          }

          > summary {
            color: var(--layer-2-text-2);
            font-size: var(--f-2);
          }
        }
      }
    }
  }
`
