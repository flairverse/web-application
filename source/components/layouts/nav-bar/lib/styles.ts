import styled from 'styled-components'

const navbarGap = 10

export const NavBarContainer = styled.div`
  width: 100%;
  position: fixed;
  background-color: var(--layer-2);
  border-radius: 20px;
  width: calc(100% - ${navbarGap * 2}px);
  margin: 0 auto;
  left: 0;
  right: 0;
  top: ${navbarGap}px;
  border: 1px solid var(--layer-2-border);
  display: flex;
  align-items: center;
  padding: 5px 10px;
  height: 45px;
  transition: all 150ms linear;
  z-index: 2;

  > .logo {
    margin: 0 10px 0 0;
    height: 100%;

    > svg {
      height: 100%;
    }
  }

  > .input {
    transition: all 150ms ease-in;
    width: 250px;
    max-width: 100%;
    position: relative;

    &.focused {
      width: 350px;

      > .suggestions {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }

      .slashIcon {
        display: none;
      }
    }

    .slashIcon {
      opacity: 0.7;
    }

    > .suggestions {
      position: absolute;
      transition: all 150ms ease-in;
      width: calc(100% - 2px);
      background-color: var(--layer-1);
      height: auto;
      border-radius: 0 0 5px 5px;
      top: calc(100% - 5px);
      margin: 0 auto;
      left: 0;
      right: 0;
      border: 1px solid var(--layer-2-border);
      text-align: center;
      overflow: hidden;
      transform: translateY(-10px);
      visibility: hidden;
      opacity: 0;

      > .loading {
        margin: 10px auto;
      }

      > ul {
        padding: 0;
        margin: 0;
        min-width: 350px;
      }
    }
  }

  .gap {
    flex: 1;
    height: 100%;
  }

  > .buttons {
  }

  > .profile {
    width: 35px;
    height: 35px;
    margin: 0 0 0 10px;

    > button {
      padding: 0;
      border: none;
      overflow: hidden;
      border-radius: 40%;

      > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  > .adder {
    height: 100%;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    display: none;
  }

  @media screen and (max-width: 768px) {
    top: 0;
    border-radius: 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--layer-2-border);

    > .buttons,
    > .profile,
    > .input {
      display: none;
    }

    > .adder {
      display: flex;
    }
  }
`
export const SearchSuggest = styled.li`
  list-style: none;
  text-align: left;
  display: flex;
  color: var(--layer-2-text-1);
  align-items: center;
  font-size: var(--f-2);

  &:hover {
    background-color: var(--c-accent);
    color: white;

    > a {
      > svg {
        opacity: 1;
      }
    }

    > span {
      color: var(--layer-2-text-1);
    }
  }

  > a {
    flex: 1;
    color: inherit;
    display: flex;
    align-items: flex-start;
    padding: 4px 10px;

    > svg {
      width: 15px;
      margin: 2px 0 0 0;
      opacity: 0.5;
    }

    > span {
      padding: 0 0 0 5px;
      width: 100%;
      flex: 1;
      display: block;
    }
  }

  > span {
    color: var(--layer-1);
    margin: 3px 0 0 0;
    background-color: var(--layer-1);
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 10px 0 0;
  }
`
