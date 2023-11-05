import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import React, {useEffect} from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      console.log('loadll');
        // @ts-ignore
        if (window.hbspt) {
          console.log('loadllxx');
            // @ts-ignore
            window.hbspt.forms.create({
                portalId: "22484415",
                formId: "41643477-e461-40c2-8c41-08bd80c77183",
                region: "na1",
                target: '#hubspotForm'
            })
        }
    });
}, []);

  return (
    <Layout title="Contact Us - Learn Kraft">
      <section className="text-gray-600 body-font relative">
      <div className="container px-8 py-10 mx-auto max-w-2xl text-left bg-blue-50 my-12 rounded rounded-lg">
   <div className="flex flex-col w-full">
      <p className="leading-relaxed text-xl font-normal mb-2">Hi, I'm Manish, the founder and lead developer at Learn Kraft.</p>
      <p className="leading-relaxed text-xl font-normal mb-4">You can contact me for any queries or or new project requirements.</p>
      <div className="flex items-center mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width={20} height={16} x={2} y={4} rx={2} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
         </svg>
         <a className="text-xl font-normal text-blue-600" href="mailto:manish@learnkraft.com">manish@learnkraft.com</a>
      </div>
      <div className="flex items-center">
         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
         </svg>
         <a className="text-xl font-normal text-blue-600" href="https://x.com/msahajwani">@msahajwani</a>
      </div>
   </div>
</div>
      </section>
    </Layout>
  )
}

export default Home
