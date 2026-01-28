import React, { useState } from "react";

const FilterPanel = ({
  showFilter,
  setShowFilter,
  selectedCategories,
  setSelectedCategories,
  selectedTypes,
  setSelectedTypes,
  toggleFilter,
}) => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openType, setOpenType] = useState(false);

  return (
    <>
      {/* DARK OVERLAY */}
      <div
        onClick={() => setShowFilter(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${showFilter ? "opacity-100 visible" : "opacity-0 invisible"} lg:hidden`}
      />

      {/* FILTER PANEL */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 p-5
          transform transition-transform duration-300
          ${showFilter ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:w-full lg:z-auto`}
      >
        {/* MOBILE CLOSE */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-xl font-semibold">FILTERS</h2>
          <button
            onClick={() => setShowFilter(false)}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* CATEGORY */}
        <div className="border p-4 mb-4">
          <button
            onClick={() => {
              setOpenCategory(!openCategory);
              setOpenType(false); // auto-close other
            }}
            className="w-full flex justify-between items-center font-semibold"
          >
            Categories
            <span>{openCategory ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-3 space-y-2 text-gray-700 transition-all duration-300
              ${openCategory ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            {["Men", "Women", "Boys", "Girls"].map((cat) => (
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
          <button
            onClick={() => {
              setOpenType(!openType);
              setOpenCategory(false); // auto-close other
            }}
            className="w-full flex justify-between items-center font-semibold"
          >
            Type
            <span>{openType ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-3 space-y-2 text-gray-700 transition-all duration-300
              ${openType ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            {["Topwear", "Bottomwear", "Winterwear", "Dress", "Shirt"].map(
              (type) => (
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
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
