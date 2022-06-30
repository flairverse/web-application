import styled, { keyframes } from 'styled-components'

const showError = keyframes`
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`

export const InputContainer = styled.div`
  > span {
    display: block;
    color: var(--c-wrong);
    animation: ${showError} 150ms forwards;
    font-size: var(--f-1);
    font-family: var(--ff-2);
    margin: 6px 0 0 0;
  }
`
