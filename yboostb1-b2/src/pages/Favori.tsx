import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Composant/Button.tsx';
import Button_Cocktail from '../Composant/Button_Cocktail.tsx';

const Favori = () => {
  return (
    <><div className="bg-black h-20 text-gray-300 flex justify-center pt-6">
      <h1 className="text-4xl font-bold text-green-400">
        Shake <span className="text-blue-300 ">LAB</span>
      </h1>
    </div> 
    <div className="flex flex-col justify-center h-auto w-screen ml-8">
        <Button_Cocktail/>
        <Button_Cocktail/>
    </div>

    </>
    
  )}

  export default Favori;