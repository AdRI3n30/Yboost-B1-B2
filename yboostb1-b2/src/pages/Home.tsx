import React from "react";
import FondH from "../Public/Fond_home.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-4 sm:p-8">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={FondH}
          alt="Fond Home"
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">

            <div className="absolute top-[35%] left-8 text-left">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">ShakeLabs</h1>
            <p className="text-sm sm:text-lg md:text-xl font-medium max-w-xl">
              Bienvenue dans l’univers des cocktails où chaque recette <br />
              raconte une histoire et chaque gorgée éveille les sens
            </p>
            </div>

          <div className="absolute bottom-[25%] left-[69%]">
            <div className="absolute ml-[-3.5%] w-14 sm:w-22 h-[1.5px] bg-white rotate-45" />
            <div className="mt-6 bg-transparent py-3 px-5 rounded-lg border border-white shadow-md max-w-sm">
              <p className="text-sm sm:text-lg text-white font-semibold text-left">
                <strong>Orange Ripple</strong> <br />
                4 cl de liqueur de cassis <br />
                4 cl de vodka <br />
                8 cl de jus d'orange frais
              </p>
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/recipes")}
            className="mt-[60%] ml-[72%] bg-white text-black py-3 px-[7%] rounded-2xl shadow-md hover:bg-gray-200 transition duration-300 border-2 border-black text-sm sm:text-xl"
          >
            Explorer les recettes
          </button>
        </div>
      </div>

      {/* Section Expérience */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl sm:text-5xl font-sans text-black">
          Plus qu’un cocktail, une <strong>expérience</strong>
        </h1>
        <p className="text-lg sm:text-2xl text-black mt-5 px-4 max-w-4xl mx-auto">
          Chez ShakeLabs, chaque boisson est pensée comme un voyage sensoriel.
          <br />
          Des classiques revisités aux créations originales, nous explorons
          l’art du cocktail avec passion, précision… et <br />
          une pointe d’audace.
        </p>
      </div>

      {/* Section Mission */}
      <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Notre Mission ?
          </h1>
          <p className="text-lg sm:text-2xl">
            Faire découvrir (ou redécouvrir) le plaisir de savourer <br />
            un bon cocktail, que ce soit chez soi ou entre amis, en <br />
            proposant des recettes accessibles, des conseils de pro <br />
            et des inspirations venues du monde entier.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-gray-500 w-full max-w-sm sm:max-w-md h-[250px] sm:h-[500px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      {/* Section Recettes */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-sans text-black">
          <strong>Découvrez</strong> des cocktails et leurs recettes incontournables <br />
          pour <strong>épater</strong> vos invités et <strong>éveiller</strong> vos papilles
        </h1>
        <div className="w-1/2 sm:w-1/3 h-[2px] bg-black mt-4 mx-auto"></div>
      </div>
    </div>
  );
};

export default Home;
