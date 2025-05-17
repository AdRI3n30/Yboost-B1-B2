import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.tsx';
import List from './pages/List.tsx';
import Cocktail from './pages/Cocktail.tsx';
import LandingPage from './pages/LandingPage.tsx';
import NavigationBarWeb from './Composant/NavigationBarWeb.tsx';
import Apropos from './pages/Apropos.tsx';

const App = () => {
  return (
<div className={window.location.pathname === '/' ? '' : 'p-4 w-full relative'}>
  <Router>
    {window.location.pathname !== '/' && <NavigationBarWeb />}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/cocktails/:id" element={<Cocktail />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </Router>
</div>
  );
};

export default App;