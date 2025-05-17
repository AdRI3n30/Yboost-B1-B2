import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="flex justify-center items-center">
    <motion.div
      className="min-h-screen text-white px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <motion.p
          className="text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Chargement des cocktails...
        </motion.p>
      ) : error ? (
        <motion.div
          className="text-center text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {cocktails.map((cocktail) => {
            return (
              <motion.div
                key={cocktail.Id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="min-w-0 flex justify-center"
              >
                <div
                  className="flex items-end w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square bg-cover rounded-[20px] text-end text-white bg-[0%_70%] shadow-xl"
                  style={{
                    backgroundImage: `url(/image_cock/${cocktail.Image})`,
                    boxShadow: "inset 0px -100px 46px -24px rgba(0,0,0,0.63)"
                  }}
                >
                  <Link to={`/cocktails/${cocktail.Id}`} className="relative z-10 block w-full h-full">
                    <div className="p-4 sm:p-5 h-full flex flex-col justify-end text-start">
                      <h2 className="text-lg sm:text-xl font-bold mb-1">{cocktail.Name}</h2>
                      <p className="text-xs sm:text-sm text-gray-200 mb-1">
                        Difficulté : {cocktail.Id_difficulte}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-200">
                        Temps : {cocktail.Temps} min
                      </p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
    </div>
  );
};

export default CocktailList;
