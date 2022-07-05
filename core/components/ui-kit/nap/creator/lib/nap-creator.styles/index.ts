import { breakPoints } from '@/constants/style-variables.constant'
import { Modal } from 'antd'
import styled, { keyframes } from 'styled-components'
import * as Lib from '..'
import { BASE_BOARD_HEIGHT } from '../nap-creator.constants'
import * as textEffects from './text-effects'

const TRANSITION = 'all 150ms ease-out'

export const NapCreatorContainer = styled.div`
  display: block;
  height: auto;
  padding: 5px;

  > .board {
    width: 100%;
    height: ${BASE_BOARD_HEIGHT}px;
    max-height: calc(100vh - 161px);
    position: relative;
    background-color: var(--layer-2);
    border: 1px solid var(--layer-2-border);
    border-radius: 8px;
    flex: 1;
    overflow: auto;

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
  height: auto;
  margin: 0 0 7px 0;
  position: relative;
  overflow: hidden;
  min-height: 40px;

  > div {
    transition: ${TRANSITION};
    position: absolute;
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 5px;

    &.toolsContainer {
      border: 1px solid var(--layer-2-border);
      background: var(--layer-2);
      border-radius: 5px;
      bottom: -100%;

      &.true {
        bottom: 0;
      }

      > .tools {
        flex: 1;
      }

      > .backButton {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40%;
        cursor: pointer;

        &:hover {
          background-color: var(--layer-2-hover);
        }
      }
    }

    &.withTitle {
      top: -100%;

      &.true {
        top: 0;
      }

      > h1 {
        color: var(--layer-2-text-3);
        font-size: var(--f-4);
        font-family: var(--ff-3);
        flex: 1;
        margin: 0;
      }
    }

    > .nextBtn {
      display: flex;
      align-items: center;
      font-family: var(--ff-3);

      > svg {
        margin: 0 -5px 0 0;
      }
    }
  }
`

