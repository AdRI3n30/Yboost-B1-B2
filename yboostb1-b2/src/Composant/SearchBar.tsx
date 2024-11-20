import React from 'react';

const SearchBar = () => {
    return (
        <>
            <div className="relative mt-3 w-60 h-8">
                <button className="absolute top-1 right-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                <input type="search" placeholder="Rechercher..." className="w-full h-full pl-4 rounded-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
            </div>

        </>

    );
};

export default SearchBar;
