import styled from 'styled-components'
import * as Lib from '.'

export const CreateNewNapContainer = styled.div`
  display: block;
  height: auto;
  padding: 5px;

  > .board {
    width: 100%;
    padding-top: 56.25%;
    background-color: var(--layer-2);
    border: 2px solid var(--layer-2-border);
    border-radius: 8px;
    flex: 1;
    position: relative;

    &.true {
      transform: rotate(90deg);
    }

    > .initialContent {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
  }
`

export const ToolboxContainer = styled.div<Pick<Lib.T.ToolboxProps, 'active'>>`
  width: 100%;
  height: 40px;
  background: var(--layer-2);
  border: 1px solid var(--layer-2-border);
  border-radius: 8px;
  margin: 0 0 7px 0;
  display: flex;
`

export const ItemsContainer = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &.showLess {
    > ul {
      > li {
        margin: 0;

        &:first-child {
          margin-top: 0;
        }

        &:nth-child(n + 5):nth-child(-n + 9):not(.active) {
          height: 0;
          margin: 0;
          padding: 0;
        }

        &:last-child {
          margin: 0;

          > span {
            > svg {
              transform: rotate(180deg);
            }
          }
        }

        &:not(.active) {
          > p {
            display: none;
          }
        }
      }
    }
  }

  > ul {
    padding: 0 0 0 20px;
    margin: 0;
    list-style: none;
    user-select: none;

    > li {
      display: flex;
      height: auto;
      cursor: pointer;
      overflow: hidden;
      transition: all 150ms linear;
      margin: 0 0;
      padding: 10px 15px;
      border-radius: 100px;

      &.active {
        background-color: var(--c-bg-trans-1);
      }

      > p {
        color: var(--layer-2-text-3);
        margin: 0 0 0 15px;
        flex: 1;
        height: 100%;
      }

      > span {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          width: 100%;
          transition: all 300ms linear;
          height: 100%;
        }
      }
    }
  }
`

export const ItemsShadowing = styled.span<Lib.T.ItemsShadowingProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  transition: all 150ms linear;
  left: -60px;
  width: 300px;
  background: var(--layer-1);
  border-radius: 0 100% 100% 0;
  filter: blur(60px);
  z-index: 0;
  opacity: ${({ active }) => (active ? 0.4 : 0)};
`

export const GuidLines = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;

  span {
    display: block;
  }

  > .left {
    flex: 1;
    display: flex;
    flex-direction: column;

    > .top {
      display: flex;
      padding: 0 10px 0 0;

      > .profile {
        width: 40px;
        height: 40px;
        background-color: var(--layer-2-hover);
        border-radius: 50%;
      }

      > .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 10px;

        > .username {
          width: 100px;
          background-color: var(--layer-2-hover);
          height: 10px;
          border-radius: 100px;
        }

        > .job {
          width: 130px;
          background-color: var(--layer-2-hover);
          height: 5px;
          border-radius: 100px;
          margin: 5px 0 0 0;
        }
      }

      > .gap {
        flex: 1;
      }

      > .action {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--layer-2-hover);
        margin: 0 4px;
      }
    }

    > .gap {
      flex: 1;
    }

    > .bottom {
      > .input {
        width: 50%;
        border: 3px solid var(--layer-2-hover);
        border-radius: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: var(--layer-2-hover);
        user-select: none;
      }
    }
  }

  > .right {
    width: 5px;

    > .timer {
      width: 100%;
      height: 100%;
      background-color: var(--layer-2-hover);
      border-radius: 20px;
    }
  }
`
