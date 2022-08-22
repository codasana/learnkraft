import React, { useState, useRef, useEffect } from 'react';
//import Transition from '../utils/Transition';
import WebsiteIcon from './icons/website'
import BlockIcon from './icons/block'
import DomainIcon from './icons/domain'
import BlogIcon from './icons/blog'
import SearchIcon from './icons/search'
import TechIcon from './icons/tech'
//import FeaturesElement from '../images/features-element.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  {/*useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])*/}

  return (
    <section className="relative pb-20 bg-blue-50">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="font-medium mb-1 text-lg text-brand-500">The creator platform</p>
            <h1 className="font-semibold text-3xl mb-3 max-w-xl mx-auto font-serif">Build and manage your website, links, and products, all in one place.</h1>
            {/*<p className="text-xl text-gray-800 max-w-2xl mx-auto">Use CreatPad to create a beautiful website and bring all your digital creations in one place.</p>*/}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              <div className="h-52 w-52">
                <WebsiteIcon />
              </div>
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>*/}
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Beautiful Website</h4>
              <p className="text-gray-600 text-center">Create beautiful websites to match your brand identity.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              <div className="h-52 w-52">
                <BlockIcon />
              </div>
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
            </svg>*/}
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Block-based Design</h4>
              <p className="text-gray-600 text-center">Use customizable design blocks to quickly create pages for different needs.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
            </svg>*/}
            <div className="h-52 w-52">
              <DomainIcon />
            </div>
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Custom Domains</h4>
              <p className="text-gray-600 text-center">Connect a custom domain or host it on our subdomain.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              <div className="h-52 w-52">
                <BlogIcon />
              </div>
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
          </svg>   */}           
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Blog & Newsletter</h4>
              <p className="text-gray-600 text-center">Turn on a fully-functional modern blog and newsletter.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              <div className="h-52 w-52">
                <SearchIcon />
              </div>
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
        </svg>*/}
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Excellent SEO</h4>
              <p className="text-gray-600 text-center">Optimize for search engines using meta tags and social sharing tags.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-lg h-96">
              <div className="h-52 w-52">
                <TechIcon/>
              </div>
              {/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
      </svg>*/}
              <h4 className="text-xl font-bold font-serif leading-snug tracking-tight mb-2 mt-4">Modern Tech</h4>
              <p className="text-gray-600 text-center">Have a fast, fully responsive website, secured with automatic SSL.</p>
            </div>

          </div>
          {/*<div className="flex justify-center mt-14 text-gray-700 text-xl font-medium">And lots of integrations and features.</div>*/}
        </div >
      </div >
    </section >
  );
}

export default Features;
