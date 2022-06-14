import { css } from 'styled-components'

const shadow = 'var(--layer-2-border)'

export const floor = css`
  &.floor {
    p {
      color: var(--layer-2);
      font-weight: bold;
      font-family: Helvetica;
      text-shadow: 0 1px 0 ${shadow}, 0 2px 0 ${shadow}, 0 3px 0 ${shadow}, 0 4px 0 ${shadow}, 0 5px 0 ${shadow}, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }
  }
`
