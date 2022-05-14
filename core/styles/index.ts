import { createGlobalStyle } from 'styled-components'
import { Theme } from '@/helpers/theme'

export const GlobalStyles = createGlobalStyle`
  ${Theme.use()}

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--layer-1);
    font-family: var(--ff-1);
  }

  .ReactQueryDevtools > button, .devtool {
    opacity: 0.5;
    transition: all 150ms linear;

    &:hover {
      opacity: 1;
    }
  }

  @keyframes nap {
    from { transform: rotate(0) }
    to { transform: rotate(360deg) }
  }

  [contenteditable="true"] {
    outline: 1px solid var(--layer-2-dash);
    padding: 4px 10px;
    border-radius: 4px;
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

  .ant-tabs-tab-btn {
    color: var(--layer-2-text-2);
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--c-accent);
    user-select: none;
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 1px solid var(--layer-2-border);
  }

  .ant-tabs-ink-bar {
    background: var(--c-accent);
    height: 3px !important;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0;
  }

  .ant-tabs-tab {
    padding: 10px;
  }

  .ant-select-item {
    color: var(--layer-2-text-2);
  }

  .ant-select-dropdown {
    background-color: var(--layer-2);
  }

  .ant-select-arrow {
    color: var(--layer-2-text-3);
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: var(--layer-1);
    border: none;

    .ant-select-selection-item {
      color: var(--layer-2-text-3);
    }

    input {
      color: var(--layer-2-text-3);

      &::placeholder {
        color: var(--layer-2-placeholder);
      }
    }
  }
  
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: var(--layer-2-text-3);
    background-color: var(--layer-2-dash);
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: var(--layer-2-hover);
  }

  .ant-btn {
    &.ant-btn-default {
      background-color: var(--layer-2);
      color: var(--layer-2-text-2);
      border: none;

      &:hover {
        background-color: var(--layer-2-hover);
      }
    }
  }
  /**
  * End -- Ant design customization
  **/
`
