import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../../components/Layout"
import Features from "../../components/FeaturesServices"
import CTA from "../../components/CTA"
import { NextSeo } from 'next-seo';


const Home: NextPage = () => {
  return (
    <>
        <NextSeo
        title="Learn Kraft Services: Web & Mobile Apps, Websites, Content Marketing"
      description="Our services include full-stack ReactJS web apps and mobile apps, marketing websites, and backend development."
      openGraph={{
        url: 'https://learnkraft.com',
        title: 'Services Offered - ReactJS Web Apps, Mobile Apps, Content Marketing',
        description: 'Our services include full-stack ReactJS web apps and mobile apps, marketing websites, content marketing and marketing automation.',
        images: [
          {
            url: 'https://learnkraft.com/images/learnkraft-services-cover.png',
            width: 1640,
            height: 924,
            alt: 'Learn Kraft Services Cover',
            type: 'image/png',
          },
        ],
        site_name: 'Learn Kraft',
      }}

    />
      <Layout title="Services Offered">
      <section className="text-gray-600 body-font bg-gradient-to-b from-zinc-100"> {/*   */}
        <div className="container mx-auto flex py-16 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {<h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-semibold text-base">SERVICES</h2>}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Turn Your 
              <br className="hidden lg:inline-block" />
              <span className="text-brand-600"> Ideas Into Products</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">We provide full-stack ReactJS web app and mobile app development services to help you succeed in your business. 
            Whether you are starting out with a new idea, or already have a project that needs improvements, 
            we can provide you the right guidance and the expertise to build a seamless experience on both web and mobile.</p>
            <div className="flex justify-center">


              {/*<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>*/}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="flex items-center justify-center">
            <img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/services/web-app.png" />
          </div>
            {/*<div className="mt-10 w-[25rem] overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[47.8125rem]">
                <img className="w-full" alt="hero" src="/images/hero-image-02.jpg" />
            </div>*/}
                    
          </div>
          {/*<img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/headway-5QgIuuBxKwM-unsplash.jpg" />*/}
        </div>
      </section>
      
        <Features />
        <section className="text-gray-600 body-font bg-white">
          <div className="container px-5 py-20 mx-auto">
            <div className="w-full mx-auto text-center bg-gray-100 px-8 py-10 rounded-xl prose">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-amber-500" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-xl text-gray-800 font-medium text-left">
                The planning that goes into creating an app is just as important as the app itself.
              </p>
              <p className="leading-relaxed text-xl text-gray-800 font-medium text-left">
                At Learn Kraft, we think that creating a successful product begins with finding the right balance between your business goals, technology needs, and the end-user experience you wish to provide.
              </p>
              <p className="leading-relaxed text-xl text-gray-800  font-medium text-left">
                Before we begin development, we'll work with you to create a precise strategy for your app, complete with defined targets and dates, to set us up for success.
              </p>
              {/*<span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>*/}
            </div>
          </div>
        </section>
        <CTA />
      </Layout>
    </>
  )
}

export default Home
