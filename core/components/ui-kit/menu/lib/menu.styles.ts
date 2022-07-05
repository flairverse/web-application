import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'
import * as Lib from '.'

export const MenuButton = styled.div`
  cursor: pointer;
  position: relative;

  > *:not(.menuContainer, .menuShadow) {
    &:focus {
      & + .menuShadow {
        opacity: 1;
        visibility: visible;

        & + .menuContainer {
          opacity: 1;
          visibility: visible;
          transform: none;
        }
      }
    }
  }
`

export const MenuContainer = styled.ul<Pick<Lib.T.MenuProps, 'position' | 'openMenuEffect' | 'minWidth' | 'compact'>>`
  top: ${({ position }) => (position ? position[0] : 'unset')};
  right: ${({ position }) => (position ? position[1] : 'unset')};
  bottom: ${({ position }) => (position ? position[2] : 'unset')};
  left: ${({ position }) => (position ? position[3] : 'unset')};
  position: absolute;
  background: var(--layer-2);
  z-index: 9999999999999;
  list-style: none;
  margin: 0px;
  border-radius: 12px;
  box-shadow: 0 0 0px 3px var(--layer-1);
  padding: ${({ compact }) => (compact ? '4px 5px' : '8px 10px')};
  display: flex;
  flex-direction: column;
  transition: all 100ms linear;
  transform: ${({ openMenuEffect }) => Lib.HE.makeOpenMenuEffect(openMenuEffect)};
  visibility: hidden;
  opacity: 0;
  min-width: ${({ minWidth }) => minWidth || 'unset'};

  > li {
    font-size: 11pt;
    flex: 1 1 0%;
    width: 100%;

    > a,
    > span {
      border-radius: 3px;
      white-space: nowrap;
      display: flex;
      color: var(--layer-2-text-3);
      padding: ${({ compact }) => (compact ? '4px 6px' : '8px 12px')};
      align-items: center;
      cursor: pointer;
      transition: all 100ms linear;
      text-align: left;

      &:hover {
        background-color: var(--layer-1);
      }

      > .icon {
        display: block;
        width: 19px;
        height: 20px;
        margin: 0 8px 2px 0;
        color: var(--layer-2-text-1);

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    > div.breaker {
      background-color: var(--layer-2-border);
      width: 100%;
      height: 1px;
      margin: 7px 0;
    }
  }

  @media screen and (max-width: ${breakPoints.xl}) {
    padding: ${({ compact }) => (compact ? '4px' : '5px')};

    > li {
      font-size: 10pt;

      > a,
      > span {
        padding: ${({ compact }) => (compact ? '3px 5px' : '6px 10px')};

        > .icon {
          width: 17px;
          height: 18px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoints.md}) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: unset;
    border-radius: 12px 12px 0 0;
    transform: translateY(15px);

    > li {
      > a,
      > span {
        padding: 8px 12px;
      }
    }
  }
`

export const MenuShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000069;
  z-index: 9999999999999;
  opacity: 0;
  visibility: hidden;
  transition: all 100ms linear;
`
