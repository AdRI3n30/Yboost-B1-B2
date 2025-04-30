import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import cocktailPlaceholder from "../image/cocktail2.jpg";
import shakerimg from "../image/shaker-a-cocktail_1.png";
import solarimg from "../image/solar_hourglass-broken.png";
import solarstarimg from "../image/solar_stars-broken.png";
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

  const handleShakeClick = () => {
    setIsVisible(true);
    const el = document.getElementById("shakeDiv");
    el?.classList.add("shake");
    setTimeout(() => el?.classList.remove("shake"), 1000);
  };

  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!cocktail) return <div className="text-center mt-10">Chargement...</div>;

  return (
    <div className="flex p-10 justify-center items-center min-h-screen relative font-poppins">
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

      <div className="w-full flex justify-center items-center">
        <img
          className="rounded-[55px] shadow-lg h-[650px] object-cover"
          src={`/image_cock/${cocktail.Image}`}
          alt={cocktail.Name}
        />
      </div>

      <div className="w-full pl-10">
        <div className="mb-10">
          <h1 className="font-instrument italic font-medium text-[80px]">{cocktail.Name}</h1>
          <p className="w-4/5 mt-[-15px] font-light">{cocktail.Description || "Aucune description."}</p>
        </div>

        <div className="mb-[50px] shadow-custom-inset-2 p-8 rounded-3xl w-[60%] bg-white/10">
          <ul className="list-disc pl-6">
            {cocktail.Ingredients.map((ingredient) => (
              <li key={ingredient.Ingredient_Id} className="font-light pb-[15px]">
                {ingredient.Quantity} - {ingredient.Name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-around items-center w-full pr-[200px]">
          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px] flex justify-center items-center">
              <img src={solarimg} alt="Temps" />
            </div>
            <span>{cocktail.Temps ? `${cocktail.Temps} min` : "Non spécifié"}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px]">
              <img src={solarstarimg} alt="Note" />
            </div>
            <span>Note</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl shadow-custom-inset p-2 w-[60px] h-[60px] flex justify-center items-center">
              <img className="h-[35px]" src={shakerimg} alt="Difficulté" />
            </div>
            <span>{cocktail.Difficulte}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailFusion;
