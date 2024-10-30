import React from 'react';

const Landing = () => {
    return (
      <><div className="relative w-11/12 max-w-md mt-4">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-full py-2 pl-4 pr-10 focus:outline-none" />
        <button className="absolute right-3 top-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.95 4.95-1.42 1.42-4.95-4.95zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div><button className="absolute top-6 right-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button><div className="grid grid-cols-2 gap-4 mt-6 w-11/12 max-w-md">
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <img src="/Public/image.png" alt="Margarita" className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="text-white text-sm font-semibold">Margarita</h3>
              <p className="text-gray-400 text-xs">easy</p>
              <p className="text-gray-400 text-xs">5 min</p>
            </div>
            <button className="absolute top-2 right-2 text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
              <path fill="#FFD700" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
            </svg>

            </button>
          </div>
        </div></>
    );
};

export default Landing