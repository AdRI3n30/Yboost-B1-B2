import React from 'react';

const Landing = ({ image, name, difficulty, time }) => {
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
                    <p className="text-gray-400 text-xs">{difficulty}</p>
                    <p className="text-gray-400 text-xs">{time}</p>
                </div>
            </div>               
        </div>
    );
};

export default Landing;