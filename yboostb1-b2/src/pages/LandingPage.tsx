import React from 'react';
import Caroussel from '../Composant/Caroussel.tsx'; // Vérifie bien le chemin du fichier
import Template_logo from '../Composant/template_logo.tsx';
import SearchBar from '../Composant/SearchBar.tsx';

const LandingPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <Template_logo enableSearchBar={false}/>
      <Caroussel />
    </div>
  );
};

export default LandingPage;
