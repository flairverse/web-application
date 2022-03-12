import { NextComponent } from '@/types/next-page.type'
import { appWithTranslation } from 'next-i18next.config'
import { InternationalizationProvider, DevtoolsProvider } from '@/providers'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '@/styles'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider, QueryClient } from 'react-query'
import '@/styles/index.scss'

const FlairVerse: NextComponent = ({ Component, pageProps }) => {
  const Layout = Component.layout || ((children: JSX.Element) => <>{children}</>)
  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider disableTransitionOnChange>
          <GlobalStyles />
          <DevtoolsProvider />

          <InternationalizationProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </InternationalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(FlairVerse)
