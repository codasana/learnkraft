import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../../components/Layout"
import CTA from "../../components/CTA"
const Home: NextPage = () => {

  const trigChat = () => {
    // @ts-ignore
    if (window.HubSpotConversations) {
      console.log('Yes');
      // @ts-ignore
      window.HubSpotConversations.widget.open()
    } else {
      // @ts-ignore
      window.hsConversationsOnReady = [
        // @ts-ignore
        () => {
          // @ts-ignore
          window.HubSpotConversations.widget.open()
        }
      ];
    }
  }

  let meta = {
    title: "Marketing Automation Services - Learn Kraft",
    description:'We help you nurture and engage with your audience by providing deep integration with marketing platforms such as HubSpot, Marketo, Intercom, and others.',
    image:'/images/services/marketing-automation.png'
  }
  return (
    <Layout title="Content Marketing Services">
            <Head>
            <title>{meta.title}</title>
            <meta content={meta.description} name="description" key="metadescription"/>
            <meta property="og:type" content="article" key="ogtype"/>
            <meta property="og:title" content={meta.title} key="ogtitle"/>
            <meta property="og:image" content={`https://learnkraft.com${meta.image}`} key="ogimage"/>
            <meta property="og:description" content={meta.description} key="ogdescription"/>
            <meta name="twitter:title" content={meta.title} key="twittertitle"/>
            <meta name="twitter:image" content={`https://learnkraft.com${meta.image}`} key="twitterimage"/>
            <meta name="twitter:description" content={meta.description} key="twitterdescription"/>
        </Head>
      {/* HERO */}
      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-100"> {/*   */}
        <div className="container mx-auto flex py-16 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {<h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-semibold text-base">Marketing Automation</h2>}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Optimize marketing 
              <br className="hidden lg:inline-block" />
              <span className="text-brand-600"> with marketing technology</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">
            We help you nurture and engage with your audience by providing deep integration with marketing platforms such as HubSpot, Marketo, Intercom, and others.</p>
            <div className="flex justify-center">

                <button onClick={()=> trigChat()} className="inline-flex text-brand-500 border border-brand-500 py-2 px-6 focus:outline-none hover:bg-brand-600 hover:text-white rounded text-lg items-center">
                  Work With Us
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                </button>

              {/*<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>*/}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="flex items-center justify-center">
            <img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/services/marketing_automation1.png" />
          </div>
            {/*<div className="mt-10 w-[25rem] overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[47.8125rem]">
                <img className="w-full" alt="hero" src="/images/hero-image-02.jpg" />
            </div>*/}
                    
          </div>
          {/*<img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/headway-5QgIuuBxKwM-unsplash.jpg" />*/}
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center bg-brand-500 px-8 py-10 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-amber-500 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-xl text-white font-medium">
            Marketing automation technology is being used by businesses all over the world to automate marketing activities, streamline marketing workflows, and run effective marketing campaigns. At Learn Kraft, we help our clients get the most out of their investment in marketing automation platforms. Our services include platform evaluation and selection for your needs; platform setup and integration; setting up automation workflows; campaign management; and ongoing engagement.
            </p>
            {/*<span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">Senior Product Designer</p>*/}
          </div>
        </div>
      </section>
      {/* CTA */}
      <CTA />
    </Layout>
  )
}

export default Home
