import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Cocktail {
  Id: number;
  Name: string;
  Descri: string;
  Id_difficulte: string;
  Image: string;
  Ingredients: string;
  Temps: string;
}

const CocktailList: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/cocktails");

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setCocktails(data);
      } catch (error: any) {
        console.error("Erreur lors de la récupération des cocktails :", error.message);
        setError(`Impossible de récupérer les cocktails. Détails : ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchCocktails();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-8">
        Shake <span className="text-blue-300">LAB</span>
      </h1>
      {loading ? (
        <p className="text-center text-lg">Chargement des cocktails...</p>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cocktails.map((cocktail) => (
            <Link
              key={cocktail.Id}
              to={`/cocktails/${cocktail.Id}`} // Lien vers la page de détails du cocktail
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-[0_0_9px_rgba(0,0,0,0.2)]"
            >
              <div className="relative">
                <img
                  src={cocktail.Image}
                  alt={cocktail.Name}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="p-2">
                <h2 className="text-white text-sm font-semibold">{cocktail.Name}</h2>
                <p className="text-gray-400 text-xs">{cocktail.Id_difficulte}</p>
                <p className="text-gray-400 text-xs">{cocktail.Temps} min</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


export default CocktailList;
