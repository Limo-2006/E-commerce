import React, { useState } from 'react';
import { ShopContext } from './ShopContext';
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
 
const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;

const [cartItems, setCartItems] = useState({});
const navigate = useNavigate();


const addToCart = (itemId, size) => {
    if (!size) return alert("Please select size");

    setCartItems(prev => {
      const updated = { ...prev };

      if (!updated[itemId]) {
        updated[itemId] = {};
      }

      if (!updated[itemId][size]) {
        updated[itemId][size] = 1;
      } else {
        updated[itemId][size] += 1;
      }

      return updated;
    });
  };

  // ✅ Total cart count
  const getCartCount = () => {
    let count = 0;
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        count += cartItems[item][size];
      }
    }
    return count;
  };


const getCartTotal = () => {
  let total = 0;

  for (const itemId in cartItems) {
    const itemInfo = products.find(
      (product) => product._id === itemId
    );

    if (!itemInfo) continue;

    for (const size in cartItems[itemId]) {
      const quantity = cartItems[itemId][size];

      if (quantity > 0) {
        total += itemInfo.price * quantity;
      }
    }
  }

  return total;
};



  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartCount,
    getCartTotal, navigate
  };
  return (
    <ShopContext.Provider value={value}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider


