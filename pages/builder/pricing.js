import Layout from '../../components/Layout';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}

        <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-b from-blue-100">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif">Simple pricing, everything included</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">Join today and start building your website.</p>
            {/*<div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
              </div>*/}
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-white">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-700 mb-2">MONTHLY PLAN</h2>
                <h1 className="text-5xl text-gray-800 leading-none flex items-end pb-4 mb-4 border-b border-gray-200 font-semibold">
                  <span>$10</span>
                  <span className="text-base ml-1 font-normal text-primary-500 pb-2">/site/month</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>All features included
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>30-day free trial
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>No credit card required
                </p>
                <Link href="/builder/#subscribe">
                <a className="flex items-center mt-auto text-brand-500 bg-white border-2 border-brand-500 py-3 px-4 w-full focus:outline-none hover:bg-brand-600 hover:text-white rounded font-medium">Get Started
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                </Link>
                <p className="text-sm text-gray-600 mt-3">30-day free trial. No credit card required.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-brand-400 flex flex-col relative overflow-hidden bg-white">
                <span className="bg-brand-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl ">POPULAR</span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-700 mb-2">YEARLY PLAN</h2>
                <h1 className="text-5xl text-gray-800 leading-none flex items-end pb-4 mb-4 border-b border-gray-200 font-semibold">
                  <span>$99</span>
                  <span className="text-base ml-1 font-normal text-primary-500 mb-2">/site/year</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>All features included
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>30-day free trial
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-brand-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>No credit card required
                </p>
                <Link href="/builder/#subscribe">
                  <a className="flex items-center mt-auto text-brand-500 bg-white border-2 border-brand-500 py-3 px-4 w-full focus:outline-none hover:bg-brand-500 hover:text-white rounded font-medium">Get Started
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
                <p className="text-sm text-gray-600 mt-3">30-day free trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

    </Layout>
  )
}
