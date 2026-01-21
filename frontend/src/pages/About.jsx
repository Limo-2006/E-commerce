import React from 'react';
import aboutImg from '../assets/about.jpg'; 

const AboutUsSection = () => {
  return (
    <section className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          
          <div className="w-full lg:w-1/2">
            <img
              src={aboutImg}
              alt="Fashion products display"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <p className="uppercase text-4xl tracking-wide font-bold">
              About Us
            </p>

            <h2 className=" md:text-4xl font-semi-bold text-gray-900 mt-3">
              Forever was born out of a passion for innovation and online shopping excellence.
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Our journey began with a simple idea: to help customers discover and purchase quality products easily from home.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From fashion and beauty to electronics and home essentials, we curate products from trusted brands worldwide.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              To empower customers with choice, convenience, and confidence through a seamless shopping experience.
            </p>
          </div>

        </div>
      </div>


<div className="flex items-center mt-12">
  <h1 className="text-2xl font-semibold text-gray-800  py-10 mr-4 whitespace-nowrap">
    WHY CHOOSE US
    <span className="w-20 h-0.5 bg-gray-800"></span>
  </h1>
  <div className="flex-grow:1 border-gray-800"></div>
</div>

{/* Content Grid */}
<div className="grid gap-8 md:grid-cols-3">

  {/* Quality Assurance */}
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">
      Quality Assurance
    </h2>
    <p className="text-gray-600 leading-relaxed">
      We meticulously select and vet each product to ensure it meets our stringent quality standards.
    </p>
  </div>

  {/* Convenience */}
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">
      Convenience
    </h2>
    <p className="text-gray-600 leading-relaxed">
      With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
    </p>
  </div>

  {/* Customer Service */}
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">
      Exceptional Customer Service
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Our dedicated team is here to assist you along the way, ensuring your satisfaction is our top priority.
    </p>
  </div>

</div>

    </section>
  );
};

export default AboutUsSection;
