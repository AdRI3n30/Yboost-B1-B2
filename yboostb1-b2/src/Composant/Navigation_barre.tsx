import React from 'react';

const Navigation_barre = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 font-poppins bg-white/30 backdrop-blur-md text-white p-6 shadow-md shadow-[#efe9e1]">
      <div className="container mx-auto flex justify-between items-center">
        <h4 className="text-xl font-bold text-black ml-[50px]">Shake<br/>Lab</h4>
        <ul className="flex space-x-44 mr-[5rem]">
          <li>
            <a
              href="#"
              className="text-lg text-black relative hover:text-gray-400 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-black relative hover:text-gray-400 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Cocktails
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-black relative hover:text-gray-400 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              À propos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation_barre;
