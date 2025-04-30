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
    <div className="min-h-screen text-white px-6 py-10">
      {loading ? (
        <p className="text-center text-lg">Chargement des cocktails...</p>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {cocktails.map((cocktail) => (
            <Link
              key={cocktail.Id}
              to={`/cocktails/${cocktail.Id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-black"
            >
              <div className="w-[200px] aspect-[1/1] overflow-hidden">
                <img
                  src={cocktail.Image}
                  alt={cocktail.Name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold mb-1">{cocktail.Name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Difficulté : {cocktail.Id_difficulte}
                </p>
                <p className="text-sm text-gray-600">
                  Temps : {cocktail.Temps} min
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>

  );
};


export default CocktailList;
