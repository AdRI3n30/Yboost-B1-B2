import React from 'react';

const Landing = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[150px]">
                {/* Premier rectangle */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                        src="/Public/image.png" 
                        alt="Margarita" 
                        className="w-full h-32 object-cover" 
                    />
                    <div className="p-2">
                        <h3 className="text-white text-sm font-semibold">Margarita</h3>
                        <p className="text-gray-400 text-xs">easy</p>
                        <p className="text-gray-400 text-xs">5 min</p>
                    </div>
                </div>

                {/* Deuxième rectangle */}
                
            </div>
        </div>
    );
};

export default Landing;
