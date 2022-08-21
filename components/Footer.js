import Head from "next/head";
import Link from 'next/link'
import Newsletter from './Newsletter';
export default function Footer() {
  return (
        <footer className="text-gray-600 body-font bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
                className="h-10 mb-10"
                src="/images/lk-logo-square.png"
                alt="Learn Kraft Logo"
              />
            </a>
            <h2 className="text-white rounded-lg py-1 mt-2 uppercase font-semibold text-sm">Web &middot; Mobile &middot; Content</h2>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-lg mb-3">Menu</h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                <Link href="/">
                <a className="text-base text-gray-300 font-medium hover:text-white">Home</a>
              </Link>
                </li>
                <li  className="mb-2">
                <Link href="/blog">
                <a className="text-base text-gray-300 font-medium hover:text-white">Blog</a>
              </Link>
                </li>
                <li>
              <Link href="/contact">
                <a className="text-base text-gray-300 font-medium hover:text-white">Contact Us</a>
              </Link>
              </li>
                {/*<li className="mb-2">
                <Link href="/about">
                <a className="text-base text-gray-300 font-medium hover:text-black">About</a>
              </Link>
                </li>
                <li>
                <Link href="/services">
                <a className="text-base text-gray-300 font-medium hover:text-black">Services</a>
              </Link>
  </li>*/}

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-3">&nbsp;</h2>
              <nav className="list-none mb-10">
                <li  className="mb-2">
                  <Link href="/privacy">
                  <a className="text-base text-gray-300 font-medium hover:text-white">Privacy</a>
                </Link>
                  </li>
                  <li>
                <Link href="/terms">
                  <a className="text-base text-gray-300 font-medium hover:text-white">Terms</a>
                </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-2/4 md:w-1/2 w-full px-4">
            <Newsletter />
            </div>
            {/*<div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>*/}
          </div>
        </div>
        <div>
          <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row px-2 sm:px-6 lg:px-8 max-w-screen-xl">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2022. Learn Kraft, All right reserverd.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500" href="https://www.facebook.com/learnkraft">
                <svg
                  className="fill-current text-gray-500 transition-colors hover:text-[#0778e8]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.9984 9.99925C19.9984 4.4768 15.5217 0 9.99925 0C4.4768 0 0 4.4768 0 9.99925C0 14.9902 3.65657 19.1268 8.43683 19.877V12.8897H5.89798V9.99925H8.43683V7.79627C8.43683 5.29022 9.92967 3.90595 12.2137 3.90595C13.3077 3.90595 14.452 4.10124 14.452 4.10124V6.56199H13.1912C11.949 6.56199 11.5616 7.33278 11.5616 8.12353V9.99925H14.3348L13.8915 12.8897H11.5616V19.877C16.3419 19.1268 19.9984 14.9902 19.9984 9.99925Z" />
                </svg>
              </a>
              <a className="ml-6 text-gray-500" href="https://twitter.com/learnkraft" target="_blank" rel="noreferrer">
                <svg
                  className="fill-current text-gray-500 transition-colors hover:text-[#1da1f2]"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.9617 2.80748C19.2242 3.13164 18.4367 3.35248 17.6075 3.45331C18.4525 2.94414 19.1025 2.14164 19.41 1.18414C18.6175 1.64664 17.7392 1.98331 16.8042 2.17081C16.0575 1.37164 14.9933 0.871643 13.8117 0.871643C11.5475 0.871643 9.71167 2.70748 9.71167 4.96914C9.71167 5.29414 9.74917 5.60664 9.8175 5.90581C6.40917 5.74498 3.38833 4.10831 1.36667 1.63414C1.01083 2.23581 0.811667 2.93498 0.811667 3.69664C0.811667 5.12164 1.53667 6.37414 2.635 7.10998C1.9625 7.08831 1.33 6.90331 0.778333 6.59664V6.64748C0.778333 8.63498 2.18917 10.2925 4.06667 10.67C3.7225 10.7625 3.35917 10.8125 2.98667 10.8125C2.725 10.8125 2.47417 10.7875 2.22333 10.7408C2.74917 12.3683 4.26083 13.555 6.06 13.5883C4.66 14.6875 2.88583 15.3425 0.975 15.3425C0.65 15.3425 0.325833 15.3233 0 15.2866C1.82417 16.4483 3.97333 17.1275 6.2975 17.1275C13.8425 17.1275 17.9633 10.8808 17.9633 5.47248C17.9633 5.29831 17.9633 5.12248 17.9508 4.94748C18.7517 4.37331 19.4508 3.64748 20.0008 2.82414L19.9617 2.80748Z" />
                </svg>
              </a>
              {/*<a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
          </a>*/}
            </span>
          </div>
        </div>
      </footer>
  );
}
