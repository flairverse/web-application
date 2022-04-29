import { NextComponent } from '@/types/next-page.type'
import { appWithTranslation } from 'next-i18next.config'
import { InternationalizationProvider, DevtoolsProvider, AcceleratorsProvider, FontProvider } from '@/providers'
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
          <FontProvider>
            <GlobalStyles />
            <DevtoolsProvider />

            <InternationalizationProvider>
              <AcceleratorsProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AcceleratorsProvider>
            </InternationalizationProvider>
          </FontProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(FlairVerse)
