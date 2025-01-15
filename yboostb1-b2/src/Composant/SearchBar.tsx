import React from "react";

const SearchBar =() =>{
    return(
        <>
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-full py-2 pl-4 pr-10 focus:outline-none" />
        <button className="absolute right-3 top-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.95 4.95-1.42 1.42-4.95-4.95zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
        </>
    )

}


export default SearchBar

