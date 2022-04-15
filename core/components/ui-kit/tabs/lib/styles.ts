import styled from 'styled-components'
import * as Lib from '.'

export const TabsContainer = styled.div`
  .ant-tabs-tab-btn {
    font-size: var(--f-2);
  }

  @media screen and (max-width: 991px) {
    .ant-tabs-tab-btn {
      font-size: var(--f-1);
    }
  }
`
