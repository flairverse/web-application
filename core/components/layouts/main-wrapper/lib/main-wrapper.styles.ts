import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 65px 0 0 0;

  @media screen and (max-width: ${breakPoints.md}) {
    padding: 52px 0 52px 0;
  }
`
