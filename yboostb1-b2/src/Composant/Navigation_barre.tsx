import React from 'react';

const Navigation_barre = () => {
    return (
        <nav className="bg-white/30 backdrop-blur-md text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h4 className="text-xl font-bold text-black ml-[50px]">Shake<br/>Lab</h4>
        <ul className="flex space-x-44 mr-[5rem]">
          <li>
            <a href="#" className="hover:text-gray-400 transition text-black">Accueil</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition text-black">Cocktails</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition text-black">À propos</a>
          </li>
        </ul>
      </div>
    </nav>
    );
    };

export default Navigation_barre;