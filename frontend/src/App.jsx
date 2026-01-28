import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Order from './pages/Orders'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ProductDetails from './pages/ProductDetails'


const App = () => {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
 
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/collection' element={<Collection/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product/:id' element={<ProductDetails />} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/place-order' element={<PlaceOrder />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/order' element={<Order/>} />
  

    </Routes>
    <Footer />

    </div>
  )
}

export default App