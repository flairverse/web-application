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
    cursor: text;

    &:empty::before {
      content: attr(data-ph);
      color: var(--layer-2-placeholder);
      font-style: italic;
    }
  }

  .noScrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
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

  .ant-picker-panel-container .ant-picker-panel-focused {
    background-color: var(--layer-1);
    color: var(--layer-2-text-1);
    border: none;

    * {
      color: inherit;
      border-color: var(--layer-1-border);
      transition: none;
    }
  }

  .ant-picker-time-panel {
    color: var(--layer-2-text-1);

    * {
      color: inherit !important;
      transition: none !important;
    }
  }

  .ant-picker-cell-disabled,
  .ant-picker-time-panel-cell-disabled {
    opacity: .2;
    pointer-events: none;

    &::before {
      background-color: transparent;
    }
  }

  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
    background-color: var(--c-accent);
    color: white !important;
  }

  .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner,
  .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner,
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover {
    background-color: var(--layer-2-hover);
  }

  .ant-picker-panel-container {
    border: none;
    border-radius: 0;
    background-color: var(--layer-1) !important;
    box-shadow: none;
  }

  .ant-picker-dropdown.noFooter {
    .ant-picker-footer {
      display: none;
    }
  }

  .ant-picker-time-panel-column {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-picker-header > button:hover,
  .ant-picker-header-view button:hover {
    color: var(--layer-2-text-3);
  }
  /**
  * End -- Ant design customization
  **/
`
