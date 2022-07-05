import { breakPoints } from '@/constants/style-variables.constant'
import styled from 'styled-components'

export const TabsContainer = styled.div`
  .ant-tabs-tab-btn {
    font-size: var(--f-2);
  }

  @media screen and (max-width: ${breakPoints.lg}) {
    .ant-tabs-tab-btn {
      font-size: var(--f-1);
    }
  }
`
