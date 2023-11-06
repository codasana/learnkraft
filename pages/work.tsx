import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import Features from "../components/FeaturesServices"
import CTA from "../components/CTA"
import { NextSeo } from 'next-seo';


const Home: NextPage = () => {
  return (
    <>
        <NextSeo
        title="Our Work - Learn Kraft"
      description="Recent Work by Learn Kraft. Read about the recent work we've done, our clients and how we tackled various project challenges."
      openGraph={{
        url: 'https://learnkraft.com',
        title: 'Our Work - Learn Kraft',
        description: 'Recent Work by learn Kraft. Read about the recent work we\'ve done, our clients and how we tackled various project challenges.',
        images: [
          {
            url: 'https://learnkraft.com/images/learnkraft-services-cover.png',
            width: 1640,
            height: 924,
            alt: 'Learn Kraft Work',
            type: 'image/png',
          },
        ],
        site_name: 'Learn Kraft',
      }}

    />
      <Layout title="Our Work">
      <section className="text-gray-600 body-font bg-gradient-to-b from-zinc-100"> {/*   */}
        <div className="container mx-auto flex py-16 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {<h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-semibold text-base">SHOWCASE</h2>}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" >
              <span > Our Recent Work</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">Here's a showcase of our latest projects and the innovative solutions we've delivered.</p>
            
            <div className="flex justify-center">


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
      <section className="text-gray-600 body-font bg-zinc-100"> {/*   */}
        <div className="container py-12 mx-auto px-2 sm:px-6 lg:px-8 max-w-5xl">
        {data.projects.map((project, index) => (
          <div key={index} className="flex flex-wrap -mx-2 mb-8 rounded border">
            <div className="w-full md:w-1/2 mb-0 bg-gray-800">
              <div className="p-4 h-full flex items-center justify-center text-center">
                <h2 className="font-bold text-2xl text-white">{project.nature}</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 h-full">
                <h2 className="font-bold text-lg mb-2 text-gray-800">Project Overview</h2>
                {project.overview.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">{paragraph}</p>
              ))}
                <h3 className="font-bold text-lg mt-4 mb-2">Tech Stack</h3>
                
                {Object.entries(project.technicalComposition).map(([key, value]) => (
                  <p key={key} className="my-1"><strong>{key}:</strong> {value}</p>
                ))}
                {project.website && (
                  <div className="mt-4">
                    <a
                      href={project.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition duration-300"
                    >
                      Visit {project.website.label}
                    </a>
                  </div>
                )}
                {project.noWebsite && (
                  <p className="italic text-gray-500 text-sm mt-4">{project.noWebsite}</p>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

        <CTA />
      </Layout>
    </>
  )
}

export default Home

const data = {
  "projects": [
    {
      "nature": "AI-Powered Chat with Documents Platform",
      "overview": ["An advanced research assistant, transforming how users engage with their PDFs. Based on user's questions, it extracts and delivers precise information swiftly, ensuring professionals have immediate access to accurate data. We built an AI chatbot that allows users to upload PDF documents and chat with them. Once the document is uploaded, users can ask any questions. using advanced AI capabilities, it extracts the relevant information, and provide precise and accurate answers to users.","The platform has an intuitive and responsive chatbot UI, that allows users to navigate through extensive documents with ease."],
      "technicalComposition": {
        "Core Frameworks": "ReactJS and NextJS",
        "Styling": "TailwindCSS",
        "Database": "PostgreSQL with Vector DB hosted on Supabase",
        "Storage": "Amazon S3 for document storage",
        "AI Tools": "Open AI API, Langchain, Vector DB",
        "Authentication": "NextAuth for user authentication",
        "Payment Processing": "LemonSqueezy with webhook integration",
        "Hosting": "Vercel"
      },
      "website": {
        "label":"Saylient AI",
        "url": "https://saylientai.com"
      }
    },
    {
      "nature": "Website Builder and CMS",
      "overview": ["We have created a powerful website builder and CMS that allows users to create dynamic websites. It features a drag and drop builder with over a 100 pre-designed page components.", "It also has a fully-featured CM to add dynamic content sections such as blog, ecommerce products, etc."],
      "technicalComposition": {
        "Core Frameworks": "ReactJS and NextJS",
        "Styling": "TailwindCSS",
        "Database": "PostgreSQL hosted on Neon Tech",
        "Storage": "Digital Ocean Spaces for Image Storage",
        "Authentication": "NextAuth for user authentication",
        "Payment Processing": "Stripe with deep API and webhook integration",
        "Hosting": "Vercel"
      },
      "noWebsite":"This project is a work in progress."
    },
    {
      "nature": "English Learning Platform",
      "overview": ["We have developed an English Learning Management Platform designed to empower non-native speakers to learn and speak English with confidence.", "This subscription-based platform provides learners with an array of tools, including audio lessons, video lessons, an AI-powered learning chatbot with grammar correction, vocabulary training software, integrated Zoom sessions, and an online event planner.", "We have meticulously engineered both the web and mobile applications for this comprehensive educational solution."],
      "technicalComposition": {
        "Core Frameworks": "VueJS and NuxtJS",
        "Styling": "BootstrapCSS",
        "Database": "PostgreSQL hosted on Amazon RDS",
        "Storage": "Amazon S3 for image and document storage. Imgix for image optimization",
        "Backend": "Express / NodeJS backend and API",
        "Payment Processing": "Stripe and paypal with API and webhook integration",
        "AI Tools": "Open AI API",
        "Hosting": "Digital Ocean",
        "Mobile App": "React Native"
      },
      "noWebsite":"More details available on request."
    },
    {
      "nature": "Data Science Membership Site",
      "overview": ["We transformed Finance Train from a WordPress blog into a NextJS-powered membership site, specifically tailored for budding data professionals.", "This revamped website is dedicated to delivering a wealth of content and online resources aimed at equipping individuals with the necessary skills to excel as data analysts and data scientists.", "It boasts a suite of interactive tools such as online lessons, quizzes, mock interviews, and downloadable materials to foster a comprehensive and engaging learning experience."],
      "technicalComposition": {
        "Core Frameworks": "ReactJS and NextJS",
        "Styling": "TailwindCSS",
        "Database": "PostgreSQL hosted on Neon Tech",
        "Storage": "DigitalOcean for storage",
        "Payment Processing": "LemonSqueezy and paddle with API and webhook integration",
        "Hosting": "Vercel",
        "Email Market": "Amazon SES with Sendy",
        "Transactional Emails": "Mailgun"
      },
      "website": {
        "label":"Finance Train",
        "url": "https://financetrain.com"
      }
    }
  ]
}

