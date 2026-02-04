import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (itemId, size) => {
    if (!size) return alert("Please select size");

    setCartItems((prev) => {
      const updated = { ...prev };

      if (!updated[itemId]) updated[itemId] = {};

      updated[itemId][size] = (updated[itemId][size] || 0) + 1;

      return updated;
    });
  };

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = (itemId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, size);
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: quantity,
      },
    }));
  };

  /* ---------------- REMOVE ITEM ---------------- */
  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (!updated[itemId]) return prev;

      delete updated[itemId][size];

      if (Object.keys(updated[itemId]).length === 0) {
        delete updated[itemId];
      }

      return updated;
    });
  };

  /* ---------------- CART COUNT ---------------- */
  const getCartCount = () => {
    let count = 0;
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        count += cartItems[item][size];
      }
    }
    return count;
  };

  /* ---------------- CART TOTAL ---------------- */
  const getCartTotal = () => {
    let total = 0;

    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;

      for (const size in cartItems[itemId]) {
        total += product.price * cartItems[itemId][size];
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
    updateQuantity,
    removeFromCart,
    getCartCount,
    getCartTotal,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
