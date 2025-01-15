import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import List from './pages/List.tsx';
import Favori from './pages/Favori.tsx';
import Cocktail from './pages/Cocktail.tsx';
import Login from './pages/Login.tsx';
import TestB1 from './pages/testB1.tsx';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        <Route path="/favori" element={<Favori />} />
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/formulaire" element={<Login />} />
        <Route path="/testB1" element={<TestB1 />} />
      </Routes>
    </Router>
  );
};


export default App;