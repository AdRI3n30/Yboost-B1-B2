import React from 'react';
import Caroussel from '../Composant/Caroussel.tsx'; // Vérifie bien le chemin du fichier
import Template_logo from '../Composant/template_logo.tsx';
import SearchBacr from '../Composant/SearchBar.tsx';
import NavigationBar from "../Composant/NavigationBar.tsx";

const LandingPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <Template_logo enableSearchBar={false}/>
      <Caroussel />
      <NavigationBar />
    </div>
  );
};

export default LandingPage;
