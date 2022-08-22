import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../../components/Layout"
import Features from "../../components/Features"
import CTA from "../../components/CTA"
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
        <NextSeo
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
        <Features />
        <CTA />
      </Layout>
    </>
  )
}

export default Home
