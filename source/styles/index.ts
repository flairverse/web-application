import { createGlobalStyle } from 'styled-components'
import { Theme } from '@/helpers/theme'

export const GlobalStyles = createGlobalStyle`
  ${Theme.use()}

  body {
    background-color: var(--layer-1);
  }

  .ReactQueryDevtools > button, .devtool {
    opacity: 0.5;
    transition: all 150ms linear;

    &:hover {
      opacity: 1;
    }
  }

  /**
  *
  * Ant design customization
  **/
  .ant-input {
    background-color: var(--layer-1);
    border: 1px solid var(--layer-1-border);
    color: var(--layer-2-text-1);

    &::placeholder {
      color: var(--layer-2-placeholder);
    }
  }

  .ant-btn-link {
    color: var(--layer-2-text-1);
  }

  .ant-input-affix-wrapper {
    background-color: var(--layer-1);
    border: 1px solid var(--layer-1-border);

    path {
      fill: var(--layer-2-text-1);
    }
  }
  /**
  * End -- Ant design customization
  **/
`
