import React from 'react';

const Landing = ({ image, name }) => {
    return (
        <div className="w-[150px]">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-[0_0_9px_rgba(0,0,0,0.2)]">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-32 object-cover" 
                />
                <div className="p-2">
                    <h3 className="text-white text-sm font-semibold">{name}</h3>
                </div>
            </div>               
        </div>
    );
};

export default Landing;