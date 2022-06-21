import { css, keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
`

export const shining = css`
  &.shining {
    p {
      background: linear-gradient(90deg, var(--layer-2), var(--layer-2-text-3), var(--layer-2));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-repeat: no-repeat;
      background-size: 80%;
      animation: ${animation} 2s linear infinite;
    }
  }
`
