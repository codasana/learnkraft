import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head>
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-7YKVX6VF7N`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7YKVX6VF7N');
      `,
        }}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*<Script
          src="//js-na1.hs-scripts.com/22484415.js"
          strategy="lazyOnload"
          id="hs-script-loader"
      ></Script>*/}
      </body>
    </Html>
  )
}
