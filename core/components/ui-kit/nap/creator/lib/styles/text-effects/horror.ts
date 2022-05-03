import { css, keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
    filter: blur(3px);
    transform: translateX(16%);
    transform: translateY(5%);
  }
  5% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
    filter: blur(3px);
    transform: translateX(15%);
    transform: translateY(4%);
  }
  10% {
    filter: blur(3px);
    transform: translateX(14%);
    transform: translateY(7%);
  }
  15% {
    filter: blur(3px);
    transform: translateX(15%);
    transform: translateY(4%);
  }
  16% {
    text-shadow: 0 0 1px #212121;
    transform: translateX(15%);
  }
  17% {
    filter: blur(3px);
    transform: translateX(15%);
  }
  20% {
    filter: blur(3px);
    transform: translateX(14%);
  }
  25% {
    filter: blur(3px);
    transform: translateX(14%);
  }
  30% {
    filter: blur(3px);
    transform: translateX(15%);
  }
  4% {
    filter: blur(1px);
    transform: translateX(15%);
  }
  5% {
    text-shadow: 0 0 1px #212121;
    transform: translateX(15%);
  }
  37% {
    filter: blur(1px);
    transform: translateX(15%);
  }
  40% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  45% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  15% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  55% {
    filter: blur(3px);
    transform: translateX(15%);
  }
  56% {
    text-shadow: 0 0 1px #212121;
    transform: translateX(15%);
  }
  57% {
    filter: blur(3px);
    transform: translateX(52%);
  }
  60% {
    filter: blur(3px);
    transform: translateX(15%);
  }
  65% {
    filter: blur(3px);
    transform: translateX(15%);
  }
  70% {
    filter: blur(3px);
    transform: translateX(14%);
  }
  75% {
    filter: blur(3px);
    transform: translateX(14%);
  }
  76% {
    text-shadow: 0 0 1px #212121;
    transform: translateX(15%);
  }
  77% {
    filter: blur(3px);
    transform: translateX(14%);
  }
  80% {
    filter: blur(1px);
    transform: translateX(14%);
  }
  85% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  86% {
    text-shadow: 0 0 1px #212121;
    transform: translateX(15%);
  }
  87% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  90% {
    filter: blur(1px);
    transform: translateX(16%);
  }
  95% {
    filter: blur(3px);
    transform: translateX(16%);
  }
  100% {
    filter: blur(3px);
    transform: translateX(15%);
  }
`

export const horror = css`
  &.horror {
    p {
      filter: blur(1px);
      letter-spacing: 2px;
      animation: ${animation} 5s infinite;
      transform: translateX(15%);
      transform: translateY(4%);
    }
  }
`
