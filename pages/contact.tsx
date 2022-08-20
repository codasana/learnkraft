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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-2/3 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

            <div id="hubspotForm"></div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
