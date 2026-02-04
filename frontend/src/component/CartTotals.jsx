import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const CartTotals = () => {
  const { getCartTotal, delivery_fee, cartItems, } =
    useContext(ShopContext);

  if (!cartItems || Object.keys(cartItems).length === 0) {
    return null;
  }

  const subtotal = getCartTotal();
  const total = subtotal + delivery_fee;

  

  return (
    <div className="w-full lg:w-[380px] lg:sticky lg:top-24 h-fit">
      <div className="border rounded-xl p-6 shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-6 border-b pb-3">
          Cart Totals
        </h2>

        <div className="flex justify-between mb-4 text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-700">
          <span>Delivery Fee</span>
          <span className="font-medium">${delivery_fee}</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total</span>
          <span>${total}</span>
        </div>
        {/* <button onClick={() => navigate("/place-order")} className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button> */}
      </div>
    </div>
  );
};

export default CartTotals;
