import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find((item) => item._id === id);

  const [size, setSize] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size first");
      return;
    }

    addToCart(product._id, size);
    setShowMsg(true);

    setTimeout(() => {
      setShowMsg(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-4 md:p-8">

      {/* Image */}
      <img
        src={product.image}
        className="w-full max-h-[500px] object-contain"
      />

      {/* Info */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        ⭐⭐⭐⭐☆ <span className="text-sm">(122)</span>

        <p className="text-2xl font-bold mt-4">${product.price}</p>

        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="mt-6">
          <p className="font-medium mb-2">Select Size</p>
          <div className="flex gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`border px-4 py-2 ${
                  size === s ? "bg-black text-white" : ""
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          ADD TO CART
        </button>

        {showMsg && (
          <div
            className="
              fixed bottom-6 left-1/2 -translate-x-1/2
              bg-black text-white
              px-5 py-3 rounded-full
              shadow-lg
              text-sm sm:text-base
              animate-bounce
              z-50
            "
          >
            ✅ Item added to cart
          </div>
        )}

        {/* Extra Info */}
        <div className="mt-6 text-sm text-gray-500">
          <p>✔ 100% Original product</p>
          <p>✔ Cash on delivery available</p>
          <p>✔ Easy return within 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
