import React, { useState, useEffect, useRef } from 'react';
import Image from '../Composant/image.tsx';
import Ndt from '../Composant/ndt.tsx';

const Cocktail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsVisible(true);
    // Animation Shake
    const element = document.getElementById("shakeDiv");
    element?.classList.add("shake");
    // Retirer l'animation après qu'elle ait été exécutée
    setTimeout(() => {
      element?.classList.remove("shake");
    }, 1000);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    // Vérifier si le clic est à l'extérieur de la div affichée et du bouton
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <div className="bg-black min-h-screen text-gray-300 flex flex-col items-center pt-6 relative">
      {/* Styles en ligne pour l'animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
          }
          .shake {
            animation: shake 1s ease-in-out;
          }
        `}
      </style>

      <h1 className="text-4xl font-bold text-green-400">
        Shake <span className="text-blue-300">LAB</span>
      </h1>

      <Image />
      <Ndt />

      {/* Bouton Shake */}
      <div
        ref={buttonRef}
        className="flex flex-column w-screen h-auto justify-center"
        onClick={handleClick}
      >
        <div className="bg-gradient-to-r from-green-600 via-amber-300 to-green-600 w-36 h-16 flex rounded-full mt-8 justify-center items-center cursor-pointer">
          <h1 className="text-2xl font-bold text-white">Shake !</h1>
        </div>
      </div>

      {/* Div animée qui apparaît en bas */}
      {isVisible && (
        <div
          id="shakeDiv"
          ref={modalRef}
          className="bg-gradient-to-br from-slate-500 to-emerald-300 w-full h-64 absolute bottom-0 flex p-10 text-white text-xl rounded-t-lg flex-col"
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="h-auto w-screen flex">
            <div className=" w-auto h-auto flex ">
              <h1 className="text-white font-bold">Nom Cocktail</h1>
            </div>
            <div className=" w-auto h-auto text-right ml-24">
              <h1 className="text-white font-bold"> Difficulté </h1>
            </div>
          </div>
            <div className=" w-32 h-auto">
              <h1 className="text-white font-bold text-right">Temps</h1>
            </div>
            <div className='w-full h-auto  mt-4'>
              <p className="text-white font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iusto illo nobis maxime. Tenetur reprehenderit eum quam pariatur vel quis?</p>
            </div>
          </div>
      )}
    </div>
  );
};

export default Cocktail;
