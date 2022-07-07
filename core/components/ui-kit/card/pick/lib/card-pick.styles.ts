import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'

export const CardPickContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 15px 10px;
  border-bottom: 2px solid var(--layer-2-border);

  &.selected,
  &:hover {
    background-color: var(--layer-2-hover);
    cursor: pointer;
  }

  &:last-child {
    border: none;
  }

  > .detail {
    width: 100%;
    height: auto;

    > .author {
      display: flex;

      > .napProfile {
        margin: 0;
      }

      > ul {
        flex: 1;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        color: var(--layer-2-text-3);

        > li {
          margin: 0 5px;
          display: flex;
          align-items: center;

          > span {
          }
        }
      }

      @media screen and (max-width: ${breakPoints.md}) {
        > .napProfile {
          margin: 0;

          > span > p,
          > a > p {
            font-size: var(--f-0);
          }
        }

        > ul {
          font-size: var(--f-0);
        }
      }
    }

    > h3 {
      margin: 5px 0 0 0;
      color: var(--layer-2-text-2);
      font-size: var(--f-4);
      padding: 0 4px;

      @media screen and (max-width: ${breakPoints.md}) {
        font-size: var(--f-1);
      }
    }
  }

  > .cover {
    width: 200px;
    height: 100px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    @media screen and (max-width: ${breakPoints.md}) {
      width: 100px;
      height: 50px;
    }

    @media screen and (max-width: ${breakPoints.xs}) {
      display: none;
    }
  }
`
