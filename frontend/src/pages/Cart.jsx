import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import CartTotals from "../component/CartTotals";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const { products, currency, cartItems,} = useContext(ShopContext);
 const navigate = useNavigate();

  const cartData = useMemo(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }

    return tempData;
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Title text1={"Your"} text2={"CART"} />

      {/* EMPTY CART */}
      {cartData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Your cart is empty 🛒
        </p>
      )}

      {/* CART ITEMS */}
      <div className="space-y-6 mt-10">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 items-center bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="w-32 h-32 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1 w-full">
                <h3 className="text-lg font-semibold text-gray-800">
                  {productData.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  Size: <span className="font-medium">{item.size}</span>
                </p>

                <p className="text-gray-800 font-semibold mt-2">
                  {currency}
                  {productData.price}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Qty:</span>
                <div className="px-4 py-2 border rounded-lg text-lg font-medium">
                  {item.quantity}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART TOTALS */}
      {cartData.length > 0 && (
        <div className="mt-12 flex justify-end">
          <div className="w-full sm:w-[380px]">
            <CartTotals />
          </div>
        </div>
      )}  <button
          onClick={() => navigate("/place-order")}
          className="w-full bg-black text-white py-3 mt-6 hover:bg-gray-800"
        >
          PROCEED TO CHECKOUT
        </button>
    </div>
  );
};

export default Cart;
