import React from 'react'

import ExchangeLogo from "../assets/exchange.png"
import QualityLogo from '../assets/qyality.png'
import SupportLogo from "../assets/support.png"

const OurPolicy = () => {
  return (
    <div>
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
  Our Policy
</h3>

    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20'>

      <div>
        <img src={ExchangeLogo} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={QualityLogo} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Return</p>
        <p className='text-gray-400'>Return within 7 days of purchase</p>
      </div>

      <div>
        <img src={SupportLogo} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
</div>
    </div>
  )
}

export default OurPolicy
