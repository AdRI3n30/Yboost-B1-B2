import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un cocktail..."
      className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-full py-2 pl-4 pr-10 focus:outline-none mt-2"
      onChange={(e) => setSearchQuery(e.target.value)} 
    />
  );
};

export default SearchBar;
