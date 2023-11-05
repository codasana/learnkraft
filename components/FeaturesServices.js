import Image from 'next/image'
import Link from 'next/link'
export default function Features() {

    return (
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container py-12 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          {/*<div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-2xl text-xl font-bold title-font text-gray-900 max-w-xl mx-auto">Our Services</h1>
    </div>*/}
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <Image src="/images/web-app.png" height="80" width="138" className="mb-3"/>
                  <h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-medium text-sm">Web App Development</h2>
                  <h3 className="title-font sm:text-2xl text-xl mb-2 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Robust, scalable, full-stack 
                    <br className="hidden lg:inline-block" />
                    <span className="text-brand-600"> web applications</span>
                  </h3>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">We specialize in developing scalable, full-stack web applications including user-friendly and highly functional front-end combined with secure and reliable admin backends for business users.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <Image src="/images/mobile-app.png" height="80" width="81" className="mb-3"/>
                  <h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-medium text-sm">Mobile App Development</h2>
                  <h3 className="title-font sm:text-2xl text-xl mb-2 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Powerful, cross-platform 
                    <br className="hidden lg:inline-block" />
                    <span className="text-brand-600"> mobile apps</span>
                  </h3>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">Robust cross-platform mobile apps for iPhone, Tablet, and Android using React Native. We work with you right from app development to submission and management on the App Store and Google Play.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap m-4">
          <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <Image src="/images/website.png" height="80" width="106" className="mb-3"/>
                  <h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-medium text-sm">Websites</h2>
                  <h3 className="title-font sm:text-2xl text-xl mb-2 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Bespoke marketing and ecommerce 
                    <br className="hidden lg:inline-block" />
                    <span className="text-brand-600"> websites</span>
                  </h3>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">Fast, scalable, easy-to-navigate and unique websites to help you attract and engage with your customers using NextJS, WordPress, headless CMS, and Jamstack technologies.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <Image src="/images/maintenace.png" height="80" width="133" className="mb-3"/>
                  <h2 className="text-amber-500 bg-blue-50 rounded-sm px-2 py-1 mb-2 uppercase font-medium text-sm">Backend Development</h2>
                  <h3 className="title-font sm:text-2xl text-xl mb-2 font-extrabold text-gray-900" style={{lineHeight:1.25}}>Resilient and secure
                    <br className="hidden lg:inline-block" />
                    <span className="text-brand-600"> backends and APIs</span>
                  </h3>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">We build resilient, secure backends and APIs using Node/Express, as well as serverless technologies. Our expertise in cloud deployment ensures scalable and seamless digital experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );}