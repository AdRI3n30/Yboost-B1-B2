import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import List from './pages/List.tsx';
import Favori from './pages/Favori.tsx';
import Cocktail from './pages/Cocktail.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LandingProfil from './pages/LandingProfil.tsx';


const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        <Route path="/favori" element={<Favori />} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="/cocktail" element={<Cocktail />} /> 
        <Route path="/profil" element={<LandingProfil />} />          
      </Routes>
    </Router>
  );
};


export default App;