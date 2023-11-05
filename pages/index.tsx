import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import CTA from "../components/CTA"
import Features from "../components/Features"
import { NextSeo } from 'next-seo';
const Home: NextPage = () => {


  return (
    <>
    <NextSeo
      description="Our services include web and mobile apps, marketing websites, content marketing and marketing automation."
      openGraph={{
        url: 'https://learnkraft.com',
        title: 'Learn Kraft - ReactJS Web App and Mobile App Development Agency',
        description: 'Our services include Full-stack ReactJS web and mobile apps, marketing websites, Headless-CMS websites, and ecommerce sites.',
        images: [
          {
            url: 'https://learnkraft.com/images/learnkraft-cover.png',
            width: 1200,
            height: 600,
            alt: 'Learn Kraft Cover',
            type: 'image/png',
          },
        ],
        site_name: 'Learn Kraft',
      }}

    />
    <Layout title="Web Development and Content Marketing Services">
      {/* HERO */}
      <section className="text-gray-600 body-font bg-zinc-100"> 
        <div className="container mx-auto flex py-16 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/*<h2 className="text-amber-500 bg-blue-50 rounded-lg px-2 py-1 mb-2 uppercase font-semibold text-sm">Web &middot; Mobile &middot; Content</h2>*/}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" style={{lineHeight:1.2}}>Your partner in 
            <br className="hidden lg:inline-block" />
            <span className="text-brand-500 ml-2 lg:ml-0">Web</span> and <span className="text-brand-500 mr-2 lg:mr-0">Mobile App</span>
            <br className="hidden lg:inline-block" />
            development
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">Full-stack ReactJS web app and mobile app development, tailored to provide innovative solutions and elevate your digital presence.</p>
            <div className="flex justify-center">

                <a href="#CTA" className="inline-flex text-brand-500 border border-brand-500 py-2 px-6 focus:outline-none hover:bg-brand-600 hover:text-white rounded text-lg items-center">
                  Work With Us
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                </a>

              {/*<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>*/}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/hero-5.png" />
            {/*<div className="mt-10 w-[25rem] overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[47.8125rem]">
                <img className="w-full" alt="hero" src="/images/hero-image-02.jpg" />
  </div>*/}
                    
          </div>
{/*<img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/headway-5QgIuuBxKwM-unsplash.jpg" />*/}
        </div>
      </section>
      
      {/* FEATURES */}
      <Features />
      {/* CLIENTS */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">Some of our happy clients</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">We take our clients' satisfaction very seriously. We are dedicated to meeting our clients' demands.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-brand-500 inline-flex" />
            </div>
          </div>
          <div className="flex items-center justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

            <div className="p-6"><Image src="/images/de-logo.png" height="50" width="150" alt="Deep English" /></div>
            <div className="p-6"><Image src="/images/flavor.png" height="50" width="100" alt="Flavor" /></div>
            <div className="p-6"><Image src="/images/cx_logo.png" height="26" width="180"  alt="client"/></div>
            <div className="p-6"><Image src="/images/comeet-logo.png" height="35" width="150" alt="Comeet"/></div>

          </div>
          <div className="flex items-center justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

            <div className="p-6"><Image src="/images/ft-logo.png" height="35" width="172" alt="Finance Train"/></div>
            <div className="p-6"><Image src="/images/iaied.png" height="39" width="100" alt="IAIED" /></div>
            <div className="p-6"><Image src="/images/hifi-logo.gif" height="55" width="90" alt="hifi"/></div>
            <div className="p-6"><Image src="/images/marketxls-logo.png" height="27" width="150" alt="Market XLS"/></div>

          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container pb-12 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-xs text-brand-500 tracking-widest font-medium title-font mb-1">TESTIMONIALS</h2>
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">See why our customers love us</h1>
          
        </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-50 p-8 rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-brand-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl">Learn Kraft is my no. 1 recommendation for any web development work, globally!</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="/images/ankur-mohan.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Ankur Mohan</span>
                    <span className="text-gray-500 text-sm">Founder, MarketXLS</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-50 p-8 rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-brand-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl">Thank you for an amazing service. My ecommerce store has become much faster now and the conversion rate has doubled. I look forward to continuous engagement with you.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="/images/regine.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Regine Chevallier</span>
                    <span className="text-gray-500 text-sm">LUXURY HAT DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-50 p-8 rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-brand-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl">I&#8217;ve been working with Learn Kraft and their team for over a year now. We are an exclusive design house and had been working with many developers to execute our projects. That was a big challenge for us. Now all our projects are executed just by Learn Kraft. The team has expertise in every area of web development and they deliver really quick.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Designer</span>
                    <span className="text-gray-500 text-sm">London-based Designer Studio</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-50 p-8 rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-brand-500 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl">Manish went beyond the web development aspect and identified, suggested and implement things that would have taken us ages to figure out. It won't be an exaggeration if I say that web development service he provides is the bonus; the real deal is his vast knowledge, strategic thinking and partner like involvement.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="/images/alpa.jpeg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Alpa</span>
                    <span className="text-gray-500 text-sm">Chief Editor, Something's Cooking with Alpa</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <CTA />
    </Layout>
    </>
  )
}

export default Home
