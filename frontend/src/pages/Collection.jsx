import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../component/ProductItem";
import FilterPanel from "./FilterPanel";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("Relevant");
  const [searchQuery, setSearchQuery] = useState("");

  // MOBILE FILTER STATE
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = (value, state, setState) => {
    state.includes(value)
      ? setState(state.filter((i) => i !== value))
      : setState([...state, value]);
  };

  /* ================= FILTER + SEARCH ================= */
  const filteredProducts = products.filter((item) => {
    const catMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(item.subCategory);

    const searchMatch = item.name
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
    <div className="w-full px-[4%] py-10 flex gap-10">

      {/* DESKTOP FILTER PANEL */}
      <div className="hidden lg:block w-[22%]">
        <FilterPanel
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          toggleFilter={toggleFilter}
          isDesktop={true}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full lg:w-[78%]">
        {/* SEARCH + MOBILE FILTER BUTTON */}
        <div className="flex gap-3 mb-5">
          <input
            className="border px-3 py-2 rounded w-full"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setShowFilter(true)}
            className="border px-4 py-2 rounded lg:hidden"
          >
            Filter
          </button>
        </div>

        {/* MOBILE FILTER PANEL */}
        <div className="lg:hidden">
        {showFilter && (
          <FilterPanel
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            toggleFilter={toggleFilter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            
          />
        )}
        </div>

        {/* TITLE + SORT */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl tracking-widest font-medium">
            ALL COLLECTIONS
          </h2>

          <select
            className="border px-4 py-2 text-sm outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Relevant</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {sortedProducts.length ? (
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
            <p className="text-gray-500 col-span-4 text-center">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
