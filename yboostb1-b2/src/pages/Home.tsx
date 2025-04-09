import React, { useState, useEffect } from "react";
import Landing from "../Composant/Landing.tsx"; 
import { Link } from "react-router-dom";
import CustomButton from "../Composant/Button.tsx";
import Template_logo from "../Composant/template_logo.tsx";
import SearchBar from "../Composant/SearchBar.tsx";
import FooterButtons from "../Composant/FooterButton.tsx"; 

const Home = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [cocktails, setCocktails] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    const fetchCocktails = async () => {
      try {
        const response = await fetch('http://localhost:5000/cocktails');
        const data = await response.json();
        setCocktails(data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails:", error);
      }
    };

    window.addEventListener("resize", handleResize);
    fetchCocktails(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredCocktails = cocktails.filter((cocktail) => {
    const nameMatch = cocktail.Name.toLowerCase().includes(searchQuery.toLowerCase());
    const ingredientsMatch = cocktail.Ingredients && Array.isArray(cocktail.Ingredients) &&
      cocktail.Ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return nameMatch || ingredientsMatch; 
  });

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
    <div className="bg-black h-screen">
      <Template_logo />

      <div className="flex justify-center mt-10">
        <SearchBar setSearchQuery={setSearchQuery} /> 
      </div>

      <div className="absolute w-full h-auto bg-black mt-24 pb-20">
        <div className="flex justify-center">
          <div
            id="contenue"
            className="relative flex flex-wrap gap-8 justify-evenly mt-8 max-w-3xl"
          >
            {filteredCocktails.map((cocktail, index) => (
              <Landing 
                key={index} 
                name={cocktail.Name} 
                image={cocktail.Image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black h-screen">
        <FooterButtons /> 
      </div>
    </div>
  );
};

export default Home;
