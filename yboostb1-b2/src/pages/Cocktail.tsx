import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Ndt from "../Composant/ndt.tsx";

interface Ingredient {
  Ingredient_Id: number;
  Name: string;
  Quantity: string;
}

interface CocktailType {
  Id: number;
  Name: string;
  Description: string;  
  Difficulte: string;
  Image: string | null;
  Temps: number | null;
  Ingredients: Ingredient[];
}

const Cocktail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<CocktailType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shakeDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cocktails/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setCocktail(data);
      } catch (err: any) {
        console.error("Erreur:", err);
        setError("Impossible de récupérer les informations du cocktail.");
      }
    };

    fetchCocktail();
  }, [id]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isVisible && shakeDivRef.current && !shakeDivRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible]);

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!cocktail) {
    return <div className="text-white text-center mt-10">Chargement...</div>;
  }

  const handleClick = () => {
    setIsVisible(true);
    const element = document.getElementById("shakeDiv");
    element?.classList.add("shake");
    setTimeout(() => {
      element?.classList.remove("shake");
    }, 1000);
  };

  return (
    <div className="bg-black min-h-screen text-gray-300 flex flex-col items-center pt-6 relative">
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
          }
          .shake {
            animation: shake 1s ease-in-out;
          }
        `}
      </style>

      <h1 className="text-4xl font-bold text-green-400 mb-4">
        {cocktail.Name} <span className="text-blue-300">Details</span>
      </h1>

      <img
        src={cocktail.Image || "/default-cocktail.jpg"}
        alt={cocktail.Name}
        className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
      />

      <Ndt
        name={cocktail.Name}
        difficulty={cocktail.Difficulte}
        time={cocktail.Temps || 0}
      />

      <div className="flex flex-column w-screen h-auto justify-center" onClick={handleClick}>
        <div className="bg-gradient-to-r from-green-600 via-amber-300 to-green-600 w-36 h-16 flex rounded-full mt-8 justify-center items-center cursor-pointer">
          <h1 className="text-2xl font-bold text-white">Shake !</h1>
        </div>
      </div>

      {isVisible && (
        <div
          id="shakeDiv"
          ref={shakeDivRef}
          className="bg-gradient-to-br from-slate-500 to-emerald-300 w-full h-auto absolute bottom-0 flex flex-col p-6 text-white text-xl rounded-t-lg transition-transform"
        >
          <div className="flex justify-between">
            <h1 className="font-bold">Nom : {cocktail.Name}</h1>
            <h1 className="font-bold">Difficulté : {cocktail.Difficulte}</h1>
          </div>

          <div className="mt-4">
            <h1 className="font-bold">Temps : {cocktail.Temps ? `${cocktail.Temps} minutes` : "Non spécifié"}</h1>
          </div>

          <div className="mt-4">
            <p className="font-bold">Description : {cocktail.Description || "Aucune description disponible"}</p>
          </div>

          <div className="mt-4">
            <h1 className="font-bold">Ingrédients :</h1>
            <ul className="list-disc pl-6">
              {cocktail.Ingredients.map((ingredient) => (
                <li key={ingredient.Ingredient_Id} className="text-lg">
                  {ingredient.Quantity} - {ingredient.Name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cocktail;
