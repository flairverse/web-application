import { NapViewer } from '@/components/ui-kit/nap/viewer'
import * as storeKeys from '@/constants/store-keys.constants'
import { useNapCreatorsStoreKeys } from '@/hooks/use-nap-creatore-store-keys'
import { AcceleratorsProvider } from '@/providers/accelerator'
import { DevtoolsProvider } from '@/providers/devtools'
import { FontProvider } from '@/providers/font'
import { GlobalHooksProvider } from '@/providers/global-hooks'
import { InternationalizationProvider } from '@/providers/internationalization'
import { GlobalStyles } from '@/styles'
import '@/styles/index.scss'
import { NextComponent } from '@/types/next-page.type'
import { appWithTranslation } from 'next-i18next.config'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const FlairVerse: NextComponent = ({ Component, pageProps }) => {
  const Layout = Component.layout || ((children: JSX.Element) => <>{children}</>)
  const { inCreateNapPageAnGlobalViewer } = useNapCreatorsStoreKeys()
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
                  <GlobalHooksProvider>
                    <NapViewer
                      creatorStoreKeys={inCreateNapPageAnGlobalViewer}
                      storeKeys={{
                        napIndex: storeKeys.COMPONENT__NAP_VIEWER___NAP_INDEX_,
                        napGroupIndex: storeKeys.COMPONENT__NAP_VIEWER___NAP_GROUP_INDEX,
                        visibility: storeKeys.COMPONENT__NAP_VIEWER___NAP_VIEWER_POPUP_VISIBILITY,
                        modals: {
                          answerQuestion: storeKeys.COMPONENT__NAP_VIEWER___ANSWER_QUESTION_VISIBILITY,
                        },
                      }}
                    />

                    <Component {...pageProps} />
                  </GlobalHooksProvider>
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
