import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next.config'
import { InternationalizationProvider } from '@/providers'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <InternationalizationProvider>
        <Component {...pageProps} />
      </InternationalizationProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(MyApp)
