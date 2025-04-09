import React from 'react';
import Navigation_barre from '../Composant/Navigation_barre.tsx';

const LandingPage = () => {
  return (
    <div className="bg-[url('https://my.alfred.edu/zoom/_images/foster-lake.jpg')] w-full h-screen bg-no-repeat bg-cover">
      {/* Wrapper pour la page avec image de fond */}
      <div className="relative w-full h-screen">
        
        {/* Navigation barre en avant-plan */}
        <Navigation_barre />
        
        {/* Contenu principal */}
        <div className="flex w-full h-full relative">
          
          {/* Image du cocktail */}
          <img
            id="cocktail_acc"
            src="cocktail1.png"
            className="absolute bottom-0 left-[10%] w-[600px] h-[600px]"
            alt="Cocktail"
          />
          
          {/* Contenu du texte */}
          <div className="flex flex-col items-center justify-center absolute top-1/5 right-[15%] w-[500px] border-4 border-indigo-500 p-6">
            <h1 className="text-7xl">COCKTAILS</h1>
            <p className="text-2xl mt-4">
              Laissez-vous envoûter par l'élégance de nos cocktails, où chaque gorgée est une invitation à l'évasion.
            </p>
            <button className="text-xl font-semibold py-3 px-6 mt-6 border-2 border-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition-all">
              Découvrir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
