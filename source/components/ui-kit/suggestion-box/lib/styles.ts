import styled from 'styled-components'
import * as Lib from '.'

export const SuggestionsBoxContainer = styled.div<Pick<Lib.T.SuggestionBoxProps, 'topic'>>`
  width: 100%;
  background-color: var(--layer-2);
  border-radius: 5px;
  border: 1px solid var(--layer-2-border);

  > h5.header {
    color: var(--layer-2-text-1);
    font-size: var(--f-3);
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
`
