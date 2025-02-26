import React, { useState, useEffect } from "react";
import Landing from "../Composant/Landing.tsx";
import { Link } from "react-router-dom";
import CustomButton from "../Composant/Button.tsx";
import Templet_cocktail from "../Composant/templet_cocktail.tsx";
import Template_logo from "../Composant/template_logo.tsx";
import NavigationBar from "../Composant/NavigationBar.tsx";

const Home = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isPortrait) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-600">
        <h1 className="text-3xl font-bold text-center">
          Veuillez passer en mode portrait pour voir le contenu.
        </h1>
      </div>
    );
  }

  return (
    <div className='bg-black h-screen'>
    <Template_logo />

    <div className='absolute w-full h-auto bg-black mt-24 pb-20 '>
      <div className='flex justify-center '>
    <div id='contenue' className='relative flex flex-wrap gap-8 justify-evenly mt-8 max-w-3xl' >
    <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />

      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
     

    </div>
    </div>
    </div>
          <NavigationBar />
      </div>
  );
};

export default Home;

