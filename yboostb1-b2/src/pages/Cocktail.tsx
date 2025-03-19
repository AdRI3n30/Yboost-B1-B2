import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer l'ID depuis l'URL
import Image from '../Composant/image.tsx';
import Ndt from '../Composant/ndt.tsx';

const Cocktail = () => {
  const { id } = useParams<{ id: string }>(); // Récupération de l'ID du cocktail depuis l'URL
  const [cocktail, setCocktail] = useState<any>(null); // État pour stocker les données du cocktail
  const [isVisible, setIsVisible] = useState(false);
  const shakeDivRef = useRef<HTMLDivElement>(null); // Référence pour le cadre "shakeDiv"

  // Fonction pour récupérer les données du cocktail
  const fetchCocktail = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cocktails/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      setCocktail(data); // Stocker les données récupérées
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchCocktail(); // Appel à l’API lors du montage du composant
  }, [id]);

  // Gérer les clics en dehors du cadre "shakeDiv"
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isVisible && shakeDivRef.current && !shakeDivRef.current.contains(event.target as Node)) {
        setIsVisible(false); // Fermer le cadre si on clique à l'extérieur
      }
    };

    document.addEventListener('mousedown', handleOutsideClick); // Ajouter un gestionnaire global
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Nettoyer le gestionnaire
    };
  }, [isVisible]);

  // Si les données ne sont pas encore chargées
  if (!cocktail) {
    return <div>Chargement...</div>;
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
        {cocktail.Name} <span className="text-blue-300">Details</span>
      </h1>

      <Image />
      <Ndt
        name={cocktail.Name}
        difficulty={cocktail.Id_difficulte}
        time={cocktail.Temps}
      />

      <div
        className="flex flex-column w-screen h-auto justify-center"
        onClick={handleClick}
      >
        <div className="bg-gradient-to-r from-green-600 via-amber-300 to-green-600 w-36 h-16 flex rounded-full mt-8 justify-center items-center cursor-pointer">
          <h1 className="text-2xl font-bold text-white">Shake !</h1>
        </div>
      </div>

      {isVisible && (
        <div
          id="shakeDiv"
          ref={shakeDivRef} // Référence au cadre
          className="bg-gradient-to-br from-slate-500 to-emerald-300 w-full h-64 absolute bottom-0 flex p-10 text-white text-xl rounded-t-lg flex-col"
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="flex justify-between">
            <h1 className="text-white font-bold">Nom : {cocktail.Name}</h1>
            <h1 className="text-white font-bold">Difficulté : {cocktail.Id_difficulte}</h1>
          </div>
          <div className="mt-4">
            <h1 className="text-white font-bold">Temps : {cocktail.Temps} minutes</h1>
          </div>
          <div className="mt-4">
            <p className="text-white font-bold">Description : {cocktail.Descri}</p>
          </div>
          <div className="mt-4">
            <h1 className="text-white font-bold">Ingrédients :</h1>
            <p>{cocktail.Ingredients}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cocktail;
