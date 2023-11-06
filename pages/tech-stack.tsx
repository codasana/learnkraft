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
        title="Learn Kraft Tech Stack: Tools We Use"
      description="We are a full-stack ReactJS web app and mobile app development agency. This page lists the various tools we use in our projects."
      openGraph={{
        url: 'https://learnkraft.com',
        title: 'Learn Kraft Tech Stack: Tools We Use',
        description: 'We are a full-stack ReactJS web app and mobile app development agency. This page lists the various tools we use in our projects.',
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
      <Layout title="Tech Stack: Tools We Use">
      <section className="text-gray-600 body-font bg-gradient-to-b from-zinc-100"> {/*   */}
        <div className="container mx-auto flex py-16 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {<h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-semibold text-base">TOOLS</h2>}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" >
              <span > Our Tech Stack</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">At Learn Kraft, we pride ourselves on utilizing a diverse and modern technology stack to deliver cutting-edge web solutions. Our carefully selected tools and frameworks represent the gold standard in software development, enabling us to create scalable, secure, and high-performing applications.</p>
            <p className="mb-8 leading-relaxed text-lg text-gray-800">From dynamic front-end interfaces to robust backend services, each layer of our stack is chosen to provide the utmost efficiency and quality in our development process. Below is a glimpse into the core technologies that empower us to turn your digital visions into reality.</p>
            <div className="flex justify-center">


              {/*<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>*/}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="flex items-center justify-center">
            <img className="object-cover object-center rounded rounded-lg" alt="hero" src="/images/services/website.png" />
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
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-800 text-white text-lg">
                <tr>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Technologies</th>
                  <th className="px-4 py-2">Purpose &amp; Advantages</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 bg-white">
                {techStackData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">
                {item.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="inline-block bg-blue-50 text-gray-800  font-semibold mr-2 px-2.5 py-0.5 rounded my-1">
                    {tech}
                  </span>
                ))}
              </td>
              <td className="border px-4 py-2">{item.purpose}</td>
            </tr>
          ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">While the technologies listed represent our primary toolkit, we understand the importance of flexibility and adaptability in meeting our clients' needs. Therefore, we are always open to integrating other technologies based on your project requirements or existing tech stack to ensure the best possible outcomes for your business.</div>
        </div>
      </section>

        <CTA />
      </Layout>
    </>
  )
}

export default Home

const techStackData = [
  {
    "category": "Frontend Libraries/Frameworks",
    "technologies": ["ReactJS", "VueJS"],
    "purpose": "Building interactive user interfaces with reusable components for efficient and scalable front-end development."
  },
  {
    "category": "Frontend Frameworks with SSR/SSG",
    "technologies": ["NextJS", "NuxtJS"],
    "purpose": "Creating websites with optimized SEO, faster load times, and better performance, supporting SSR, SSG, and ISG without complex configurations."
  },
  {
    "category": "CSS Frameworks",
    "technologies": ["TailwindCSS", "Chakra UI"],
    "purpose": "Styling applications quickly and efficiently with utility classes and component-based design, enabling responsive layouts with minimal custom CSS."
  },
  {
    "category": "Design Tools",
    "technologies": ["Figma"],
    "purpose": "Designing user interfaces and prototypes collaboratively, ensuring a seamless visual and interactive user experience from concept to final design."
  },
  {
    "category": "Cross-Platform Mobile Framework",
    "technologies": ["React Native"],
    "purpose": "Developing native mobile applications for multiple platforms using a single JavaScript codebase, reducing development time and resources."
  },
  {
    "category": "Hosting/Deployment",
    "technologies": ["Vercel", "Digital Ocean", "AWS", "Supabase"],
    "purpose": "Deploying and hosting applications with scalable infrastructure, ensuring high availability, reliability, and a suite of services for comprehensive server management."
  },
  {
    "category": "Databases",
    "technologies": ["PostgreSQL", "MySQL", "MongoDB"],
    "purpose": "Storing, retrieving, and managing application data with support for both structured and unstructured data models, catering to a wide range of project requirements."
  },
  {
    "category": "Headless CMS / CMS",
    "technologies": ["Contentful", "Storyblok", "Sanity", "WordPress"],
    "purpose": "Managing content efficiently with a decoupled architecture, providing flexibility for developers and content creators to maintain the website's content."
  },
  {
    "category": "E-commerce Platforms",
    "technologies": ["Shopify", "Hydrogen"],
    "purpose": "Building online storefronts with powerful e-commerce capabilities, including product management, secure payment processing, and order fulfillment."
  },
  {
    "category": "ORMs",
    "technologies": ["Prisma", "Sequelize"],
    "purpose": "Interacting with databases through object-oriented models, simplifying data manipulation and query building with an abstraction layer over SQL."
  },
  {
    "category": "Backend Frameworks",
    "technologies": ["ExpressJS", "Node.js"],
    "purpose": "Facilitating server-side logic for web applications, providing a robust set of features for web and mobile applications, API development, and middleware integration."
  },
  {
    "category": "AI Integration",
    "technologies": ["Open AI", "Langchain", "Vercel AI", "Vector DB"],
    "purpose": "Creating intelligent and scalable chat applications that can understand and process natural language, learn from interactions, and provide personalized experiences. Our AI toolkit facilitates the development of solutions that can reach a wide audience with advanced AI features."
  },
  {
    "category": "Payment Integrations",
    "technologies": ["Stripe", "Paypal", "Paddle", "LemonSqueezy"],
    "purpose": "Facilitating secure and reliable payment transactions within applications. These integrations streamline the checkout process, support global payments, and comply with the highest security standards to ensure trust and convenience for users."
  }
]
