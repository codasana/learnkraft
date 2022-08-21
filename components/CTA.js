import Image from 'next/image'

export default function CTA() {

    const trigChat = () => {
        // @ts-ignore
        if (window.HubSpotConversations) {
          console.log('Yes');
          // @ts-ignore
          window.HubSpotConversations.widget.open()
        } else {
          // @ts-ignore
          window.hsConversationsOnReady = [
            // @ts-ignore
            () => {
              // @ts-ignore
              window.HubSpotConversations.widget.open()
            }
          ];
        }
      }

    return (
      <section className="text-gray-600 body-font bg-blue-50 rounded">
        <div className="container mx-auto flex py-12 md:flex-row flex-col items-center px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="">
              <img
                className="h-10 mb-10"
                src="/images/lk-logo-square.png"
                alt="Learn Kraft Logo"
              />
            </div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Hire Us</h1>
            <p className="mb-8 leading-relaxed text-gray-900 text-lg">Are you looking to start a new project or need help with your existing project? Chat with us to talk about your needs and how we can work together to fulfil your needs. </p>
            <div className="flex w-full md:justify-start justify-center items-end mb-12">
              {/*<div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>*/}
              
                <button 
                onClick={()=> trigChat()}
                className="inline-flex text-white bg-slate-700 border-0 py-2 px-6 focus:outline-none hover:bg-brand-600 rounded text-lg shadow shadow-lg">Chat With Us</button>

            </div>

            <div className="flex lg:flex-row md:flex-col ml-1 mt-4">
              <a href="https://wa.me/919901599967" target="_blank" className="inline-flex rounded items-center focus:outline-none mr-6  hover:underline">
                <Image src="/images/whatsapp-brands.png" height="23" width="20"/>
                <span className="ml-2 flex items-start flex-col leading-none">
                  <span className="text-lg text-gray-600">+91 9901599967</span>
                </span>
              </a>
              <a href="mailto:hello@learnkraft.com" className="inline-flex rounded items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 focus:outline-none hover:underline">
              <Image src="/images/envelope-solid.png" height="20" width="20"/>
                <span className="ml-2 flex items-start flex-col leading-none">
                  <span className="text-lg text-gray-600">hello@learnkraft.com</span>
                </span>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/images/undraw_personal_email_re_4lx7.svg" />
          </div>
        </div>
      </section>
    )}