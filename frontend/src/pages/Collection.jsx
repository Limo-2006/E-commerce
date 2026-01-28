import React, { useState, useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import ProductItem from '../component/ProductItem';
import FilterPanel from './FilterPanel';




const Collection = () => {
  const { products } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("Relevant");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = (value, state, setState) => {
    state.includes(value)
      ? setState(state.filter((i) => i !== value))
      : setState([...state, value]);
  };

  /* ================= FILTER + SEARCH ================= */
  const filteredProducts = products.filter((p) => {
    const catMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(products.category);

    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.includes(products.category);

    const searchMatch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return catMatch && typeMatch && searchMatch;
  });

  /* ================= SORT ================= */
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Low to High") return a.price - b.price;
    if (sortOption === "High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-full px-[4%] py-10 flex gap-10 flex-col lg:flex-row">

      {/* ================= FILTER PANEL ================= */}
      <FilterPanel
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        toggleFilter={toggleFilter}
      />

      {/* ================= RIGHT CONTENT ================= */}
      <div className="w-full lg:w-3/4 lg:ml-[25%]">

        {/* MOBILE SEARCH + FILTER */}
        <div className="flex gap-3 mb-4 lg:hidden">
          <input
            className="border px-3 py-2 rounded w-full"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setShowFilter(true)}
            className="border px-4 py-2 rounded"
          >
            Filter
          </button>
        </div>

        {/* TITLE + SORT */}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">ALL COLLECTIONS</h2>
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

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.length ? (
            sortedProducts.map((item) => (
              <ProductItem key={item._id} {...item} />
            ))
          ) : (
            <p className="text-gray-500 col-span-4">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
