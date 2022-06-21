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
    }

    > h3 {
      margin: 5px 0 0 0;
      color: var(--layer-2-text-2);
      font-size: var(--f-4);
      padding: 0 4px;
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
  }
`
