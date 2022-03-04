import { NextComponent } from '@/types/next-page.type'
import { appWithTranslation } from 'next-i18next.config'
import { InternationalizationProvider } from '@/providers'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '@/styles'
import '@/styles/index.scss'

const FlairVerse: NextComponent = ({ Component, pageProps }) => {
  const Layout = Component.layout || ((children: JSX.Element) => <>{children}</>)

  return (
    <RecoilRoot>
      <GlobalStyles />

      <InternationalizationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </InternationalizationProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(FlairVerse)
