import { css, keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    text-shadow:
      4px -4px 0 hsla(0, 100%, 50%, 1), 
      3px -3px 0 hsla(0, 100%, 50%, 1), 
      2px -2px 0 hsla(0, 100%, 50%, 1), 
      1px -1px 0 hsla(0, 100%, 50%, 1),
      -4px 4px 0 hsla(180, 100%, 50%, 1), 
      -3px 3px 0 hsla(180, 100%, 50%, 1), 
      -2px 2px 0 hsla(180, 100%, 50%, 1), 
      -1px 1px 0 hsla(180, 100%, 50%, 1)
    ;
  }
  25% {    
    text-shadow:      
      -4px -4px 0 hsla(180, 100%, 50%, 1), 
      -3px -3px 0 hsla(180, 100%, 50%, 1), 
      -2px -2px 0 hsla(180, 100%, 50%, 1), 
      -1px -1px 0 hsla(180, 100%, 50%, 1),
      4px 4px 0 hsla(0, 100%, 50%, 1), 
      3px 3px 0 hsla(0, 100%, 50%, 1), 
      2px 2px 0 hsla(0, 100%, 50%, 1), 
      1px 1px 0 hsla(0, 100%, 50%, 1)      
    ;
  }
  50% {
    text-shadow:
      -4px 4px 0 hsla(0, 100%, 50%, 1), 
      -3px 3px 0 hsla(0, 100%, 50%, 1), 
      -2px 2px 0 hsla(0, 100%, 50%, 1), 
      -1px 1px 0 hsla(0, 100%, 50%, 1),
      4px -4px 0 hsla(180, 100%, 50%, 1), 
      3px -3px 0 hsla(180, 100%, 50%, 1), 
      2px -2px 0 hsla(180, 100%, 50%, 1), 
      1px -1px 0 hsla(180, 100%, 50%, 1)
    ;
  }
  75% {
    text-shadow:
      4px 4px 0 hsla(180, 100%, 50%, 1), 
      3px 3px 0 hsla(180, 100%, 50%, 1), 
      2px 2px 0 hsla(180, 100%, 50%, 1), 
      1px 1px 0 hsla(180, 100%, 50%, 1),
      -4px -4px 0 hsla(0, 100%, 50%, 1), 
      -3px -3px 0 hsla(0, 100%, 50%, 1), 
      -2px -2px 0 hsla(0, 100%, 50%, 1), 
      -1px -1px 0 hsla(0, 100%, 50%, 1)      
    ;
  }
  100% {
    text-shadow:
      4px -4px 0 hsla(0, 100%, 50%, 1), 
      3px -3px 0 hsla(0, 100%, 50%, 1), 
      2px -2px 0 hsla(0, 100%, 50%, 1), 
      1px -1px 0 hsla(0, 100%, 50%, 1),
      -4px 4px 0 hsla(180, 100%, 50%, 1), 
      -3px 3px 0 hsla(180, 100%, 50%, 1), 
      -2px 2px 0 hsla(180, 100%, 50%, 1), 
      -1px 1px 0 hsla(180, 100%, 50%, 1)
    ;
  }  
`

export const extremeOffset = css`
  &.extreme-offset {
    p {
      letter-spacing: 5px;
      animation: ${animation} linear 2s infinite;
      font-family: var(--ff-3);
    }
  }
`
