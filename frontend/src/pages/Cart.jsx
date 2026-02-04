import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import CartTotals from "../component/CartTotals";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, removeFromCart } =
    useContext(ShopContext);

  const navigate = useNavigate();

  /* ---------- PRODUCT MAP ---------- */
  const productMap = useMemo(() => {
    const map = {};
    products.forEach((p) => (map[p._id] = p));
    return map;
  }, [products]);

  /* ---------- CART DATA ---------- */
  const cartData = useMemo(() => {
    const data = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          data.push({
            id: `${productId}-${size}`,
            productId,
            size,
            quantity,
          });
        }
      }
    }
    return data;
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Title text1="Your" text2="CART" />

      {/* EMPTY CART */}
      {cartData.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-base">
          Your cart is empty 🛒
        </p>
      )}

      {/* CART ITEMS */}
      <div className="space-y-3 mt-4 md:space-y-6 md:mt-10">
        {cartData.map((item) => {
          const product = productMap[item.productId];
          if (!product) return null;

          return (
            <div
              key={item.id}
              className="
                relative flex flex-col sm:flex-row
                items-start sm:items-center
                gap-3 sm:gap-4
                bg-white rounded-2xl p-4 sm:p-5
                shadow-md transition
              "
            >
              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.productId, item.size)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>

              {/* IMAGE */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 w-full">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Size:{" "}
                  <span className="font-medium text-gray-700">{item.size}</span>
                </p>

                <p className="mt-1 sm:mt-2 font-semibold text-gray-800">
                  {currency}
                  {product.price}
                </p>
              </div>

              {/* QTY + SUBTOTAL */}
              <div className="flex flex-col items-start sm:items-end gap-1 sm:gap-2">
                {/* QUANTITY */}
                <div className="flex items-center border rounded-lg overflow-hidden h-8">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.size,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity <= 1}
                    className="px-2 sm:px-3 text-base sm:text-lg hover:bg-gray-100 disabled:opacity-40"
                  >
                    −
                  </button>

                  <span className="px-3 sm:px-4 text-sm sm:text-base font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.size,
                        item.quantity + 1
                      )
                    }
                    className="px-2 sm:px-3 text-base sm:text-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* SUBTOTAL */}
                <div className="text-left sm:text-right text-xs sm:text-sm mt-1">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    {currency}
                    {product.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART TOTALS (UNCHANGED) */}
      {cartData.length > 0 && (
        <div className="mt-12 flex justify-end">
          <div className="w-full sm:w-[380px]">
            <CartTotals />
          </div>
        </div>
      )}

      {/* CHECKOUT */}
      {cartData.length > 0 && (
       <div className="mt-6 flex justify-end">
  <button
    onClick={() => navigate("/place-order")}
    className="
      w-full sm:w-[380px]
      bg-black text-white py-3
      hover:bg-gray-800 transition
    "
  >
    PROCEED TO CHECKOUT
  </button>
</div>

      )}
    </div>
  );
};

export default Cart;
