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

export const NapProfileContainer = styled.div`
  @media screen and (max-width: 1199px) {
    > div {
      margin: 0 4px;

      > span {
        > .picture {
          width: 50px;
          height: 50px;
          min-width: 50px;
        }

        > .detail {
          font-size: var(--f-1);
        }
      }
    }
  }
`

export const Topic = styled.a<{ backColor: string }>`
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

      > span {
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
      }

      > div {
        > p {
          font-size: var(--f-2);
        }

        > span {
          font-size: var(--f-1);
        }
      }
    }
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 5px 7px 5px;

      > span {
        width: 50px;
        height: 50px;
      }

      > div {
        padding: 0;
        width: 100%;
        text-align: center;

        > p {
          margin: 5px 0 -3px 0;
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 5px 7px 5px;

      > span {
        width: 30px;
        height: 30px;
      }

      > div {
        padding: 0;
        width: 100%;
        text-align: center;

        > p {
          font-size: var(--f-1);
          margin: 5px 0 -3px 0;
        }

        > span {
          display: none;
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

  @media screen and (max-width: 767px) {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
    margin: 5px 0 10px 0;
  }
`

export const Topics = styled.div`
  display: none;

  &.top {
    display: block;
  }

  @media screen and (max-width: 767px) {
    &.top {
      display: none;
    }

    &.bottom {
      display: block;
    }
  }
`

export const NapListAndTopics = styled.div`
  display: flex;
  flex-direction: column-reverse;
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

  @media screen and (max-width: 991px) {
    columns: auto 1;
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

  @media screen and (max-width: 1199px) {
    > button {
      font-size: var(--f-3);
    }
  }

  @media screen and (max-width: 991px) {
    > button {
      font-size: var(--f-2);
    }
  }

  @media screen and (max-width: 767px) {
    > button {
      font-size: var(--f-1);
    }
  }
`
