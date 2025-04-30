import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import List from './pages/List.tsx';
import Cocktail from './pages/Cocktail.tsx';
import LandingPage from './pages/LandingPage.tsx';
import Preparation from './pages/Preparation.tsx';
import Test from './pages/Test.tsx';
import Liste_cocktail from './pages/Liste_cocktail.tsx';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="/preparation" element={<Preparation/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/liste_cocktail" element={<Liste_cocktail/>} />
      </Routes>
    </Router>
  );
};


export default App;