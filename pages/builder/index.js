import Head from 'next/head'
import Image from 'next/image'

import HeroHome from '../../components/builder/HeroHome';
import FeaturesHome from '../../components/builder/Features';
import FeaturesBlocks from '../../components/builder/FeaturesBlocks';
import Testimonials from '../../components/builder/Testimonials';
import Newsletter from '../../components/builder/Newsletter';

import Layout from '../../components/Layout';
export default function Home() {
  return (
    <Layout title="Website Builder and CMS">

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        
        <Testimonials />
        <FeaturesBlocks />

        {/*<div>Who is it for </div>
        <div>Creators, Journalists, Authors,  </div>*/}
      <Newsletter />
      {/*<div className="flex md:space-x-4 justify-center mt-10 bg-gray-800 pt-10">
        <div className="text-center mb-4">
          <div className="text-3xl mb-4 font-semibold text-white">
            Start Creating Your Website 
          </div>
        </div>
      </div>
      <div className="flex md:space-x-4 justify-center bg-gray-800 pb-12">
        <div className="text-center">
          <a className="rounded-md flex items-center justify-center px-4 py-2 text-base font-semibold rounded-2xl text-white bg-primary-500 hover:bg-primary-600 md:py-2 md:text-xl md:px-10" href="/auth/signin">
            Get Started
          </a>
        </div>
  </div>*/}
      </main>

    </Layout>
  )
}
