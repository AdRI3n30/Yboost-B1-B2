import React from "react";
import FondH from "../Public/Fond3.png";
import fleche from "../Public/weui_arrow-outlined.png";
import cock from "../Public/cock.jpeg";
import bg from "../Public/bg.png";

const Home = () => {
  return (
    <>
      <section className=" p-4 relative flex justify-center w-full h-screen mb-12">
        <div className="w-full bg-cover bg-center relative rounded-[25px] shadow-lg " style={{ backgroundImage: `url(${FondH})` }}>
          <div className="w-[25px] h-[25px] absolute bg-red-0 bottom-0 right-[305px] rounded-full shadow-[8.5px_9px_0_#fff]">
          </div>
          <div className="w-[25px] h-[25px] absolute bg-red-0 bottom-[10.5%] right-[0px] rounded-full shadow-[8.5px_9px_0_#fff]">
          </div>
          <div className="absolute top-[35%] left-8 text-left text-white">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-poppins  mb-4">ShakeLabs</h1>
              <p className="text-sm sm:text-lg md:text-xl font-poppins font-light max-w-xl">
                Bienvenue dans l’univers des cocktails où chaque recette <br />
                raconte une histoire et chaque gorgée éveille les sens
              </p>
              </div>
        </div>

          <div className=" absolute bg-white w-[325px] h-[90px] bottom-0 right-0 border-white border-8 rounded-3xl ">
          </div>

          <button
              onClick={() => (window.location.href = "/recipes")}
              className=" absolute bottom-[2%] right-[1.5%] bg-white text-black w-[290px] h-[60px] rounded-[200px] shadow-md hover:bg-gray-200 transition duration-300 border-2 border-black text-sm sm:text-xl"
            >
              Explorer les recettes
            </button>

            <button
              onClick={() => (window.location.href = "#A_propos")}
              className=" absolute bg-center bg-contain w-[64px] h-[64px] bottom-[10%] left-[5%] rounded-[50%] border border-white border-2 "
            >
              <img src={fleche} alt="fleche" />
            </button>
      </section> 

        <section className="mb-20 w-full"  style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="p-12 text-center ">
            <h1 className="text-4xl  font-poppins text-black">
              Plus qu’un cocktail, une <strong>expérience</strong>
            </h1>
            <p className="text-2xl text-black mt-5 px-4  font-poppins mx-auto">
              Chez ShakeLabs, chaque boisson est pensée comme un voyage sensoriel.
              <br />
              Des classiques revisités aux créations originales, nous explorons
              l’art du cocktail avec passion, précision… et <br />
              une pointe d’audace.
            </p>
          </div>

          <div className="mt-20 w-full flex items-around ">
            <div className="pl-[15%] flex justify-center items-center flex-col w-full">
              <h1 className=" text-4xl font-poppins font-semibold mb-6">
                Notre Mission ?
              </h1>
              <p className="text-center text-2xl">
                Faire découvrir (ou redécouvrir) le plaisir de savourer <br />
                un bon cocktail, que ce soit chez soi ou entre amis, en <br />
                proposant des recettes accessibles, des conseils de pro <br />
                et des inspirations venues du monde entier.
              </p>
              
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="bg-gray-500 w-[50%] h-[250px] sm:h-[500px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${cock})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
            </div>
          </div>

          <div className="mt-20 text-center px-4">
            <h1 className="text-3xl font-poppins text-black">
              <strong>Découvrez</strong> des cocktails et leurs recettes incontournables <br />
              pour <strong>épater</strong> vos invités et <strong>éveiller</strong> vos papilles
            </h1>
            <div className="w-1/2 sm:w-1/3 h-[2px] bg-black mt-4 mx-auto"></div>
          </div>
        </section>
    </>    
  );
};

export default Home;
