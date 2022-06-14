import { AcceleratorsProvider, DevtoolsProvider, FontProvider, InternationalizationProvider } from '@/providers'
import { GlobalStyles } from '@/styles'
import '@/styles/index.scss'
import { NextComponent } from '@/types/next-page.type'
import { appWithTranslation } from 'next-i18next.config'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

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
