import { css, keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: scaleX(0.6);
  }
  50%,
  100% {
    transform: scaleX(1);
  }
`

const shadow = 'var(--layer-2-text-3)'

export const bingo = css`
  &.bingo {
    p {
      margin: 0;
      text-shadow: 0 0.1em 20px ${shadow}, 0.05em -0.03em 0 ${shadow}, 0.05em 0.005em 0 ${shadow}, 0em 0.08em 0 ${shadow}, 0.05em 0.08em 0 ${shadow}, 0px -0.03em 0 ${shadow},
        -0.03em -0.03em 0 ${shadow}, -0.03em 0.08em 0 ${shadow}, -0.03em 0 0 ${shadow};
      transform: scaleX(0.6);
      animation: ${animation} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
      color: var(--layer-2);
      font-family: var(--ff-3);
    }
  }
`
