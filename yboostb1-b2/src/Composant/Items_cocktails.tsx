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
const cocktailimg = require("../image/cocktail2.jpg");


const Items_cocktails = () => {
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
    <div className="flex items-end w-[350px] h-[350px] bg-cover bg-center rounded-[20px] text-end text-white bg-[0%_70%] shadow-xl"
        style={{ backgroundImage: `url(${cocktailimg})` }}>
        
        
        <h1 className="ml-[25px] mb-[25px] text-2xl font-semibold font-poppins">Margarita</h1>
    </div>

    );  
};
export default Items_cocktails;