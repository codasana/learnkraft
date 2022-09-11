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
      description="Our services include web and mobile apps, marketing websites, content marketing and marketing automation."
      openGraph={{
        url: 'https://learnkraft.com',
        title: 'Services Offered - Web Apps, Mobile Apps, Content Marketing',
        description: 'Our services include web and mobile apps, marketing websites, content marketing and marketing automation.',
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
      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="text-center lg:w-3/5 w-full">
    <h2 className="text-sm text-brand-500 tracking-widest font-medium title-font mb-3">SERVICES</h2>
      <h1 className="title-font sm:text-4xl text-3xl mb-6 font-extrabold text-gray-900">Turn Your Ideas Into Products</h1>
      <p className="mb-6 leading-relaxed text-lg text-gray-800">We provide end-to-end technology and content services to help you succeed in your business. 
      Whether you are starting out with a new app idea, or already have an app that needs improvements, 
      we can provide you the right guidance and the expertise to build a seamless experience on both web and mobile. </p>
    </div>
  </div>
</section>
        <Features />
        <CTA />
      </Layout>
    </>
  )
}

export default Home
