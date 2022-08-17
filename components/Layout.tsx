import React, { ReactNode } from "react";
import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
  title:string;
  disclaimer?:string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
  disclaimer = null
}) => (
  <>
  <Head>
    <title>{`${title} - Finance Train`}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#ffffff" />  dark:bg-gray-800*/}
  </Head>
  <div className="font-sans antialiased bg-white">
    {<Header />}
    <main className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
      {children}
    </main>
    {<Footer/>}
  </div>
  </>
);

export default Layout;