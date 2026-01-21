import React, { useState, useContext } from 'react';
// import { ShopContext } from '../context/ShopContextProvider';
import { ShopContext } from "../context/ShopContext";

import ProductItem from '../component/ProductItem';


const Collection = () => {
  const { products } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("Relevant");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // FILTER + SEARCH
  const filteredProducts = products.filter((product) => {
    // category
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // type
    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type);

    // search
    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && typeMatch && searchMatch;
  });

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Low to High") return a.price - b.price;
    if (sortOption === "High to Low") return b.price - a.price;
    return 0; // Relevant
  });

  return (
    <div className="w-full px-[4%] py-10 flex gap-10 flex-col lg:flex-row">

      {/* LEFT FILTERS */}
      <div className="w-full lg:w-1/4">
        <h2 className="text-xl font-semibold mb-5">FILTERS</h2>

        {/* SEARCH BAR */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border px-3 py-2 rounded outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="border p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">CATEGORIES</h3>

          <div className="space-y-2 text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() =>
                    toggleFilter(cat, selectedCategories, setSelectedCategories)
                  }
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* TYPE */}
        <div className="border p-4">
          <h3 className="text-lg font-semibold mb-3">TYPE</h3>

          <div className="space-y-2 text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() =>
                    toggleFilter(type, selectedTypes, setSelectedTypes)
                  }
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-3/4">

        {/* TITLE + SORT */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            ALL COLLECTIONS
            <span className="w-20 h-0.5 bg-gray-500"></span>
          </h2>

          <select
            className="border px-3 py-2 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Relevant</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

          {sortedProducts.length > 0 ? (
            sortedProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-4">No products found...</p>
          )}

        </div>

      </div>
    </div>
  );
}

export default Collection;