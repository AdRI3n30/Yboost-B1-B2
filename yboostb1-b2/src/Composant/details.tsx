import React from 'react';


const Details = () => {
  return (
    <div>
        <div className="border-2 border-yellow-400 rounded-full overflow-hidden my-8">
            <img src="cocktail.png" alt="Tequila Sunrise" className="w-full h-auto block" />
            </div>
            <div className="content">
            <h2 className="text-lg mb-1 text-white">Tequila Sunrise</h2>
            <div className="flex justify-between text-sm text-gray-400">
                <span className="difficulty">easy</span>
                <span className="time">5 min</span>
            </div>
            </div>
    </div>
  );
};

export default Details;