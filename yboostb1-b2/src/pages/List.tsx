import React, { useState, useEffect } from "react";
import CocktailList from "../Composant/tasks.tsx";
import Template_logo from "../Composant/template_logo.tsx";
import FooterButtons from "../Composant/FooterButton.tsx"; 

const List = () => {
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
    <div>
      <Template_logo />
      <CocktailList />
      <div className="bg-black h-screen">
        <FooterButtons /> 
      </div>
    </div>
  );
};

export default List;
