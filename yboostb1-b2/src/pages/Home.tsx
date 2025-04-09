import React from "react";
import FondH from "../Public/Fond3.png";

const Home = () => {
  return (
    <section className=" p-4 relative flex justify-center w-screen h-screen">
      <div className="w-full bg-cover bg-center relative rounded-[25px]" style={{ backgroundImage: `url(${FondH})` }}>
        <div className="w-[25px] h-[25px] absolute bg-red-0 bottom-0 right-[305px] rounded-full shadow-[8.5px_9px_0_#fff]">
        </div>
        <div className="w-[25px] h-[25px] absolute bg-red-0 bottom-[10.5%] right-[0px] rounded-full shadow-[8.5px_9px_0_#fff]">
        </div>
        <div className="absolute top-[35%] left-8 text-left text-white">
            <h1 className="text-2xl sm:text-4xl md:text-6xl  mb-4">ShakeLabs</h1>
            <p className="text-sm sm:text-lg md:text-xl font-medium max-w-xl">
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

    </section>  
  );
};

export default Home;
