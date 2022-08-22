import React, { useState } from 'react';
//import Modal from '../utils/Modal';
import Image from 'next/image'
//import HeroImage from '/hero-image.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-cover bg-[url('/hero-image.jpg')]" >

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">

        {/* Hero content */}
        <div className="py-8">

          {/* Section header */}
          <div className="p-12 my-14 bg-white rounded max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-serif font-extrabold leading-tighter tracking-tighter mb-4 max-w-3xl" >Online home for <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-600">creators</span></h1>
            <div className="max-w-3xl mx-auto"> {/* website solution / creator platform */}
              <p className="text-base md:text-lg text-gray-800 mb-8">Learn Kraft Website Builder and CMS is an all-in-one platform to help you build your website, showcase your work, and conduct your business seamlessly.</p>
              <div className="max-w-xs sm:max-w-none sm:flex ">
                <div>
                  <a className="btn text-white bg-brand-500 hover:bg-brand-600 w-full mb-4 sm:w-auto sm:mb-0" href="#subscribe">Get Early Access</a>
                </div>
                {/*<div>
                  <a className="btn text-gray-800 bg-gray-200 hover:text-secondary-500 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>*/}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;