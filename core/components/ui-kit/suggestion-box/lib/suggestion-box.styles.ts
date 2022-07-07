import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'
import * as Lib from '.'

export const SuggestionsBoxContainer = styled.div<Pick<Lib.T.SuggestionBoxProps, 'topic'>>`
  width: 100%;
  background-color: var(--layer-2);
  border-radius: 5px;
  border: 1px solid var(--layer-2-border);
  overflow: hidden;

  > .suggestionContent {
    background-color: ${({ topic }) => `var(--c-${topic})`};
    background: ${({ topic }) => `linear-gradient(180deg, var(--c-${topic}), var(--c-${topic}-dark-2))`};
    color: white;
    font-family: var(--ff-2);
    text-align: center;
    padding: 5px 5px 10px 5px;
    opacity: 0.85;

    > p {
      text-shadow: rgb(0 0 0 / 66%) 0 1px 2px;
      font-size: var(--f-4);
      line-height: 1.2;
      margin: 0 0 10px 0;
    }

    > a {
      padding: 0 9px 0 9px !important;
      font-family: var(--ff-2);
      color: ${({ topic }) => `var(--c-${topic}-dark-2)`};
      border-color: white;
      font-size: var(--f-3);

      &:hover {
        border-color: white;
        color: ${({ topic }) => `var(--c-${topic})`};
      }
    }
  }

  > h5.header {
    color: var(--layer-2-text-1);
    font-size: var(--f-3);
    font-family: var(--ff-3);
    padding: 10px 10px;
    border-bottom: 1px solid var(--layer-2-border);

    > span {
      background-color: ${({ topic }) => `var(--c-${topic})`};
      color: white;
      border-radius: 5px;
      padding: 1px 5px;
      font-size: var(--f-3);
      margin: 0 5px 0 0;
    }
  }

  > .suggestions {
    > .flair {
      margin: 10px;
    }
  }

  @media screen and (max-width: ${breakPoints.xl}) {
    > .suggestionContent {
      > p {
        font-size: var(--f-2);
      }

      > a {
        font-size: var(--f-1);
      }
    }

    > h5.header {
      padding: 5px 7px;
      font-size: var(--f-2);

      > span {
        font-size: var(--f-1);
      }
    }

    > .suggestions {
      > .flair {
        > a {
          > .picture {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          > .detail {
            > span {
              &:nth-child(1) {
                font-size: var(--f-1);
              }
              &:nth-child(2) {
                font-size: var(--f-0);
              }
            }
          }
        }
      }
    }
  }
`
export const SuggestionContainer = styled.a<Pick<Lib.T.SuggestionItemExtraProps & Lib.T.SuggestionItem, 'topic' | 'button'>>`
  display: flex;
  align-items: flex-start;
  color: var(--layer-2-text-1);
  padding: 0 10px;
  margin: 0 0 10px 0;

  &:hover {
    color: var(--layer-2-text-3);
  }

  > span {
    &.index {
      border: ${({ topic }) => `1px solid var(--c-${topic})`};
      color: ${({ topic }) => `var(--c-${topic})`};
      margin: 5px 5px 0 0;
      padding: 1px 5px;
      border-radius: 5px;
      font-size: var(--f-1);
      opacity: 0.5;
    }

    &.title {
      flex: 1;
      font-size: var(--f-2);

      ${({ button }) =>
        button &&
        `
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `}
    }
  }

  > button {
    padding: 1px 8px;
    font-size: var(--f-1);
    height: auto;
  }

  @media screen and (max-width: ${breakPoints.xl}) {
    padding: 0 5px;

    > span {
      &.index {
        font-size: var(--f-0);
      }

      &.title {
        font-size: var(--f-1);
      }
    }

    > button {
      font-size: var(--f-0);
    }
  }
`
