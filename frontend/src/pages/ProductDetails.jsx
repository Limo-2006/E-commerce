import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";


const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find(
    (item) => item._id === id
  );

const [size, setSize] = useState(product.sizes[false] || ""); 


  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-10">

      {/* Image */}
      <img src={product.image} className="w-full max-h-[500px] object-contain" />

      {/* Info */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        ⭐⭐⭐⭐☆ <span className="text-sm">(122)</span>

        <p className="text-2xl font-bold mt-4">${product.price}</p>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>


         <div className="mt-6">
          <p className="font-medium mb-2">Select Size</p>
          <div className="flex gap-2">
            {product.sizes.map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`border px-4 py-2 ${
                  size === s ? 'bg-black text-white' : ''
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button onClick={() =>
        addToCart(product._id, size)
        } className="mt-6 bg-black text-white px-6 py-3">
          ADD TO CART
        </button>

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




