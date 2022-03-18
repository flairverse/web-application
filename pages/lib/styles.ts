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
`

export const Topic = styled.div<{ backColor: string }>`
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
        font-size: var(--f-2);
      }

      > a {
        font-size: var(--f-1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
