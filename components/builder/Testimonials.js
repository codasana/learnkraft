import React from 'react';


function Testimonials() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="text-2xl mb-4 font-serif">Learn Kraft Website Builder and CMS is built for small businesses, professionals and creators.</h2>
            {/*<h2 className="h2 mb-4 font-serif">Trusted by over 1,000 creators all over the world</h2>*/}
            {/*<p className="text-xl text-gray-600" >Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p>*/}
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-10" >
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primary-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src='/manish_profile.webp' width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-light mb-4">
                  “ Our vision is to become a true digital platform that allows businesses and creators to build and manage all aspects of their online business.  “
                </blockquote>
                {/*I love Creatpad and would recommend it to anyone. Could not be easier to use, and all our websites built with Creatpad are awesome!. We want to enable every creator to build an online business with ease and run their business seamlessly.*/}
                <cite className="block font-bold text-lg not-italic mb-1">Manish Sahajwani</cite>
                <div className="text-gray-600">
                  <span>Founder - Learn Kraft</span> {/*<a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>*/}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;