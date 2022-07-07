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
      background-image: linear-gradient(
        68.7deg,
        var(--c-blog) 13.2%,
        var(--c-podcast) 29.8%,
        var(--c-article) 48.9%,
        var(--c-job) 68.2%,
        var(--c-accent) 86.4%
      );
      font-family: var(--ff-3);

      &.link::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-image: linear-gradient(
          68.7deg,
          var(--c-blog) 13.2%,
          var(--c-podcast) 29.8%,
          var(--c-article) 48.9%,
          var(--c-job) 68.2%,
          var(--c-accent) 86.4%
        );
      }
    }
  }
`
