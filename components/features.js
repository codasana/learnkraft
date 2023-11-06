import Image from 'next/image'
import Link from 'next/link'
export default function Features() {

    return (
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container py-12 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="flex flex-col text-center w-full mb-8">
            <h2 className="text-xs text-brand-500 tracking-widest font-medium title-font mb-1">SERVICES</h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 max-w-xl mx-auto">Think of us as a partner, not an agency in your business journey.</h1>
          </div>
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                <Image src="/images/web-app.png" height="80" width="138" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Web Apps</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Full-stack ReactJS web applications including user-friendly and highly functional front-end combined with secure and reliable admin backends for business users.</p>
                  <Link
                    href="/services"
                    className="mt-3 text-brand-500 inline-flex items-center">
                    Learn More<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                <Image src="/images/mobile-app.png" height="80" width="81" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Mobile Apps</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Robust cross-platform mobile apps for iPhone, Tablet, and Android using React Native. We work with you right from app development to submission and management on the App Store and Google Play.</p>
                  <Link
                    href="/services"
                    className="mt-3 text-brand-500 inline-flex items-center">
                    Learn More<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                <Image src="/images/website.png" height="80" width="106" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Marketing and eCommerce Websites</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Fast, scalable, easy-to-navigate and unique websites to help you attract and engage with your customers using NextJS, WordPress, headless CMS, and Jamstack technologies.</p>
                  <Link
                    href="/services"
                    className="mt-3 text-brand-500 inline-flex items-center">
                    Learn More<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                <Image src="/images/maintenace.png" height="80" width="118" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Backend Development</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Resilient, secure backend solutions using Node/Express, serverless technologies, and API development. Expertise in cloud deployment ensures scalable and seamless digital experiences.</p>
                  <Link
                    href="/services"
                    className="mt-3 text-brand-500 inline-flex items-center">
                    Learn More<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
            {/*<div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                  <Image src="/images/marketing-automation.png" height="80" width="126" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Marketing Automation</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">We help you nurture and engage with your audience by providing deep integration with marketing platforms such as HubSpot, Marketo, Intercom, and others. </p>
                  <Link href="/services/marketing-automation">
                    <a className="mt-3 text-brand-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              </div>*/}
            {/*<div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow">
                <div className="mb-2">
                  <Image src="/images/maintenace.png" height="80" width="133" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">Ongoing Maintenance</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">We provide you a dedicated developer to help you with bug fixes and new feature development. You can choose the number of hours you need every month based on a monthly set rate. </p>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    );}