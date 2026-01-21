import React from 'react'

const Footer = () => {
  return (
  <div>

   <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-12 my-10 mt-40'>
   
         <div>
           <div className='w-32 mb-5'>Forever</div>
           <p className='text-gray-400 w-ful md:2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime modi quidem voluptatibus, iste vero possimus sit laboriosam sint fugit commodi?
             Alias ut consequuntur, pariatur architecto delectus impedit maiores facere.</p>
         </div>
   
         <div>
           <p className='font-semibold'>COMPANY</p>
           <ul className='text-gray-400 flex flex-col gap-1'>
           <li>Home</li>
             <li>About</li>
               <li>Delivery</li>
                 <li>Private Policy</li>
           
           </ul>
         </div>
   
         <div>
           
           <p className='font-semibold  text-xl mb-5'>Get in Touch</p>
           <ul className='text-gray-400 flex flex-col gap-1'>
           <li>+1-212 345-7890</li>
           <li>contact@forever.com</li>
           </ul>
         </div>
   
   <hr /> 
   <p className='py-5 text-sm text-center'>Copyright 2025@ forever@.com all-right</p>
</div>
</ div>
    
  )
}

export default Footer