export const ItemsContainer = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin: 0 0 0 10px;
  transition: ${TRANSITION};

  &.showLess {
    > ul {
      > li {
        width: 30px;

        &:last-child {
          > span {
            > svg {
              transform: rotate(180deg);
            }
          }
        }

        > p {
          margin: 0 0 0 0;
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }

  &.showMore {
    /* background-color: var(--layer-1); */
    border-radius: 15px;
    padding: 15px 10px;

    > ul {
      > li {
        padding: 10px 15px;
      }
    }
  }

  > ul {
    padding: 0;
    margin: 0;
    list-style: none;
    user-select: none;

    > li {
      display: flex;
      height: auto;
      cursor: pointer;
      overflow: hidden;
      transition: ${TRANSITION};
      width: 100%;
      margin: 0 0;
      padding: 5px;
      border-radius: 100px;

      &.active {
        background-color: var(--c-bg-trans-1);

        > span {
          opacity: 1;
        }
      }

      > p {
        color: var(--layer-2-text-3);
        margin: 0 0 0 15px;
        flex: 1;
        height: 100%;
        transition: ${TRANSITION};
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.3;

        > svg {
          width: 20px;
          height: 20px;
          transition: ${TRANSITION};
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
  transition: ${TRANSITION};
  left: -60px;
  width: 300px;
  background: var(--layer-1);
  border-radius: 0 100% 100% 0;
  filter: blur(60px);
  z-index: 1;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: none;
`

export const GUIDE_LINES_COLOR = 'var(--layer-2-dash)'

export const GuideLines = styled.div`
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
  z-index: 1;
  pointer-events: none;
  opacity: 0.4;

  span {
    display: block;
  }

  > .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 1;

    > .top {
      display: flex;
      padding: 0 10px 0 0;

      > .profile {
        width: 40px;
        height: 40px;
        background-color: ${GUIDE_LINES_COLOR};
        border-radius: 50%;
      }

      > .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0 0 10px;

        > .username {
          width: 100px;
          background-color: ${GUIDE_LINES_COLOR};
          height: 10px;
          border-radius: 100px;
        }

        > .job {
          width: 130px;
          background-color: ${GUIDE_LINES_COLOR};
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
        color: ${GUIDE_LINES_COLOR};
        margin: 0 4px;
      }
    }

    > .gap {
      flex: 1;
    }

    > .bottom {
      > .input {
        width: 50%;
        border: 3px solid ${GUIDE_LINES_COLOR};
        border-radius: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: ${GUIDE_LINES_COLOR};
        user-select: none;
      }
    }
  }

  > .right {
    width: 5px;
    z-index: 1;

    > .timer {
      width: 100%;
      height: 100%;
      background-color: ${GUIDE_LINES_COLOR};
      border-radius: 20px;
    }
  }
`

export const Tools = styled.div`
  width: 100%;
  height: auto;
`

const toolAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Tool = styled.div<Pick<Lib.T.ToolProps, 'index'>>`
  display: inline-block;
  animation-name: ${toolAnimation};
  animation-timing-function: linear;
  animation-duration: 150ms;
  opacity: 0;
  animation-delay: ${({ index }) => index * 50}ms;
  animation-fill-mode: forwards;

  &.disabled {
    &,
    & * {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  > div {
    > button {
      height: auto;
      padding: 3px 10px;
      display: flex;
      align-items: center;
      margin: 0 3px;
      background-color: transparent;
      border-color: var(--layer-2-dash);
      color: var(--layer-2-text-2);

      &:hover,
      &:focus,
      &:active {
        color: var(--layer-2-text-2);
        background-color: var(--layer-1);
        border-color: var(--layer-2-dash);
      }

      > span {
        font-size: var(--f-2);
        margin: 0 0 0 5px;

        @media screen and (max-width: ${breakPoints.sm}) {
          display: none;
        }
      }
    }
  }
`

const scaleOut = keyframes`
  from {
    /* transform: translateY(15px); */
    opacity: 0;
  }
  to {
    /* transform: none; */
    opacity: 1;
  }
`

export const MainBoard = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  margin: auto;
  overflow: hidden;
  width: 100%;

  > .frame {
    position: absolute;
    cursor: default;
    animation: ${scaleOut} 150ms ease-in;
    padding: 10px;
    user-select: none;
    border: 2px dashed transparent;
    transition: ${TRANSITION.replace('all', 'border')};
    border-radius: 10px;
    max-width: 90%;
    transform: scale(1) rotate(0deg);
    outline: none;

    * {
      user-select: none;
    }

    &:focus {
      border-color: var(--layer-2-dash);

      > .buttons {
        opacity: 1;
        visibility: visible;
      }
    }

    > .buttons {
      position: absolute;
      top: -15px;
      display: flex;
      opacity: 0;
      visibility: hidden;
      transition: ${TRANSITION};
      height: auto;
      left: 0;

      > span {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 40%;
        background: var(--layer-3);
        margin: 0 2px;
        cursor: pointer;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    &.text,
    &.link {
      p {
        margin: 0;
        transition: ${TRANSITION};
        font-size: 100%;
        word-break: break-all;
        color: var(--layer-2-text-3);
      }

      ${Object.values(textEffects).map(item => item)}
    }

    &.link {
      p {
        text-decoration: underline;
      }
    }
  }
`

export const Mentions = styled.div`
  width: 100%;
  padding: 10px;
`
export const GIFs = styled.div`
  width: 100%;
  padding: 10px;

  .giphy-gif {
    cursor: pointer;
    transition: filter 150ms linear;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .notFound {
    color: var(--layer-2-text-2);
    text-align: center;
    margin: 15px 0 0 0;
    font-family: var(--ff-2);
    font-size: 16pt;
  }
`

export const Mention = styled.div`
  height: auto;
  display: inline-block;
  margin: 3px 0;
  width: calc(100% / 6);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 150ms linear;
    border: 1px solid transparent;

    &:hover {
      background: var(--layer-2);
      border-color: var(--layer-2-border);
    }

    > div {
    }

    > p {
      margin: 0;
      font-size: var(--f-2);
      color: var(--layer-2-text-2);
    }
  }

  @media screen and (max-width: ${breakPoints.md}) {
    width: calc(100% / 5);
  }

  @media screen and (max-width: ${breakPoints.sm}) {
    width: calc(100% / 4);
  }

  @media screen and (max-width: 400px) {
    width: calc(100% / 3);
  }

  @media screen and (max-width: ${breakPoints.xs}) {
    width: calc(100% / 2);
  }
`

export const PickImageInput = styled.input`
  width: 1px;
  height: 1px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -99;
`

export const EditLinkHrefPopup = styled(Modal)`
  padding: 0;

  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 10px;
    background-color: var(--layer-1);

    > .content {
      > label {
        max-width: 100%;
        text-overflow: ellipsis;
        color: var(--layer-2-text-2);
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding: 2px 4px 8px 4px;
      }

      > form {
        > .actions {
          padding: 20px 2px 0 2px;
        }
      }
    }
  }
`

export const DraftMessage = styled.div`
  display: block;
  width: 100%;

  > .ant-alert {
    margin: 0 0 10px 0;
  }
`
