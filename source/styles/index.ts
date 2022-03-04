import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @media (min-width: 768px) {
    .container {
      max-width: 966px !important;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1170px !important;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1320px !important;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      padding: 0;
    }
  }
`
