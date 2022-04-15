import styled from 'styled-components'

export const Container = styled.div`
  > .container {
    > span {
    }

    > a {
      background-color: var(--layer-3);
      display: block;
    }

    > p {
      color: var(--layer-2-text-1);
      background-color: var(--layer-2);
      padding: 10px;
      border-radius: 10px;
      border: 1px solid var(--layer-2-border);
    }
  }

  .categories {
    margin-top: 5px;
  }
`

export const Topic = styled.div<{ backColor: string }>`
  margin-bottom: 5px;

  > div {
    background-color: var(--layer-2);
    border: 1px solid var(--layer-2-border);
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 10px;

    > span {
      background-color: ${({ backColor }) => backColor};
      border-radius: 8px;
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      padding: 7px;

      > svg {
        width: 100%;
      }
    }

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 0 8px;

      > p {
        color: var(--layer-2-text-1);
        margin: 0;
        font-size: var(--f-3);
        font-family: var(--ff-3);
      }

      > a {
        font-size: var(--f-2);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    > div {
      > span {
        width: 40px;
        height: 40px;
        padding: 5px;

        > svg {
        }
      }

      > div {
        > p {
          font-size: var(--f-2);
        }

        > a {
          font-size: var(--f-1);
        }
      }
    }
  }
`

export const TopThings = styled.div`
  > div {
    margin-bottom: 10px;
  }
`

export const NapsList = styled.div`
  background-color: var(--layer-2);
  border-radius: 10px;
  border: 1px solid var(--layer-2-border);
  padding: 10px 0 3px 0;
`

export const CardsContainer = styled.div`
  columns: auto 2;
  column-gap: 10px;
  width: 100%;

  > article {
    height: auto;
    display: inline-block;
    margin-bottom: 5px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0 50px 0;

  > button {
    font-size: var(--f-4);
    padding: 8px 15px;
    height: unset;
  }
`
