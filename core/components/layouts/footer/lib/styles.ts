import styled from 'styled-components'

export const FooterContainer = styled.footer`
  > div {
    float: left;
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    display: flex;
    border-top: 1px solid var(--layer-2-border);
    font-size: var(--f-4);
    font-family: var(--ff-2);

    > p {
      margin: 0px;
      display: flex;
      align-items: center;
      color: var(--layer-2-text-2);

      > a {
        color: inherit;
        margin: 0 0 0 5px;

        &:hover {
          border-bottom: 1px solid var(--layer-2-text-2);
        }
      }
    }

    > div {
      color: var(--layer-2-text-2);
      flex: 1 1 0%;
      display: flex;
      justify-content: flex-end;

      > a {
        color: inherit;
        padding: 4px;
        margin: 0px 3px;
      }
    }
  }
`
