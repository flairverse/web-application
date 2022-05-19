import { css, keyframes } from 'styled-components'

const animatedGradient = keyframes`
  0%,
  100% {
    background-position: 200% 0%;
  }
  50% {
    background-position: 0% 200%;
  }
`

export const movingColor = css`
  &.animated-gradient {
    p {
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 400%;
      animation: ${animatedGradient} 5s ease infinite;
      background-image: linear-gradient(68.7deg, rgba(29, 173, 235, 1) 13.2%, rgba(137, 149, 250, 1) 29.8%, rgba(229, 109, 212, 1) 48.9%, rgba(255, 68, 128, 1) 68.2%, rgba(255, 94, 0, 1) 86.4%);
      font-family: var(--ff-3);
    }
  }
`
