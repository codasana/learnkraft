import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//js-na1.hs-scripts.com/22484415.js"
          strategy="lazyOnload"
          id="hs-script-loader"
        ></Script>
      </body>
    </Html>
  )
}
