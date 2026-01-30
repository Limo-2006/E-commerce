import React from "react";
import contact1Img from "../assets/contact1.jpg";

const ContactUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {/* Title */}
      <div className="flex items-center justify-center mb-14">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
          CONTACT US
        </h1>
        <div className="ml-4 w-20 h-2px bg-gray-400"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-1/2 w-full">
          <img
            src={contact1Img}
            alt="Store"
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Store
          </h2>

          <p className="text-gray-600 mb-1">
            54709 Willms Station
          </p>
          <p className="text-gray-600 mb-4">
            Suite 350, Washington, USA
          </p>

          <p className="text-gray-600 mb-1">
            📞 Tel: (415) 555-0132
          </p>
          <p className="text-gray-600 mb-8">
            ✉️ Email: admin@limo.com
          </p>

          {/* Career Info */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Careers at Limo's Store
          </h2>

          <p className="text-gray-600 mb-6">
            Learn more about our teams, culture, and current job openings.
          </p>

          <button className="px-7 py-3 border border-gray-800 text-gray-800 font-medium rounded-md hover:bg-gray-800 hover:text-white transition">
            Explore Jobs
          </button>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
