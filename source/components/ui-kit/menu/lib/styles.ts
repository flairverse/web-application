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

export const MenuContainer = styled.ul<Pick<Lib.T.MenuProps, 'position' | 'openMenuEffect'>>`
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
  padding: 6px 3px;
  display: flex;
  flex-direction: column;
  transition: all 150ms linear;
  transform: ${({ openMenuEffect }) => Lib.HE.makeOpenMenuEffect(openMenuEffect)};
  visibility: hidden;
  opacity: 0;

  > li {
    color: var(--layer-2-text-3);
    font-size: 11pt;
    padding: 5px 7px;
    flex: 1 1 0%;
    width: 100%;
    text-align: left;
    border-radius: 3px;
    cursor: pointer;
    transition: all 150ms linear;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &:hover {
      background-color: var(--layer-1);
    }

    > .icon {
      display: block;
      width: 19px;
      height: 20px;
      margin: 0 4px 2px 0;
      color: var(--layer-2-text-1);

      > svg {
        width: 100%;
        height: 100%;
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
  transition: all 150ms linear;
`
