import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import shakerimg from "../assets/shaker-a-cocktail_1.png";
import solarimg from "../assets/solar_hourglass-broken.png";
import solarstarimg from "../assets/solar_stars-broken.png";

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

const CocktailFusion: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<CocktailType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shakeDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cocktails/${id}`);
        if (!response.ok) throw new Error("Erreur de chargement.");
        const data = await response.json();
        setCocktail(data);
      } catch (err) {
        console.error(err);
        setError("Impossible de récupérer les informations du cocktail.");
      }
    };
    fetchCocktail();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isVisible && shakeDivRef.current && !shakeDivRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible]);

  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!cocktail) return <div className="text-center mt-10">Chargement...</div>;

  return (
    <div className="flex flex-col md:flex-row p-2 md:p-10 justify-center items-center min-h-screen relative font-poppins">
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

      {/* Image cocktail */}
      <div className="mt-8 md:mt-32 w-full flex justify-center items-center p-2">
        <img
          className="rounded-[30px] md:rounded-[55px] shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-lg max-h-[350px] md:max-h-[650px] object-cover"
          src={`/image_cock/${cocktail.Image}`}
          alt={cocktail.Name}
        />
      </div>

      {/* Infos cocktail */}
      <div className="w-full md:pl-10 mt-8 md:mt-0 flex flex-col">
        <div className="mb-6 md:mb-10">
          <h1 className="font-instrument italic font-medium text-3xl sm:text-5xl md:text-[80px] break-words">{cocktail.Name}</h1>
          <p className="w-full md:w-4/5 mt-2 md:mt-[-15px] font-light text-base sm:text-lg pt-6">{cocktail.Description || "Aucune description."}</p>
        </div>

        <div className="mb-8 md:mb-[50px] shadow-custom-inset-2 p-4 sm:p-6 md:p-8 rounded-3xl max-h-[180px] md:max-h-[220px] w-full md:w-[60%] bg-white/10 overflow-y-auto">
          <ul className="list-disc pl-6">
            {cocktail.Ingredients.map((ingredient) => (
              <li key={ingredient.Ingredient_Id} className="font-light pb-2 sm:pb-[15px] text-sm sm:text-base">
                {ingredient.Quantity} - {ingredient.Name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between md:justify-around items-center w-full md:pr-[200px] gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-12 h-12 md:w-[60px] md:h-[60px] flex justify-center items-center">
              <img src={solarimg} alt="Temps" className="w-6 h-6 md:w-auto md:h-auto" />
            </div>
            <span className="text-sm sm:text-base">{cocktail.Temps ? `${cocktail.Temps} min` : "Non spécifié"}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-12 h-12 md:w-[60px] md:h-[60px] flex justify-center items-center">
              <img src={solarstarimg} alt="Note" className="w-6 h-6 md:w-auto md:h-auto" />
            </div>
            <span className="text-sm sm:text-base">Note</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-12 h-12 md:w-[60px] md:h-[60px] flex justify-center items-center">
              <img className="h-6 md:h-[35px]" src={shakerimg} alt="Difficulté" />
            </div>
            <span className="text-sm sm:text-base">{cocktail.Difficulte}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailFusion;
