import React from 'react'
import LimoLogo from "../assets/limo.png"
import Search_iconLogo from "../assets/Search_icon.png"
import ProfileLogo from "../assets/Profile.png"
import Shopping_cartLogo from "../assets/Shopping_cart.png"
import MenuLogo from "../assets/menu.png"
import DropdownLogo from "../assets/dropdown.png"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


 const Navbar = () => {

 const {getCartCount} = useContext(ShopContext)

 const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-4 font-medium'>
   <Link to='/'> 
 <p className='text-2.5xl '>Limo’s</p><p>
—— STORE ——
</p>
    </Link>
    
    <ul className='hidden sm:flex gap-5 text-[18px] text-black py-6 pb-8'>
    <NavLink to='/' className='flex flex-col items-center gap-1'>
    <p>HOME</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
    </NavLink>
    <NavLink to='/about' className='flex flex-col items-center gap-1'>
    <p>ABOUT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
    </NavLink>
    <NavLink to='/collection' className='flex flex-col items-center gap-1'>
    <p>COLLECTION</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
    </NavLink>
    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
    <p>CONTACT</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
    </NavLink>

    </ul>

    <div className='flex items-center gap-6'>
    <img src={Search_iconLogo} className='w-5 cursor-pointer'/>

    <div className='group relative'>
    <Link to={'/login'} ><img src={ProfileLogo} className='w-5 cursor-pointer' /></Link>
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>

    <p className='cursor-pointer hover:text-black'>My Profile</p>
    <p className='cursor-pointer hover:text-black'>Oders</p>
    <p className='cursor-pointer hover:text-black'>Logout</p>
    </div>
    </div>
    </div>
    <Link to='/Cart' className='relative'>
    <img src={Shopping_cartLogo} className='w-5' />

    {getCartCount() > 0 && (
    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
    )}
    </Link>
    <img onClick={() =>setVisible(true)} src={MenuLogo} className='w-5 cursor-pointer sm:hidden' />

    </div>

    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
    <div className='flex flex-col text-gray-600'>
    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
    <img className='h-4 rotate-180 '  src={DropdownLogo} />
    <p>Back</p>
    </div>
    <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
    <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
    <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
    <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

    </div>
    
    
    </div>


    </div>
  )
}

export default Navbar
