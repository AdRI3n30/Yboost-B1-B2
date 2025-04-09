import React from 'react';
import SearchBar from './SearchBar.tsx';
import Logo from './Logo.tsx';

const Template_logo = ({enableSearchBar  = true}) => {
    if (enableSearchBar) {
        return (
        <div className="z-50 w-full top-0 pb-4 fixed bg-black text-gray-300 flex flex-col items-center pt-6 p-4">
        <h1 className="text-4xl font-bold text-green-400">
        Shake <span className="text-blue-300">LAB</span>
        </h1>
        <SearchBar setSearchQuery={undefined} />      
        </div>
    );
    } else {
    return (
        <div className="z-50 w-full top-0 pb-4 fixed bg-black text-gray-300 flex flex-col items-center pt-6 p-4">
            <Logo />    
        </div>
    )
    }  
};

export default Template_logo;