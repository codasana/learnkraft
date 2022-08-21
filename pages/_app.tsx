import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://learnkraft.com',
            site_name: 'Learn Kraft',
          }}
          twitter={{
            handle: '@learnkraft',
            site: '@learnkraft',
            cardType: 'summary_large_image',
          }}
        />
      <Component {...pageProps} />
    </>
  )
  

}

export default MyApp
